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
  services: [
    { label: "FULL - STACK" },
    { label: "SAAS PRODUCT" },
    { label: "INTERACTIVE UI" },
    { label: "REACT / NODE" },
  ],
  servicesDescription:
    "I create engaging visual experiences through motion, design and storytelling.",
  experience: {
    title: "EXPERIENCE",
    textBefore: "Over a ",
    highlight: "decade",
    textAfter:
      " of experience in interactive design and working with some of the most talented people in the business.",
  },
  history: [
    {
      year: "NOW",
      role: "Design Lead",
      company: "Fantasy Interactive",
      active: true,
    },
    {
      year: "2016",
      role: "Senior Product Designer",
      company: "Medium / Uber / Framer",
      active: false,
    },
    {
      year: "2012",
      role: "Art Director",
      company: "DBL, Omnicom Group",
      active: false,
    },
    {
      year: "2009",
      role: "Flash Designer",
      company: "DBL, Omnicom Group",
      active: false,
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Deep Discovery & Research",
      description:
        "Deconstructing product requirements, auditing user psychology, defining interaction mechanics, and setting strategic artistic direction.",
      deliverable: "Product Architecture & Moodboard",
    },
    {
      step: "02",
      title: "Interactive UI & 3D Prototyping",
      description:
        "Designing tactile interfaces with WebGL/Three.js shaders, custom motion physics, and continuous micro-interactions.",
      deliverable: "High-Fidelity Motion Prototypes",
    },
    {
      step: "03",
      title: "Clean Modular Code",
      description:
        "Architecting scalable React component hierarchies with strict design tokens, Framer Motion transitions, and clean state logic.",
      deliverable: "Production-Grade Codebase",
    },
    {
      step: "04",
      title: "Performance & FPS Optimization",
      description:
        "Optimizing 3D draw calls, bundle sizes, lazy loading, layout thrashing, and sub-millisecond response times for 60fps fluidity.",
      deliverable: "Lighthouse 95+ Audit",
    },
    {
      step: "05",
      title: "Seamless Shipping & Scale",
      description:
        "Deploying high-converting digital products, continuous delivery pipelines, and post-launch design system governance.",
      deliverable: "Global Product Launch",
    },
  ],
  clients: [
    {
      id: "ford",
      name: "FORD",
      quote:
        "“Minh understands how to turn complex ideas into beautiful, intuitive interactive experiences.”",
      author: "Sarah Jenkins",
      role: "Creative Director",
      company: "Ford Next",
    },
    {
      id: "ufc",
      name: "UFC",
      quote:
        "“His motion direction and visual craft elevated our brand strategy to global awards standards.”",
      author: "Dana White",
      role: "VP of Brand Strategy",
      company: "UFC Media",
    },
    {
      id: "lincoln",
      name: "LINCOLN",
      quote:
        "“Minh brings a refined editorial artistic lens to high-end digital luxury storytelling.”",
      author: "Marcus Vance",
      role: "Global Design Lead",
      company: "Lincoln Motor Co.",
    },
    {
      id: "royal-caribbean",
      name: "ROYAL CARIBBEAN",
      highlightStrip:
        "I was part of the team on a massive team that created an entire Royal Caribbean new system.",
      quote:
        "“Minh is seriously the best and he never complains. He led key parts of our new global design system.”",
      author: "Michael Glass",
      role: "Group Design Director",
      company: "Fantasy Interactive",
    },
    {
      id: "sleep-iq",
      name: "SLEEP IQ",
      quote:
        "“World-class execution, meticulous attention to detail, and incredible 3D visual language.”",
      author: "Elena Rostova",
      role: "Head of Product",
      company: "SleepIQ Labs",
    },
    {
      id: "nfl",
      name: "NFL",
      quote:
        "“Pushed our digital interactive boundaries further than any design director we've collaborated with.”",
      author: "David Thorne",
      role: "Digital Executive Director",
      company: "NFL Interactive",
    },
  ],
  testimonials: [
    {
      id: 1,
      quote: "“Minh is seriously the best and he never complains.”",
      author: "Michael Glass",
      role: "Group Design Director",
      company: "Fantasy Interactive",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      quote:
        "“Minh understands how to build products that captivate users from the first millisecond.”",
      author: "Alex Rivera",
      role: "VP of Product & Motion",
      company: "Medium",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      quote:
        "“Rare combination of deep 3D artistry, product engineering mindset, and flawless execution.”",
      author: "Sophia Chen",
      role: "Executive Creative Director",
      company: "Framer Design Studio",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
  ],
  projects: [
    {
      id: "01",
      slug: "zapshift",
      title: "ZAPSHIFT",
      category: "Web App",
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
      category: "Web App",
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
      category: "Mobile App",
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
      category: "3D Motion",
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
      category: "Web App",
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
      category: "Branding",
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
      category: "Mobile App",
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
