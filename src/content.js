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
  title: "Senior .NET Engineer | Backend Architect",
  email: "ibrahimahmed9578@gmail.com",
  github: "https://github.com/ibrahimahmed-dev",
  linkedin: "https://www.linkedin.com/in/ibrahim-ahmed-i/",
  portfolioTitle: "The Workshop",
};

export const heroContent = {
  greeting: "I am",
  name: personalInfo.name,
  title: personalInfo.title,
  description: "I build backend infrastructure with the precision of a craftsman and the foresight of a CTO. I specialize in turning architectural chaos into scalable, sustainable systems using C# and the .NET ecosystem.",
  image: profileImage,
  buttons: {
    getInTouch: {
      text: "Start a Project",
      href: "#contact",
    },
    viewProjects: {
      text: "View My Work",
      href: "#projects",
    },
  },
};

export const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "The Toolkit" },
  { href: "#experience", label: "Expertise" },
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
  title: "The Toolkit",
  description: "I am a specialist in the Microsoft .NET ecosystem, focused on enterprise grade applications that survive the test of time. My approach centers on modularity and clean architecture, ensuring that every line of code adds long term value to the business.",
};

export const experiences = [
  {
    title: "Legacy Recovery and Modernization",
    description: "I am the engineer you call when your core systems are a mystery. I specialize in reverse engineering legacy VB6 and VB.NET environments to recover lost business logic and migrate it into modern, high performance C# architectures.",
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
    title: "Accountable API Development",
    description: "Designing secure, scalable RESTful APIs with a focus on radical transparency. I work in precise baby steps, providing clients with exact delivery milestones and ensuring every integration is documented for the developers who come after me.",
    technologies: ["C#", "ASP.NET", "ASP.NET MVC", "REST APIs", "SQL Server"],
  },
  {
    title: "Enterprise System Stabilization",
    description: "I fix the high impact production issues that stall business growth. My background in sales and marketing allows me to prioritize technical fixes based on their actual Return on Investment and stakeholder impact.",
    technologies: ["C#", "ASP.NET", "ASP.NET MVC", "SQL Server", "REST APIs"],
  },
];

export const experienceSection = {
  title: "Core Expertise",
  description: "Code is a liability unless it is clean, documented, and scalable. I focus on building backend solutions that minimize technical debt and maximize system reliability for mission critical operations.",
};

export const projects = [
  {
    title: "VISION ISG Claims Management",
    description: "An enterprise platform managing vehicle incidents across the UK. I stepped in to stabilize critical financial defects in Xero invoice exports and replaced outdated SFTP workflows with modern REST APIs, restoring client trust through technical precision.",
    stack: ["C#", "ASP.NET MVC", "ASP.NET Web API", "Microsoft SQL Server", "REST APIs"],
    timeframe: "September 2025 to Present",
    url: "https://www.isgvision.co.uk/ISGVision/",
    images: [ISGimage1, ISGimage2, ISGimage3, ISGimage4],
  },
  {
    title: "VMS Fleet Manager",
    description: "An API first operations platform where I modernized role based access control and financial reporting. I optimized database queries for production scale, ensuring the system met the high performance standards of the CTO and stakeholders.",
    stack: ["C#", "ASP.NET Web API", "Microsoft SQL Server", "Angular", "SSRS", "JWT Authentication"],
    timeframe: "September 2025 to Present",
    url: "https://fleetmanager.vmsglobal.co.uk/",
    images: [VMSimage1, VMSimage2, VMSimage3, VMSimage4],
  },
];

export const projectsSection = {
  title: "Featured Projects",
  description: "A selection of high stakes .NET projects where I converted complex requirements into stable, production ready assets.",
  loadMoreText: "View More Work",
  viewButtonText: "Launch App",
};

export const journeyData = [
  {
    year: "2025 to Present",
    title: "The Senior Tier",
    description: "Leading modernization efforts for UK enterprise systems at DevNauts. I focus on high impact production stabilization and building backend services that are easy for future teams to maintain.",
    icon: "Rocket",
  },
  {
    year: "2024",
    title: "Full Stack Precision",
    description: "Developing desktop and web solutions with a focus on secure REST APIs. I moved from simply writing code to architecting systems that solve specific business problems.",
    icon: "Code",
  },
  {
    year: "2023",
    title: "Legacy Archeology",
    description: "Recovering lost codebases and migrating healthcare systems. I proved that even without original source code, a system can be reverse engineered and modernized through disciplined engineering.",
    icon: "Settings",
  },
  {
    year: "2019 to 2022",
    title: "Foundations of Engineering",
    description: "Built a deep understanding of C# and SQL Server while completing my degree. I focused on the fundamentals that allow for clean, scalable code in the enterprise space.",
    icon: "GraduationCap",
  },
];

export const journeySection = {
  title: "The Evolution",
  description: "My journey is defined by a transition from a coder to a strategist. I don't just build features, I build long term technical solutions.",
};

export const contactSection = {
  title: "Secure Your Infrastructure",
  description: "If your systems are hitting a ceiling or your legacy code has become a liability, I am ready to step in. I provide exact delivery milestones and a level of technical accountability that ensures your business stays ahead of the curve.",
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
  hireMeText: "Consult the Engineer",
  hireMeHref: "#contact",
};