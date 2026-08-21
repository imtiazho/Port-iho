export const portfolioData = {
  hero: {
    name: "FULL-STACK SOFTWARE ENGINEER",
    location: "BASED IN BANGLADESH — WORKING WORLDWIDE",
    titleLine1: "I BUILD",
    titleLine2: "DIGITAL",
    titleLine3: "PRODUCTS",
    titleLine4: "THAT WORK.",
    description:
      "Full-stack software engineer turning complex ideas into scalable web applications, SaaS platforms and real-world digital products.",
    services: [
      "01 PRODUCT ENGINEERING",
      "02 FULL-STACK DEVELOPMENT",
      "03 DIGITAL EXPERIENCES",
    ],
    buttonText: "EXPLORE WORK",
    availability: "AVAILABLE",
  },

  projects: [
    {
      id: "01",
      slug: "zapshift",
      title: "ZAPSHIFT",
      category: "Full-Stack",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      overview:
        "ZapShift is an automated real-time shift dispatch platform engineered for enterprise logistics operations.",
      challenge:
        "Legacy dispatch workflows suffered high latency and complex shift scheduling bottlenecks for 50,000+ drivers.",
      solution:
        "Engineered a reactive dashboard with real-time WebSocket state syncing, drag-and-drop scheduling, and instant automated notifications.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "WebSockets",
        "Redis",
      ],
      liveLink: "https://example.com/zapshift",
      githubLink: "https://github.com/minhpham/zapshift",
      metrics: [
        { label: "Dispatch Speed", value: "+140%" },
        { label: "Active Drivers", value: "85,000+" },
        { label: "Latency", value: "<15ms" },
      ],
    },
    {
      id: "02",
      slug: "edumanage",
      title: "EDUMANAGE",
      category: "Backend",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      overview:
        "EduManage is an interactive SaaS platform for higher education institutions to manage curriculum, grading, and student analytics.",
      challenge:
        "Academic staff struggled with disjointed user interfaces across multiple legacy grading and enrollment systems.",
      solution:
        "Unified student data into an intuitive editorial dashboard featuring interactive progress charts, role-based access, and automated report generation.",
      techStack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "GraphQL",
      ],
      liveLink: "https://example.com/edumanage",
      githubLink: "https://github.com/minhpham/edumanage",
      metrics: [
        { label: "Admin Time Saved", value: "-45%" },
        { label: "User Satisfaction", value: "98%" },
        { label: "Institutions Onboarded", value: "120+" },
      ],
    },
    {
      id: "03",
      slug: "smartdeals",
      title: "SMARTDEALS",
      category: "Frontend",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1000&q=80",
      overview:
        "SmartDeals is an AI-powered personal shopping aggregator delivering localized real-time discount alerts.",
      challenge:
        "Users were overwhelmed by generic deal feeds without relevant personalization or geotargeted accuracy.",
      solution:
        "Created a fluid mobile design system with card gestures, AI recommendation engine integration, and instant spatial deal maps.",
      techStack: [
        "React Native",
        "Tailwind CSS",
        "Framer Motion",
        "Python AI API",
      ],
      liveLink: "https://example.com/smartdeals",
      githubLink: "https://github.com/minhpham/smartdeals",
      metrics: [
        { label: "Conversion Rate", value: "+210%" },
        { label: "Daily Active Users", value: "340k" },
        { label: "App Store Rating", value: "4.9 ★" },
      ],
    },
    {
      id: "04",
      slug: "nebula",
      title: "NEBULA",
      category: "3D & Interactive",
      year: "2026",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      overview:
        "Nebula is a generative 3D visual experience showcasing WebGL physics and custom GLSL shaders for luxury product branding.",
      challenge:
        "Creating real-time liquid glass refraction in browser environments while maintaining a solid 60fps frame rate.",
      solution:
        "Utilized customized Three.js raymarching shaders, low-poly collision models, and post-processing bloom effects.",
      techStack: [
        "Three.js",
        "React Three Fiber",
        "GLSL Shaders",
        "Framer Motion",
      ],
      liveLink: "https://example.com/nebula",
      githubLink: "https://github.com/minhpham/nebula-3d",
      metrics: [
        { label: "Frame Rate", value: "60 FPS" },
        { label: "Awwwards Feature", value: "Site of the Day" },
        { label: "Render Time", value: "<8ms" },
      ],
    },
    {
      id: "05",
      slug: "tracker",
      title: "TRACKER",
      category: "Frontend",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      overview:
        "Tracker is a high-frequency financial portfolio intelligence suite designed for institutional crypto traders.",
      challenge:
        "Visualizing complex multi-chain transaction feeds without clogging UI thread execution.",
      solution:
        "Developed custom canvas data visualization charts and lightweight WebSocket streaming hooks.",
      techStack: ["React.js", "D3.js", "Tailwind CSS", "WebSockets"],
      liveLink: "https://example.com/tracker",
      githubLink: "https://github.com/minhpham/tracker",
      metrics: [
        { label: "Volume Tracked", value: "$4.2B+" },
        { label: "UI Response", value: "100% Fluid" },
      ],
    },
    {
      id: "06",
      slug: "volt",
      title: "VOLT",
      category: "3D & Interactive",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      overview:
        "Volt is a futuristic brand design system and e-commerce visual identity for zero-emission performance hardware.",
      challenge:
        "Standing out in a crowded EV market with an aggressive, minimalist editorial visual identity.",
      solution:
        "Crafted custom grotesk typography specs, stark monochrome color contrast tokens, and sleek packaging design.",
      techStack: [
        "Design Tokens",
        "Figma System",
        "3D Blender Render",
        "Tailwind CSS",
      ],
      liveLink: "https://example.com/volt",
      githubLink: "https://github.com/minhpham/volt-brand",
      metrics: [
        { label: "Brand Equity", value: "Top 5 EV" },
        { label: "Press Reach", value: "2.5M Users" },
      ],
    },
    {
      id: "07",
      slug: "echo",
      title: "ECHO",
      category: "Frontend",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1000&q=80",
      overview:
        "Echo is a spatial audio journaling mobile app allowing users to record, map, and relive ambient acoustic memories.",
      challenge:
        "Rendering real-time audio waveform visuals on mobile viewports with minimal battery consumption.",
      solution:
        "Optimized Web Audio API frequency node sampling with hardware-accelerated Skia canvas rendering.",
      techStack: [
        "React Native",
        "Web Audio API",
        "Skia Canvas",
        "Tailwind CSS",
      ],
      liveLink: "https://example.com/echo",
      githubLink: "https://github.com/minhpham/echo-audio",
      metrics: [
        { label: "Audio Latency", value: "4ms" },
        { label: "App Downloads", value: "500k+" },
      ],
    },
  ],
  motto: {
    // quote: "GOOD DESIGN IS HONEST",
    quote: "SHIPPED ONLY WHEN PERFECT",
    author: "Dieter Rams",
  },
  socials: {
    column1: [
      { name: "Dribbble", url: "#" },
      { name: "Youtube", url: "#" },
      { name: "Linkedin", url: "#" },
    ],
    column2: [
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Behance", url: "#" },
    ],
    contact: {
      email: "minhpham.design@gmail.com",
      phone: "+84 345 134 287",
    },
  },
};
