import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 203;

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedCountRef = useRef(0);
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animationFrameIdRef = useRef(null);
  const [initialFrameReady, setInitialFrameReady] = useState(false);

  // Helper to format frame path with production-safe URL
  const getFrameSrc = (index) => {
    const padded = String(index).padStart(3, '0');
    const base = import.meta.env.BASE_URL || '/';
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    return `${normalizedBase}Video_frames/ezgif-frame-${padded}.jpg`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });

    // Initialize image cache
    imagesRef.current = new Array(TOTAL_FRAMES + 1);

    // Function to render a specific frame onto canvas with 16:9 cover fit
    const renderFrame = (frameNum) => {
      let targetImg = imagesRef.current[frameNum];

      // Fallback: if current frame not ready, find closest loaded frame
      if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) {
        for (let delta = 1; delta < TOTAL_FRAMES; delta++) {
          const prev = frameNum - delta;
          const next = frameNum + delta;
          if (prev >= 1 && imagesRef.current[prev]?.complete && imagesRef.current[prev]?.naturalWidth > 0) {
            targetImg = imagesRef.current[prev];
            break;
          }
          if (next <= TOTAL_FRAMES && imagesRef.current[next]?.complete && imagesRef.current[next]?.naturalWidth > 0) {
            targetImg = imagesRef.current[next];
            break;
          }
        }
      }

      if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      const imgWidth = targetImg.naturalWidth || 1920;
      const imgHeight = targetImg.naturalHeight || 1080;
      const imgRatio = imgWidth / imgHeight;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        // Keep subject well positioned (slightly right-of-center for subject visibility)
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      try {
        ctx.drawImage(targetImg, offsetX, offsetY, drawWidth, drawHeight);
      } catch (err) {
        // Safe catch if image state is invalid during drawing
      }
    };

    let hasRenderedInitial = false;
    const markInitialRender = (frameToRender = 1) => {
      if (!hasRenderedInitial) {
        hasRenderedInitial = true;
        setInitialFrameReady(true);
        renderFrame(frameToRender);
      }
    };

    // Load initial frame 1 with priority
    const firstImg = new Image();
    firstImg.src = getFrameSrc(1);
    imagesRef.current[1] = firstImg;
    firstImg.onload = () => {
      loadedCountRef.current += 1;
      markInitialRender(1);
    };
    firstImg.onerror = () => {
      // Mark ready if frame 1 errors so fallback logic can render other frames as they load
      markInitialRender(1);
    };

    // Background preloader for all remaining frames
    const preloadAllFrames = () => {
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFrameSrc(i);
        imagesRef.current[i] = img;
        img.onload = () => {
          loadedCountRef.current += 1;
          markInitialRender(Math.round(currentFrameRef.current));
        };
        img.onerror = () => {
          // Gracefully continue without crashing; fallback logic will use nearest available frame
        };
      }
    };

    preloadAllFrames();

    // Scroll listener: update target frame
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      
      // Calculate target frame 1..203
      const target = 1 + scrollFraction * (TOTAL_FRAMES - 1);
      targetFrameRef.current = target;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      renderFrame(Math.round(currentFrameRef.current));
    });

    // Smooth animation loop using lerp (Linear Interpolation)
    let lastRenderedFrame = 1;
    const animate = () => {
      // Adaptive lerp factor:
      // Normal/gentle scroll: low factor (~0.12) ensures smooth, cinematic frame blending.
      // Fast scroll / large delta: factor scales dynamically (up to ~0.42) so the background
      // immediately tracks the scroll position without lagging behind.
      const diff = targetFrameRef.current - currentFrameRef.current;
      const absDiff = Math.abs(diff);

      if (absDiff > 0.01) {
        // Dynamic speed scale: as the frame distance grows, responsiveness ramps up smoothly
        const baseFactor = 0.12;
        const maxFactor = 0.42;
        const threshold = 40; // frame distance for maximum response
        const progress = Math.min(1, absDiff / threshold);
        // Smooth ease-out curve for natural response acceleration
        const adaptiveFactor = baseFactor + (maxFactor - baseFactor) * (1 - Math.pow(1 - progress, 2));

        currentFrameRef.current += diff * adaptiveFactor;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameToRender = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(currentFrameRef.current)));
      if (frameToRender !== lastRenderedFrame) {
        renderFrame(frameToRender);
        lastRenderedFrame = frameToRender;
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div className="canvas-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="canvas-background" />
      <div className="canvas-vignette" />
    </div>
  );
}
