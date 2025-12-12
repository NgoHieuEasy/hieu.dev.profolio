import AIBOT from "./assets/AI-BOT.png";
import AICEX from "./assets/AICEX.png";
import XAI from "./assets/XAI.png";

export const PROJECT_VN = [
  {
    id: 1,
    projectTitle: "Tổng Quan Dự Án #1",
    screenshot: AICEX,
    ribbon: "CEX · Lead Frontend",
    duration: "9 tháng",
    role: "Lead Frontend",
    metaTitle: "Tradex - Centralized Exchange (CEX)",
    summary:
      "Dự án sàn giao dịch tập trung (CEX) cung cấp chức năng Spot, Futures, nạp/rút tiền, KYC...",
    roleTitle: "Vai trò & nhiệm vụ chính",
    roles: [
      "Lead frontend — dẫn dắt team, định hướng kiến trúc frontend",
      "Giao tiếp & phối hợp với Backend, BA và Tester",
      "Phát triển chức năng Futures",
      "Phát triển chức năng Spot",
      "Xây dựng chức năng Nạp / Rút tiền",
      "Triển khai KYC",
      "Quản lý Portfolio cho user",
      "Tính năng sự kiện: broker, node, campaign…",
    ],
    techTitle: "Công nghệ",
    tech: [
      "ReactJS",
      "TypeScript",
      "NestJS",
      "WebSocket",
      "REST API",
      "JWT / Auth",
    ],
    link: "https://tradex.elonhash.com/",
    caseStudy: {
      title: "Chi tiết công việc (tóm tắt)",
      list: [
        "Thiết kế kiến trúc component, state management, tối ưu realtime.",
        "Thiết kế UI orderbook, trade feed, chart, WebSocket latency thấp.",
        "Xây dựng flow KYC: upload, verify, tracking.",
        "Triển khai nạp / rút: UI, 2FA, xử lý trạng thái.",
        "Code review, pair-programming, phối hợp QA.",
        "Tối ưu performance: code-splitting, lazy-loading, memo.",
      ],
      footer: {
        duration: "Thời lượng: 9 tháng",
        role: "Vai trò: Lead Frontend",
      },
    },
  },

  // --- DỰ ÁN 2 ---
  {
    id: 2,
    projectTitle: "Tổng Quan Dự Án #2",
    screenshot: AIBOT,
    ribbon: "BOT TRADING · Lead Frontend",
    duration: "8 tháng",
    role: "Lead Frontend",
    metaTitle: "ApexBit – Bot Trading Futures & Spot",
    summary:
      "ApexBit là dự án bot giao dịch tự động cho phép người dùng kết nối API Binance / Bitget...",
    roleTitle: "Vai trò & chức năng chính",
    roles: [
      "Lead frontend — định hướng kiến trúc giao diện",
      "Xây dựng hệ thống Signals Futures & Spot",
      "Chức năng Nạp / Rút tiền",
      "Xây dựng Admin CMS",
      "Tổng quan tài khoản User",
      "Hệ thống Voucher & ưu đãi",
      "Đăng nhập / Đăng ký",
    ],
    techTitle: "Công nghệ",
    tech: [
      "ReactJS",
      "NestJS",
      "WebSocket",
      "REST API",
      "JWT Auth",
      "Binance API",
      "Bitget API",
    ],
    link: "https://apexbit.cloud/",
    caseStudy: {
      title: "Chi tiết công việc (ApexBit)",
      list: [
        "Thiết kế UI dashboard realtime cho bot Futures & Spot.",
        "Tích hợp API Binance / Bitget thông qua API Key người dùng.",
        "Triển khai signals và trạng thái lệnh.",
        "Nạp / rút tiền + bảo mật 2FA.",
        "Xây dựng Admin CMS.",
        "Tối ưu realtime & bảo mật API Key.",
      ],
      footer: {
        duration: "Thời lượng: 8 tháng",
        role: "Vai trò: Lead Frontend",
      },
    },
  },

  // --- DỰ ÁN 3 ---
  {
    id: 3,
    projectTitle: "Tổng Quan Dự Án #3",
    screenshot: XAI,
    ribbon: "CLOSED",
    duration: "8 tháng",
    role: "Frontend Core",
    metaTitle: "Nền tảng đầu tư sinh lời – Connect Wallet",
    summary:
      "Nền tảng đầu tư sinh lời, người dùng nạp tiền vào các quỹ và nhận lợi nhuận hằng ngày...",
    roleTitle: "Vai trò & chức năng chính",
    roles: [
      "Chức năng Quỹ đầu tư",
      "Nạp / Rút tiền",
      "Trang quản trị Admin",
      "Tổng quan tài khoản User",
      "Chức năng Sự kiện",
      "Theo dõi Quỹ đầu tư",
      "Đăng nhập bằng Connect Wallet",
    ],
    techTitle: "Công nghệ",
    tech: [
      "ReactJS",
      "NestJS",
      "Web3",
      "WalletConnect",
      "REST API",
      "JWT Auth",
    ],
    caseStudy: {
      title: "Chi tiết công việc (Investment Platform)",
      list: [
        "UI danh sách quỹ đầu tư.",
        "Connect ví (MetaMask / WalletConnect).",
        "Dashboard lợi nhuận realtime.",
        "Nạp / rút tiền đa trạng thái.",
        "Admin CMS đầy đủ module.",
        "Hệ thống sự kiện.",
      ],
      footer: {
        duration: "Thời lượng: 8 tháng",
        role: "Nền tảng: Investment Web3",
      },
    },
  },
];

