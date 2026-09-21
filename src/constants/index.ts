const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Stack",
    link: "#stack",
  },
  {
    name: "Commitment",
    link: "#commitment",
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
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
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
    title: "Product Design",
    tags: ["Saas Platform", "Web Platform", "Mobile App"],
    description:
      "By working hand in hand, we'll turn your ideas into real, market-ready products. With a focus on your unique needs, we'll blend aesthetics and usability. Let's chat about how we can bring your ideas to life.",
    ctaText: "Discuss Project",
    ctaLink: "#contact",
  },
  {
    title: "UX Design",
    tags: ["UX Audit", "Analysis", "Research"],
    description:
      "Great products start with understanding people. I audit flows, run analysis, and research real user behavior to design experiences that feel intuitive from the very first click.",
    ctaText: "Discuss Project",
    ctaLink: "#contact",
  },
  {
    title: "Development",
    tags: ["Next.js", "React", "Node.js", "Three.js"],
    description:
      "From pixel-perfect interfaces to robust backends, I build fast, scalable, and maintainable applications using modern frameworks and clean, well-tested code.",
    ctaText: "Discuss Project",
    ctaLink: "#contact",
  },
  {
    title: "Quality Assurance",
    tags: ["Testing", "Planning", "Documentation"],
    description:
      "Shipping fast shouldn't mean shipping broken. I plan around clear KPIs, test thoroughly, and document everything so your product stays reliable as it grows.",
    ctaText: "Discuss Project",
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