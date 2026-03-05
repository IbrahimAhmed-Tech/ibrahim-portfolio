// Centralized content data for the portfolio

export const personalInfo = {
  name: "Ibrahim Ahmed",
  title:
    ".NET Engineer | ASP.NET & C# Specialist | Legacy System Modernization | Enterprise Applications",
  email: "ibrahimahmed9578@gmail.com",
  github: "https://github.com/IbrahimAhmed",
  portfolioTitle: "Portfolio",
};

export const heroContent = {
  greeting: "Hi, I'm",
  name: personalInfo.name,
  title: personalInfo.title,
  description:
".NET Engineer building enterprise applications with C# and ASP.NET. Specializes in legacy system modernization, production support, and robust backend solutions using SQL Server and VB.NET."  buttons: {
    getInTouch: {
      text: "Get in Touch",
      href: "#contact",
    },
    viewProjects: {
      text: "View Projects",
      href: "#projects",
    },
  },
};

export const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  { name: "C#", category: "Language" },
  { name: ".NET Framework", category: "Backend" },
  { name: "ASP.NET", category: "Backend" },
  { name: "ASP.NET MVC", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "SQL Server", category: "Database" },
  { name: "VB.NET", category: "Backend" },
  { name: "VB6", category: "Legacy Systems" },
];

export const skillsSection = {
  title: "Technology Stack",
  description:
    "Specialized in the Microsoft .NET ecosystem, building and maintaining enterprise-grade applications with C#, ASP.NET, and SQL Server. Experienced in modernizing legacy systems, designing secure APIs, and stabilizing complex production environments.",
};

export const experiences = [
  {
    title: ".NET Web & Desktop Applications",
    description:
      "Building and maintaining enterprise-grade .NET applications, including ASP.NET web apps and desktop solutions. Specialized in modernizing legacy VB.NET and VB6 systems, stabilizing production environments, and delivering reliable, high-performance software for mission-critical business operations.",
    technologies: [
      "C#",
      "ASP.NET",
      "ASP.NET MVC",
      "VB.NET",
      "VB6",
      "SQL Server",
      ".NET Framework",
      "REST APIs",
    ],
  },
  {
    title: "Enterprise Web & API Development",
    description:
      "Designing and implementing secure and scalable ASP.NET web applications and RESTful APIs. Handling complex authorization logic, third-party integrations, and financial reporting modules in production systems.",
    technologies: ["C#", "ASP.NET", "ASP.NET MVC", "REST APIs", "SQL Server"],
  },
  {
    title: "Legacy System Modernization",
    description:
      "Using C# and .NET technologies to modernize aging VB.NET and VB6 enterprise systems. Refactor complex codebases, resolve deep-rooted issues, and improve maintainability while ensuring uninterrupted business operations.",
    technologies: ["C#", "VB.NET", "VB6", ".NET Framework", "SQL Server"],
  },
  {
    title: "Production System Stabilization",
    description:
      "Leveraging C# and ASP.NET to debug and resolve high-impact production issues in live enterprise environments. Specialized in complex authorization, financial data integrity, and maintaining mission-critical system reliability.",
    technologies: ["C#", "ASP.NET", "ASP.NET MVC", "SQL Server", "REST APIs"],
  },
];

export const experienceSection = {
  title: "Expertise",
  description:
    "Specialized in building, stabilizing, and modernizing enterprise .NET applications. Experienced in resolving complex production issues, maintaining legacy systems, and developing reliable backend services using C#, ASP.NET, and SQL Server.",
};

export const projects = [
  {
    title: "Bera Memes",
    description:
      "A full-stack meme platform built with the MERN stack that allows users to browse, search, and post memes using trending tags and predefined categories, with a responsive and engaging UI.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    url: "https://www.beramemes.com/",
  },
  {
    title: "Bee Hive",
    description:
      "A professional software company landing page built with React and Tailwind CSS, featuring responsive design and EmailJS integration for seamless client communication.",
    stack: ["React.js", "Tailwind CSS", "EmailJS"],
    url: "sample data",
  },
  {
    title: "Property Management System",
    description:
      "A MERN-based tenant and tax management application with dashboards for tracking tenants, payments, rent, and taxes, featuring secure backend functionality and a user-friendly interface.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "MUI"],
    url: "sample data",
  },
  {
    title: "MedAI - AI-Powered Healthcare Consultation System",
    description:
      "A healthcare consultation platform using React, Python, and PostgreSQL, integrating ZEGOCLOUD for video/audio calls, secure payments, and robust API-driven workflows.",
    stack: ["React.js", "Python", "PostgreSQL", "ZEGOCLOUD", "Tailwind CSS"],
    url: "sample data",
  },
  
];

export const projectsSection = {
  title: "Featured Projects",
  description:
    "A selection of enterprise-grade .NET projects demonstrating legacy system modernization, production issue resolution, and robust web and desktop applications built with C#, ASP.NET, and SQL Server.",
  loadMoreText: "Load more projects",
  viewButtonText: "View",
};

export const journeyData = [
  {
    year: "2025",
    title: "Senior .NET Engineer",
    description:
      "Working as a Software Engineer at DevNauts on UK enterprise systems, specializing in ASP.NET, C#, and SQL Server. Leading legacy system modernization, debugging high-impact production issues, and developing mission-critical backend services.",
    icon: "Rocket",
  },
  {
    year: "2024",
    title: ".NET Web & Desktop Development",
    description:
      "Developed enterprise .NET desktop and web applications, modernizing VB6 and VB.NET systems, implementing secure REST APIs, and ensuring reliability in production environments.",
    icon: "Code",
  },
  {
    year: "2023",
    title: "Legacy System Projects",
    description:
      "Worked on healthcare and enterprise systems, reverse-engineering modules, migrating legacy VB6 systems to VB.NET, and stabilizing critical production applications.",
    icon: "Settings",
  },
  {
    year: "2022",
    title: "Enterprise .NET Foundations",
    description:
      "Built foundational skills in C#, ASP.NET, and SQL Server while contributing to real-world projects involving backend logic, database management, and application stability.",
    icon: "Sprout",
  },
  {
    year: "2019",
    title: "Started Computer Science Degree",
    description:
      "Began BSCS at PakAims Lahore, developing strong programming fundamentals and laying the groundwork for a career in enterprise .NET engineering.",
    icon: "GraduationCap",
  },
];

export const journeySection = {
  title: "My Journey",
  description:
    "From early .NET projects to leading enterprise system modernization and production stabilization, I’ve grown into a Senior .NET Engineer specializing in C#, ASP.NET, and complex legacy systems for mission-critical environments.",
};

export const contactSection = {
  title: "Let's Work Together",
  description:
    "If your organization needs a Senior .NET Engineer to tackle complex legacy systems, optimize critical production environments, or deliver robust enterprise applications, I can provide expertise and solutions that drive results.",
  buttons: {
    sendEmail: {
      text: "Send Email",
      href: `mailto:${personalInfo.email}`,
      icon: "Mail",
    },
    viewGitHub: {
      text: "View GitHub",
      href: personalInfo.github,
      icon: "GitHub", 
    },
  },
};

export const navigationContent = {
  hireMeText: "Hire Me",
  hireMeHref: "#contact",
};
