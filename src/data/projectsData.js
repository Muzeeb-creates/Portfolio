/**
 * PORTFOLIO PROJECT CONFIGURATION
 * 
 * You can configure repository URLs and project details here.
 * If a repository URL changes or is added, simply update the `githubUrl` field.
 */

export const PROJECTS = [
  {
    id: 'scanigo',
    name: 'ScaniGo',
    displayTitle: 'ScaniGo',
    badge: 'MOBILE APP',
    tagline: 'Smart Shopping & Instant Checkout Scanner',
    shortDescription:
      'A shopping and checkout app designed to simplify product scanning and receipt generation. Helps users scan products, manage carts, and generate receipts easily.',
    fullDescription:
      'ScaniGo is a mobile shopping companion engineered to eliminate retail checkout friction. By turning any smartphone camera into a high-speed barcode reader, shoppers can scan items as they browse store aisles, keep an accurate tally of their cart with automated tax and discounts, and generate an itemized digital receipt for swift exit verification.',
    purpose:
      'Traditional brick-and-mortar retail checkout lines create friction and lost customer time. ScaniGo empowers shoppers with self-checkout capabilities directly on their own devices, cutting wait times to near zero while providing instant digital proof of purchase.',
    
    // CONFIGURE GITHUB REPOSITORY URL HERE:
    githubUrl: 'https://github.com/mohammadmujeebkazi/ScaniGo',
    
    technologies: [
      'React Native',
      'Expo',
      'JavaScript',
      'Camera API',
      'Local Storage',
      'Vector Icons'
    ],
    
    highlights: [
      {
        title: 'Real-Time Barcode Scanner',
        description: 'Instant optical detection and decoding of standard UPC/EAN barcodes using the native device camera.'
      },
      {
        title: 'Live Cart Totaling & Tax Calc',
        description: 'Automatic price aggregation, quantity controls, and subtotal calculations as items are placed in the cart.'
      },
      {
        title: 'Digital Receipt Generator',
        description: 'Creates verified, itemized digital receipts with transaction timestamps and QR codes for exit validation.'
      },
      {
        title: 'Offline-First Storage',
        description: 'Persists active carts and past transaction history locally for zero-latency lookups without internet drops.'
      }
    ],

    metrics: [
      { label: 'Scan Latency', value: '<180ms' },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Framework', value: 'Expo / React Native' },
      { label: 'Data Model', value: 'Offline-First' }
    ],

    type: 'mobile'
  },
  {
    id: 'tradelog',
    name: 'TradeLog',
    displayTitle: 'Personal Trading Journal',
    badge: 'WEB APP',
    tagline: 'Systematic Trading Journal & Equity Analytics',
    shortDescription:
      'A personal trading journal web app to track trades, analyze performance and improve consistency. Built with modern web technologies and local storage.',
    fullDescription:
      'TradeLog is a dedicated trade journaling and quantitative performance review platform. Designed for independent market participants who adhere to rule-based execution, it systematically records trade entries/exits, tracks live equity curve progression, and computes statistical edges across win rate, risk-to-reward ratios, and market sessions.',
    purpose:
      'Most retail traders fail due to emotional bias and lack of post-trade review. TradeLog enforces discipline through systematic logging, automated expectancy calculations, and visual drawdown metrics that illuminate true market edge.',

    // CONFIGURE GITHUB REPOSITORY URL HERE:
    githubUrl: 'https://github.com/mohammadmujeebkazi/TradeLog',

    technologies: [
      'React',
      'JavaScript',
      'Local Storage',
      'Chart Analytics',
      'CSS3 Flexbox',
      'Lucide Icons'
    ],

    highlights: [
      {
        title: 'Interactive Equity Curve',
        description: 'Visualizes account balance progression and drawdown trajectory over time with automated trendline analytics.'
      },
      {
        title: 'Statistical Edge Metrics',
        description: 'Real-time calculation of Win Rate (68.8%), Best/Worst trades, captured pips, and Long vs. Short directional profitability.'
      },
      {
        title: 'Pre-Trade Rule Checklist',
        description: 'Enforces adherence to strict risk limits (1-2% capital cap) and confluence verification before order logging.'
      },
      {
        title: 'Confidential Local Storage',
        description: 'All financial trade records, account balances, and journals remain 100% private and encrypted within the browser.'
      }
    ],

    metrics: [
      { label: 'Win Rate Tracked', value: '68.8%' },
      { label: 'Risk/Reward Ratio', value: '1:3.2 Avg' },
      { label: 'Storage Engine', value: 'Local Storage' },
      { label: 'Analytics', value: 'Automated P&L' }
    ],

    type: 'web'
  }
];