export const PROJECT_EN = [
  {
    id: 1,
    projectTitle: "Project Overview #1",
    screenshot: AICEX,
    ribbon: "CEX · Lead Frontend",
    duration: "9 months",
    role: "Lead Frontend",
    metaTitle: "Tradex - Centralized Exchange (CEX)",
    summary:
      "A full-featured CEX platform including Spot, Futures, deposit/withdraw, KYC...",
    roleTitle: "Main Responsibilities",
    roles: [
      "Lead frontend — system architecture & UI direction",
      "Collaborate with Backend, BA, QA",
      "Develop Futures module",
      "Develop Spot module",
      "Build Deposit / Withdraw",
      "Implement KYC flow",
      "Portfolio module",
      "Event & campaign features",
    ],
    techTitle: "Technologies",
    tech: [
      "ReactJS",
      "TypeScript",
      "NestJS",
      "WebSocket",
      "REST API",
      "JWT / Auth",
    ],
    link: "https://tradex.elonhash.com/",
    caseStudy: {
      title: "Work Summary",
      list: [
        "Component architecture & realtime optimization.",
        "Orderbook, trade feed, chart, low-latency websocket.",
        "KYC flow: validation, upload, verify.",
        "Deposit / withdraw with 2FA.",
        "Code review & QA collaboration.",
        "Performance optimization.",
      ],

      footer: {
        duration: "Duration: 9 months",
        role: "Role: Lead Frontend",
      },
    },
  },

  {
    id: 2,

    projectTitle: "Project Overview #2",
    title: "ApexBit – Futures & Spot Bot Trading",
    screenshot: AIBOT,
    summary:
      "ApexBit is an automated trading bot platform that allows users to connect their Binance or Bitget API Keys and let the bot execute Futures and Spot orders based on trading signals. I served as the Lead Frontend throughout 8 months of development.",
    rolesTitle: "Roles & Key Responsibilities",
    roles: [
      "Lead frontend — architecture planning & UI structure",
      "Developed Futures & Spot trading signal system",
      "Implemented Deposit / Withdrawal system",
      "Built the Admin Management System",
      "Built User Account Overview",
      "Developed Voucher & Promotion system",
      "Implemented Login / Register flow",
    ],
    techTitle: "Technologies",
    linkLabel: "Visit website →",
    ribbon: "BOT TRADING · Lead Frontend",
    duration: "8 months",
    role: "Lead Frontend",
    link: "https://apexbit.cloud/",
    tech: [
      "ReactJS",
      "NestJS",
      "WebSocket",
      "REST API",
      "JWT Auth",
      "Binance API",
      "Bitget API",
    ],
    caseStudy: {
      title: "Work Summary (ApexBit)",
      list: [
        "Designed a real-time trading dashboard for Futures & Spot bot execution.",
        "Integrated Binance & Bitget APIs using user-provided API Keys.",
        "Implemented trading signals, order status processing, and trade history tracking.",
        "Built Deposit / Withdrawal system with verification and 2FA security.",
        "Developed Admin CMS: user, bot, voucher, and log management.",
        "Optimized real-time performance & enhanced API Key data security.",
      ],
      footer: {
        duration: "Duration: 8 months",
        role: "Role: Lead Frontend",
      },
    },
  },
  {
    id: 3,
    projectTitle: "Project Overview #3",
    screenshot: XAI,
    title: "Profit-Generating Investment Platform – Connect Wallet",
    summary:
      "This is a profit-yielding investment platform that allows investors to deposit funds into multiple investment pools and earn daily returns based on each pool. Users log in by connecting their crypto wallets. I was responsible for developing all core frontend features during 8 months of development.",
    rolesTitle: "Roles & Key Responsibilities",
    roles: [
      "Developed Investment Fund features",
      "Developed Deposit / Withdrawal features",
      "Built Admin Management Dashboard",
      "Built User Account Overview",
      "Developed Event & Campaign features",
      "Developed Fund Performance Tracking",
      "Implemented Login via Connect Wallet",
    ],
    role: "Dev FrontEnd",
    duration: "8 months",
    techTitle: "Technologies",
    ribbon: "CLOSED",

    tech: [
      "ReactJS",
      "NestJS",
      "Web3",
      "WalletConnect",
      "REST API",
      "JWT Auth",
    ],
    caseStudy: {
      title: "Work Summary (Investment Platform)",
      list: [
        "Developed fund list interface, ROI percentage, and earning cycle display.",
        "Implemented wallet connection (MetaMask / WalletConnect).",
        "Built real-time profit tracking dashboard.",
        "Implemented multi-state deposit/withdrawal system.",
        "Developed Admin CMS for fund, user, and transaction management.",
        "Built event system & participant tracking.",
      ],
      footer: {
        duration: "Duration: 8 months",
        role: "Platform: Investment Web3",
      },
    },
  },
];

