/**
 * WEBSITE CONTENT
 * 
 * This file contains all the text content for the website.
 * Edit the values below to change the text displayed on your website.
 * 
 * NOTE: For multi-line text, you can use '\n' to create line breaks.
 */

// TypeScript interfaces for type safety
interface WebsiteInfo {
  title: string;
  description: string;
  author: string;
  jobTitle: string;
  profileImage: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
}

interface HeroContent {
  subtitle: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  ctaText: string;
  contactText: string;
  scrollText: string;
}

interface NavItem {
  name: string;
  href: string;
  icon: string; // Icon name as string
}

interface SocialLink {
  name: string;
  url: string;
  icon: string; // Icon name as string
}

interface ProjectsContent {
  sectionTitle: string;
  subtitle: string;
  description: string;
  filterLabels: {
    all: string;
    featured: string;
  };
  githubUsername: string;
}

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link?: string;
  featured: boolean;
}

// Testimonial interface is exported below

interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

interface Experience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
  company: string;
  duration: string;
}

interface Education {
  title: string;
  institution: string;
  duration: string;
  description: string;
}

interface AboutContent {
  sectionTitle: string;
  subtitle: string;
  description: string;
  tabLabels: {
    experience: string;
    education: string;
  };
  journeyTitle: string;
  journeyText: string[];
  skillsTitle: string;
  experienceTitle: string;
  educationTitle: string;
  resumeButtonText: string;
  contactButtonText: string;
}

interface ContactContent {
  sectionTitle: string;
  subtitle: string;
  description: string;
  formLabels: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
  submittingText: string;
  socialHeading: string;
  contactInfo: {
    title: string;
    email: {
      label: string;
      value: string;
    };
    phone: {
      label: string;
      value: string;
    };
    location: {
      label: string;
      value: string;
    };
  };
  testimonials: {
    title: string;
    description: string;
  };
  formStatus: {
    success: string;
    error: string;
  };
  emailJs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

interface FooterContent {
  aboutColumn: {
    title: string;
    description: string;
  };
  quickLinks: {
    title: string;
    links: Array<{ label: string; href: string; }>;
  };
  servicesColumn: {
    title: string;
    services: string[];
  };
  legalLinks: Array<{ label: string; href: string; }>;
  copyright: string;
}

interface LegalContent {
  privacy: {
    title: string;
    lastUpdated: string;
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
      listItems?: string[];
    }>;
  };
  terms: {
    title: string;
    lastUpdated: string;
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
      listItems?: string[];
    }>;
  };
  cookies: {
    title: string;
    lastUpdated: string;
    introduction: string;
    sections: Array<{
      title: string;
      content: string;
      listItems?: string[];
    }>;
  };
}

// General website information
export const websiteInfo: WebsiteInfo = {
  title: "Orvith - Creative Developer",
  description: "Portfolio of Orvith, a creative developer specializing in web development, UI/UX design, and more.",
  author: "Orvith",
  jobTitle: "Full Stack Developer",
  profileImage: "/anna.jpg",
  contactEmail: "hello@orvith.com",
  contactPhone: "+123 456 7888",
  contactLocation: "San Francisco, California"
};

// Hero section content
export const heroContent: HeroContent = {
  subtitle: "Welcome to My World",
  title: {
    prefix: "Crafting",
    highlight: "Digital Experiences",
    suffix: "with Code & Design"
  },
  description: "I'm a passionate full-stack developer and UI/UX designer with a focus on creating performant, accessible, and beautiful web experiences.",
  ctaText: "View Projects",
  contactText: "Contact Me",
  scrollText: "Scroll Down"
};

// Navigation items for sidebar - using icon names as strings
export const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: "IconHome" },
  { name: "Projects", href: "#projects", icon: "IconBriefcase" },
  { name: "About", href: "#about", icon: "IconUser" },
  { name: "Testimonials", href: "#testimonials", icon: "IconStar" },
  { name: "Contact", href: "#contact", icon: "IconMessage" },
];

// Social media links - customize your social media URLs here
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/llllll", icon: "IconBrandGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/llllll", icon: "IconBrandLinkedin" },
  { name: "Twitter", url: "https://twitter.com/llllll", icon: "IconBrandTwitter" }
];

