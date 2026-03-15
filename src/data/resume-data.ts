import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Max Shalenkov",
  initials: "MS",
  location: "Batumi, Georgia",
  locationLink: "https://www.google.com/maps/place/Batumi",
  about:
    "Senior IT Operations Engineer who turns homelab experiments into production-grade infrastructure.",
  summary:
    "By day, keeping internal IT services running smoothly at Mirantis. By night, operating a live VPN service for 100+ users, automating everything in sight, and self-hosting half the internet on Proxmox. Passionate about network security, infrastructure-as-code, and building things that actually work at scale.",
  avatarUrl: "https://avatars.githubusercontent.com/u/6942458?v=4",
  personalWebsiteUrl: "https://shalenkov.dev",
  contact: {
    email: "max@shalenkov.dev",
    tel: "+995599566247",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/TrackLine",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/trackline/",
        icon: "linkedin",
      },
      {
        name: "Telegram",
        url: "https://t.me/trackline",
        icon: "telegram",
      },
    ],
  },
  education: [
    {
      school: "Yuri Gagarin State Technical University of Saratov",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Mirantis Inc",
      link: "https://mirantis.com",
      badges: ["Remote", "Linux", "Ansible", "Python", "Docker"],
      title: "IT Operations Engineer",
      start: "2021",
      end: null,
      description:
        "Part of the IT Operations team administering internal services and tooling used by 600+ employees across the organization.",
      responsibilities: [
        "Internal IT services administration and support",
        "Identity and access management",
        "Security tooling and operational improvements",
        "Cross-team IT operations coordination",
      ],
      achievements: [
        "Led company-wide migration from LastPass to 1Password for 600+ users",
        "Built an internal Employee Account Audit System providing unified visibility into employee accounts across all managed external services",
        "Deployed an AI-powered chatbot for the IT support channel, reducing response time and manual workload",
      ],
    },
    {
      company: "SVIK LLC",
      link: "https://www.google.com/maps/place/Saratov",
      badges: ["On Site", "Windows Server", "Active Directory", "VoIP"],
      title: "Systems Administrator",
      start: "2019",
      end: "2021",
      description:
        "Built and maintained the entire IT infrastructure from the ground up, serving as the sole IT specialist for a 50+ user organization.",
      responsibilities: [
        "Network and server infrastructure administration",
        "Database and corporate services management",
        "IT budget planning and infrastructure development",
        "User support and onboarding",
      ],
      achievements: [
        "Deployed Active Directory, enabling centralized authentication and accelerating employee onboarding",
        "Migrated telephony to VoIP (IP telephony), significantly reducing communication costs",
        "Implemented corporate email system for the entire organization",
        "Maintained stable IT operations for 50+ users as a single-person IT department",
      ],
    },
  ],
  skills: [
    "Linux",
    "Docker",
    "Ansible",
    "Bash",
    "Python",
    "Git",
    "CI/CD",
    "Proxmox",
    "Networking",
    "DNS",
    "VPN",
    "HAProxy",
    "OPNsense",
    "Active Directory",
    "Authentik",
    "PostgreSQL",
    "Monitoring",
    "LLMs",
  ],
  projects: [
    {
      title: "mcp-remnawave",
      techStack: ["MCP", "TypeScript", "Docker", "LLMs"],
      description:
        "MCP server exposing 51 tools for managing Remnawave VPN panels directly from LLM clients like Claude Desktop, Cursor, and Windsurf.",
      link: {
        label: "github.com/TrackLine/mcp-remnawave",
        href: "https://github.com/TrackLine/mcp-remnawave",
      },
    },
    {
      title: "Fragment API Gateway",
      techStack: ["REST API", "TON", "Python", "Telegram Bot"],
      description:
        "Automated REST API for programmatically purchasing Telegram Stars and Premium subscriptions via the TON blockchain, with multi-wallet load balancing and webhook notifications.",
      link: {
        label: "github.com/TrackLine/fragment-api-gateway",
        href: "https://github.com/TrackLine/fragment-api-gateway",
      },
    },
    {
      title: "Telegram Shop Bot",
      techStack: ["Python", "FastAPI", "aiogram", "PostgreSQL", "Docker"],
      description:
        "Lightweight Telegram-based e-commerce bot for selling digital goods with full shop flow, YooKassa payments, FNS receipt generation, and an admin dashboard.",
      link: {
        label: "github.com/TrackLine/telegram-shop-bot",
        href: "https://github.com/TrackLine/telegram-shop-bot",
      },
    },
    {
      title: "Vampurrr Tower LK",
      techStack: ["Web App", "PostgreSQL", "Scheduling"],
      description:
        "Member portal for a tabletop RPG club — game scheduling, player profiles, session time tracking, internal currency system (V-Coin), and a game master dashboard.",
      link: {
        label: "lk.vampurrr-tower.ru",
        href: "https://lk.vampurrr-tower.ru",
      },
    },
  ],
} as const;