export const YOURSELF_VN = {
  title: "Xin chào, tôi là",
  desc: "Tôi là Frontend Developer với hơn 3 năm kinh nghiệm chuyên sâu cùng ReactJS, hơn 1 năm phát triển các hệ thống Thương mại điện tử và hơn 2 năm kinh nghiệm về nghiệp vụ Blockchain & DeFi. Tôi luôn tập trung vào hiệu năng, trải nghiệm người dùng và chất lượng sản phẩm.",
  titleTech: "Công nghệ",
  desTech: "Các công nghệ tôi sử dụng để xây dựng hệ thống thực tế và sản phẩm",
  yourSelf:
    "Tôi là một lập trình viên web với nền tảng vững chắc về Công nghệ thông tin, tốt nghiệp chuyên ngành CNTT. Tôi từng đạt chứng chỉ Nghiên cứu Khoa học cấp Trường loại Xuất sắc , thể hiện tư duy logic, khả năng phân tích và nghiên cứu chuyên sâu. Với kinh nghiệm thực chiến trong các dự án lớn về ReactJS, Blockchain, E-commerce và Web3, tôi tự tin xây dựng những sản phẩm có tính ứng dụng và giá trị thương mại cao",
};
export const YOURSELF_EN = {
  title: "Hello, I'm",
  desc: "I am a Frontend Developer with over 3 years of experience in ReactJS, more than 1 year in E-commerce system development, and over 2 years working with Blockchain & DeFi. I always focus on performance, user experience and product quality.",
  titleTech: "Technology Stack",
  desTech:
    "The technologies I use to build the real-world system & commercial product",

  yourSelf:
    "I am a web developer with a solid background in Information Technology, graduating with a major in IT. I earned an Excellent-level Scientific Research Certificate at the university level, demonstrating strong logical thinking, analytical ability, and deep research skills.With hands-on experience in large-scale projects involving ReactJS, Blockchain, E-commerce, and Web3, I am confident in building products with high practicality and commercial value.",
};