// Projects section content
export const projectsContent: ProjectsContent = {
  sectionTitle: "Projects",
  subtitle: "MY LATEST WORK",
  description: "Explore my recent projects showcasing my skills in web development, user experience design, and creative problem-solving.",
  filterLabels: {
    all: "All",
    featured: "Featured"
  },
  githubUsername: "yourusername"
};

// Project items
export const projects: Project[] = [
  {
    id: 1,
    title: "SmartPOS for Restaurants",
    des: "A comprehensive cloud-based Point of Sale system for restaurants, featuring kitchen display integration, QR code ordering, order management, inventory tracking, and real-time analytics.",
    img: "/p1.jpg",
    iconLists: ["re", "tail", "node"],
    link: "",
    featured: true
  },
  {
    id: 2,
    title: "3D Shirt Carousel – Interactive Apparel Showcase",
    des: "Experience a dynamic 3D carousel that brings shirt designs to life. Effortlessly browse and interact with apparel in a visually engaging, immersive display.",
    img: "/p2.png",
    iconLists: ["next", "tail", "ts", "stream", "c"],
    featured: false
  },
  {
    id: 3,
    title: "B2B Agency Portfolio",
    des: "This portfolio showcases my work on innovative B2B solutions during my time with a leading agency, highlighting advanced services and successful client collaborations.",
    img: "/p3.png",
    iconLists: ["re", "tail", "ts", "three", "c"],
    featured: false
  },
  {
    id: 4,
    title: "AI SaaS Platform – Interactive 3D Web Experience",
    des: "An advanced AI-powered SaaS platform featuring immersive 3D visuals and smooth GSAP animations, inspired by the Apple iPhone 15 Pro website. Showcases cutting-edge web technologies for a stunning user experience.",
    img: "/p4.png",
    iconLists: ["next", "tail", "ts", "three", "gsap"],
    featured: false
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  img: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Orvith was a game changer for our business. He not only delivered what we asked for, but also brought creative ideas to the table that took our project to the next level. Communication was always clear and deadlines were met without fail. Highly recommended!",
    name: "Mike Cannon-Brookes",
    title: "Co-Founder & Co-CEO, Atlassian",
    img: "/atl.jpg",
  },
  {
    quote:
      "The experience working with Orvith exceeded my expectations in every way. From our very first meeting, he listened carefully to our needs and offered thoughtful suggestions that really improved our project. Throughout the process, he was always available to answer questions, provide updates, and address any concerns. The final product was polished, user-friendly, and delivered ahead of schedule. I would absolutely recommend working with Orvith if you're looking for someone who is both professional and genuinely cares about your success.",
    name: "Delphine Donné",
    title: "General Manager, Creativity & Productivity, Logitech",
    img: "/logi.jpg",
  },
  {
    quote:
      "Orvith brought a level of expertise and attention to detail that made a huge difference for our team. Communication was always clear, and he took the time to explain technical concepts in a way that made sense to everyone involved. We faced a few unexpected challenges along the way, but Orvith handled them quickly and efficiently, keeping everything on track. The end result was exactly what we hoped for, and the process was smooth from start to finish. Highly recommend his services to anyone looking for quality and reliability.",
    name: "Adrian McDermott",
    title: "Chief Technology Officer, Zendesk",
    img: "/zen.jpg",
  },
  {
    quote:
      "Fast turnaround and excellent quality. Would definitely recommend to others.",
    name: "Anna Binder",
    title: "Head of People, Asana",
    img: "/anna.jpg",
  },
  {
    quote:
      "Wasn't sure what to expect, but the team delivered something that actually fits our business. The little touches (like the custom icons) made a difference. Would recommend.",
    name: "David Heinemeier Hansson",
    title: "CTO & Co-Founder, Basecamp",
    img: "/base.jpg",
  },
];

