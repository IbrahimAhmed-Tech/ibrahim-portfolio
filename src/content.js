// Centralized content data for the portfolio
import profileImage from "../src/assets/ibrahimprofile.png";
import VMSimage1 from "../src/assets/VMSimage1.png";
import VMSimage2 from "../src/assets/VMSimage2.png";
import VMSimage3 from "../src/assets/VMSimage3.png";
import VMSimage4 from "../src/assets/VMSimage4.png";
import ISGimage1 from "../src/assets/ISGImage1.png";
import ISGimage2 from "../src/assets/ISGImage2.png";
import ISGimage3 from "../src/assets/ISGImage3.png";
import ISGimage4 from "../src/assets/ISGImage4.png";
export const personalInfo = {
  name: "Ibrahim Ahmed",
  title:
".NET Engineer | ASP.NET & C# Specialist",
  email: "ibrahimahmed9578@gmail.com",
  github: "https://github.com/IbrahimAhmed-Tech",
  linkedin: "https://www.linkedin.com/in/ibrahim-ahmed-i/",
  portfolioTitle: "Portfolio",
};

export const heroContent = {
  greeting: "Hi, I'm",
  name: personalInfo.name,
  title: personalInfo.title,
  description:"I build scalable enterprise applications using C# and ASP.NET, with experience in maintaining and modernizing legacy systems and delivering reliable backend solutions with SQL Server.",
  image: profileImage,
 buttons: {
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
    title: "VISION ISG Claims Management System",
    description:
      "Enterprise ASP.NET MVC claims management platform supporting the full lifecycle of vehicle incidents across UK operations. I Resolved critical VAT calculation defects affecting Xero invoice exports, stabilized fleet data import pipelines, and led integration of a third-party fleet platform via REST APIs to replace legacy SFTP workflows. I Maintain and enhance a high-traffic production system ensuring reliability and continuous business operations.",
    stack: ["C#", "ASP.NET MVC", "ASP.NET Web API", "Microsoft SQL Server", "REST APIs"],
    timeframe: "Sep 2025 – Present",
    url: "https://www.isgvision.co.uk/ISGVision/",
    images:[ISGimage1, ISGimage2, ISGimage3, ISGimage4],
  },

  {
    title: "VMS Fleet Manager",
    description:
      "API-first enterprise fleet operations platform managing vehicle lifecycle processes including incidents, maintenance, financials, and compliance. I improved role-based access control across SQL Server databases, implemented financial reporting modules, optimized database queries, and contributed to modernization of APIs for improved scalability and performance.",
    stack: ["C#", "ASP.NET Web API", "Microsoft SQL Server", "Angular", "SSRS", "JWT Authentication"],
    timeframe: "Sep 2025 – Present",
    url: "https://fleetmanager.vmsglobal.co.uk/",
    images: [
      VMSimage1,
      VMSimage2,
      VMSimage3,
      VMSimage4,
    ],
  },

];

export const projectsSection = {
  title: "Featured Projects",
  description:
    "A selection of enterprise-grade .NET projects demonstrating legacy system modernization, production issue resolution, and robust web and desktop applications built with C#, ASP.NET, and SQL Server.",
  loadMoreText: "Load more projects",
  viewButtonText: "View Live",
};

export const journeyData = [
  {
    year: "2025 - Present",
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
      href: `mailto:${personalInfo.email}`,
    },
    viewGitHub: {
      href: personalInfo.github,
    },
    viewLinkedIn: {
      href: personalInfo.linkedin, 
    },
  },
};

export const navigationContent = {
  hireMeText: "Hire Me",
  hireMeHref: "#contact",
};
