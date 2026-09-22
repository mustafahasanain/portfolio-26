const navLinks = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Services",
    link: "/#services",
  },
  {
    name: "Stack",
    link: "/#stack",
  },
  {
    name: "Commitment",
    link: "/#commitment",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Industries Served" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "On-Time Delivery Rate" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Attention to Quality",
    desc: "Crafting polished solutions with care, precision, and attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Keeping you informed throughout the project with clear and consistent updates.",
  },
  {
    imgPath: "/images/time.png",
    title: "Dependable Delivery",
    desc: "Completing projects on time without compromising quality or attention to detail.",
  },
];

const techStackIcons = [
  {
    name: "RactJS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "NodeJS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "THREE.JS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "GIT",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/mustafahasanain.dev",
    imgPath: "/images/insta.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mustafahasanain",
    imgPath: "/images/linkedin.svg",
  },
  {
    name: "github",
    url: "https://github.com/mustafahasanain",
    imgPath: "/images/github.svg",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/9647766511633",
    imgPath: "/images/whatsapp.svg",
  },
];

const services = [
  {
    title: "Custom Web Applications",
    tags: ["Business Platforms", "SaaS Products", "Internal Tools"],
    description:
      "I build custom web applications around your business needs, from customer-facing platforms to internal tools that simplify daily work, reduce manual tasks, and support future growth.",
    ctaText: "Discuss Your Project",
    ctaLink: "#contact",
  },
  {
    title: "WordPress Development",
    tags: ["Business Websites", "Custom Design", "WooCommerce"],
    description:
      "I build and customize responsive WordPress websites that are easy to manage, optimized for performance, and tailored to your business, content, and customer needs.",
    ctaText: "Discuss Your Project",
    ctaLink: "#contact",
  },
  {
    title: "Frappe & ERPNext Solutions",
    tags: ["ERPNext", "Custom Modules", "Workflow Automation"],
    description:
      "I customize Frappe and ERPNext to match how your business actually operates, including tailored modules, automated workflows, reports, integrations, and performance improvements.",
    ctaText: "Discuss Your Project",
    ctaLink: "#contact",
  },
  {
    title: "Hosting & Technical Support",
    tags: ["Deployment", "Server Management", "Ongoing Support"],
    description:
      "I handle deployment, hosting, server configuration, monitoring, backups, and ongoing technical support to keep your website or application secure, stable, and available.",
    ctaText: "Discuss Your Project",
    ctaLink: "#contact",
  },
];

export {
  words,
  abilities,
  counterItems,
  socialImgs,
  techStackIcons,
  navLinks,
  services,
};