export const companies: Company[] = [
  {
    id: 1,
    name: "Asana",
    img: "/asana.png",
    nameImg: "/asana text.png",
  },
  {
    id: 2,
    name: "Atlassian",
    img: "/atl.png",
    nameImg: "/atl 2.png",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Zendesk",
    img: "/z2.png",
    nameImg: "/zendesk.png",
  },
  {
    id: 5,
    name: "Logitech",
    img: "/logi.png",
    nameImg: "/logitech.svg",
  },
];

export const workExperience: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer – Product Platform",
    desc: "Designed and built RESTful APIs and React-based admin dashboards, enabling real-time analytics and seamless user management for thousands of users.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    company: "Atlassian",
    duration: "2022 - Present",
  },
  {
    id: 2,
    title: "Frontend Developer – Fintech App",
    desc: "Developed responsive, accessible UIs using Next.js and TypeScript, integrating complex financial data visualizations and boosting user engagement by 25%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    company: "Zendesk",
    duration: "2020 - 2022",
  },
  {
    id: 3,
    title: "Backend Engineer – Microservices",
    desc: "Engineered scalable Node.js microservices with Docker and Kubernetes, reducing system downtime and supporting millions of API requests per day.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    company: "Spotify",
    duration: "2018 - 2020",
  },
  {
    id: 4,
    title: "DevOps & Automation Specialist",
    desc: "Implemented CI/CD pipelines with GitHub Actions and Terraform, accelerating deployment cycles and ensuring zero-downtime releases across environments.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    company: "Microsoft",
    duration: "2016 - 2018",
  },
];

// Education data for the education/experience toggle section

// Contact section content
export const contactContent: ContactContent = {
  sectionTitle: "Contact Me",
  subtitle: "GET IN TOUCH",
  description: "Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.",
  formLabels: {
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    submit: "Send Message"
  },
  submittingText: "Sending...",
  contactInfo: {
    title: "Contact Information",
    email: {
      label: "Email",
      value: "hello@orvith.com"
    },
    phone: {
      label: "Phone",
      value: "+123 456 7890"
    },
    location: {
      label: "Location",
      value: "San Francisco, California"
    }
  },
  testimonials: {
    title: "Client Testimonials",
    description: "Feedback from clients I've had the pleasure of working with."
  },
  socialHeading: "Connect",
  formStatus: {
    success: "Your message has been sent successfully!",
    error: "There was an error sending your message. Please try again."
  },
  emailJs: {
    serviceId: "YOUR SERVICE KEY",
    templateId: "YOUR TEMPLATE ID",
    publicKey: "YOUR PUBLIC KEY"
  }
};

// List of skills for the skills section
export const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", 
  "HTML/CSS", "Tailwind CSS", "Node.js", "GraphQL", 
  "Framer Motion", "Three.js", "UI/UX Design", "Figma"
];

// About section content
export const aboutContent: AboutContent = {
  sectionTitle: "About Me",
  subtitle: "MY BACKGROUND",
  description: "I'm a passionate developer with over 7 years of experience building web applications. I specialize in creating performant, accessible, and beautiful digital experiences with modern technologies like React, Next.js, and TypeScript.",
  tabLabels: {
    experience: "Experience",
    education: "Education"
  },
  journeyTitle: "My Journey",
  journeyText: [
    "With over 5 years of experience in web development and design, I've had the privilege of working on a wide range of projects that have helped me refine my skills and expand my expertise.",
    "My approach to development is centered around creating intuitive, accessible, and visually appealing solutions that not only meet but exceed client expectations. I believe in the power of clean code and thoughtful design to transform ideas into impactful digital experiences.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the beautiful Swiss Alps."
  ],
  skillsTitle: "My Skills",
  experienceTitle: "Professional Experience",
  educationTitle: "Education & Certifications",
  resumeButtonText: "Download Resume",
  contactButtonText: "Contact Me"
};

// Education data for the education/experience toggle section
export const educationData: Education[] = [
  {
    title: "Master's in Computer Science",
    institution: "ETH Zurich",
    duration: "2015 - 2017",
    description: "Specialized in Human-Computer Interaction and Software Engineering with focus on web technologies and interactive systems."
  },
  {
    title: "Bachelor's in Software Engineering",
    institution: "University of Zurich",
    duration: "2012 - 2015",
    description: "Studied programming fundamentals, data structures, algorithms, and software development methodologies."
  },
  {
    title: "Advanced Web Development Certification",
    institution: "Zurich University of Applied Sciences",
    duration: "2014",
    description: "Intensive specialization in modern front-end frameworks, responsive design, and advanced JavaScript concepts."
  },
  {
    title: "Cloud Computing Certification",
    institution: "AWS Training & Certification",
    duration: "2016",
    description: "Comprehensive training in cloud architecture, serverless computing, and implementing scalable solutions with AWS."
  }
];

// Contact section content is defined above

// Footer content
export const footerContent: FooterContent = {
  aboutColumn: {
    title: "About",
    description: "I'm Orvith, a creative developer specializing in crafting exceptional digital experiences with modern web technologies."
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" }
    ]
  },
  servicesColumn: {
    title: "Services",
    services: [
      "Web Development", 
      "UI/UX Design", 
      "API Development",
      "Tech Consultation",
      "Digital Marketing"
    ]
  },
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies", href: "/cookies" }
  ],
  copyright: `© ${new Date().getFullYear()} Orvith. All rights reserved.`
};

// Legal pages content
export const legalContent: LegalContent = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: June 20, 2025",
    introduction: "Thank you for visiting my website. This Privacy Policy explains how I collect, use, and protect your personal information when you use this website.",
    sections: [
      {
        title: "1. Information We Collect",
        content: "When you visit our website, we may collect the following information:",
        listItems: [
          "Contact information (such as name and email address) when you submit contact forms",
          "Usage data (such as pages visited, time spent on the site)",
          "Technical data (such as IP address, browser type, device information)",
          "Cookies and similar tracking technologies"
        ]
      },
      {
        title: "2. How We Use Your Information",
        content: "We use the information we collect for various purposes, including:",
        listItems: [
          "To provide and maintain our website",
          "To notify you about changes to our website",
          "To allow you to participate in interactive features",
          "To provide customer support",
          "To gather analysis or valuable information to improve our website"
        ]
      },
      {
        title: "3. Data Security",
        content: "The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure."
      },
      {
        title: "4. Your Data Protection Rights",
        content: "Under data protection laws, you have rights including:",
        listItems: [
          "The right to access your personal data",
          "The right to correct inaccurate personal data",
          "The right to erasure of your personal data",
          "The right to restrict processing of your personal data"
        ]
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last Updated: June 20, 2025",
    introduction: "Welcome to my website. By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined in this agreement.",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
      },
      {
        title: "2. Use License",
        content: "Permission is granted to temporarily view the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
        listItems: [
          "Modify or copy the materials",
          "Use the materials for any commercial purpose",
          "Attempt to decompile or reverse engineer any software contained on the website",
          "Remove any copyright or other proprietary notations from the materials",
          "Transfer the materials to another person or 'mirror' the materials on any other server"
        ]
      },
      {
        title: "3. Disclaimer",
        content: "The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
      },
      {
        title: "4. Limitations",
        content: "In no event shall I be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if I or an authorized representative has been notified orally or in writing of the possibility of such damage."
      }
    ]
  },
  cookies: {
    title: "Cookies Policy",
    lastUpdated: "Last Updated: June 20, 2025",
    introduction: "This Cookie Policy explains how I use cookies and similar technologies to recognize you when you visit my website.",
    sections: [
      {
        title: "1. What Are Cookies",
        content: "Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you."
      },
      {
        title: "2. How We Use Cookies",
        content: "Our website uses cookies for various purposes, including:",
        listItems: [
          "To understand and save user preferences for future visits",
          "To compile aggregate data about site traffic and site interactions",
          "To enhance and personalize your user experience",
          "To help us offer you the most relevant content"
        ]
      },
      {
        title: "3. Types of Cookies We Use",
        content: "There are different types of cookies that we use:",
        listItems: [
          "Essential cookies: Necessary for the website to function properly",
          "Preference cookies: Enable the website to remember your preferences",
          "Analytics cookies: Help us understand how visitors interact with the website",
          "Marketing cookies: Used to track visitors across websites"
        ]
      },
      {
        title: "4. Managing Cookies",
        content: "Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience."
      }
    ]
  }
};


