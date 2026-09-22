export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

const en = {
  brandName: "Mustafa Hasanain",
  logoAlt: "Mustafa Hasanain logo",
  nav: ["Projects", "Services", "Stack", "Commitment"],
  contactButton: "Contact",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  hero: {
    shaping: "Shaping", words: ["Ideas", "Concepts", "Designs", "Code"],
    line2: "into Real Projects", line3: "that Deliver Results",
    intro: "Hi, I’m Mustafa, a software developer based in Baghdad, Iraq.",
    explore: "Explore My Work",
  },
  counters: ["Years of Experience", "Industries Served", "Completed Projects", "On-Time Delivery Rate"],
  showcase: { title: "Featured Projects", live: "Check Live Site", all: "View All Projects", code: "View Code" },
  projectsPage: "All Projects",
  projects: [
    { title: "On-Demand Rides Made Simple with Ryde", description: "Demo project — a placeholder listing for a ride-booking app built with React Native. Real details and screenshots coming soon.", alt: "Ryde App Interface" },
    { title: "The Library Management Platform", description: "Demo project — a placeholder listing for a library management platform. Real details and screenshots coming soon.", alt: "Library Management Platform" },
    { title: "YC Directory - A Startup Showcase App", description: "Demo project — a placeholder listing for a startup directory app. Real details and screenshots coming soon.", alt: "YC Directory App" },
  ],
  servicesTitle: "Services & Expertise",
  services: [
    { title: "Custom Web Applications", tags: ["Business Platforms", "SaaS Products", "Internal Tools"], description: "I build custom web applications around your business needs, from customer-facing platforms to internal tools that simplify daily work, reduce manual tasks, and support future growth." },
    { title: "WordPress Development", tags: ["Business Websites", "Custom Design", "WooCommerce"], description: "I build and customize responsive WordPress websites that are easy to manage, optimized for performance, and tailored to your business, content, and customer needs." },
    { title: "Frappe & ERPNext Solutions", tags: ["ERPNext", "Custom Modules", "Workflow Automation"], description: "I customize Frappe and ERPNext to match how your business actually operates, including tailored modules, automated workflows, reports, integrations, and performance improvements." },
    { title: "Hosting & Technical Support", tags: ["Deployment", "Server Management", "Ongoing Support"], description: "I handle deployment, hosting, server configuration, monitoring, backups, and ongoing technical support to keep your website or application secure, stable, and available." },
  ],
  discuss: "Discuss Your Project",
  stack: { title: "The Stack", sub: "What I Bring to the Table" },
  commitment: { title: "My Commitment", sub: "Why Work With Me", abilities: [
    { title: "Attention to Quality", desc: "Crafting polished solutions with care, precision, and attention to every detail." },
    { title: "Clear Communication", desc: "Keeping you informed throughout the project with clear and consistent updates." },
    { title: "Dependable Delivery", desc: "Completing projects on time without compromising quality or attention to detail." },
  ] },
  contact: {
    title: "Get in Touch – Let’s Connect", sub: "Have questions or ideas? Let’s talk!",
    name: "Your name", namePlaceholder: "What’s your good name?",
    email: "Your Email", emailPlaceholder: "What’s your email address?",
    message: "Your Message", messagePlaceholder: "How can I help you?",
    send: "Send Message", sending: "Sending...", invalidEmail: "Please enter a valid email address.",
    success: "Your message has been sent successfully. I'll get back to you soon!",
    error: "Something went wrong while sending your message. Please try again.",
  },
  footer: "All rights reserved.",
  seo: {
    homeTitle: "Mustafa | Software Developer", homeDescription: "Portfolio of Mustafa, a software developer based in Baghdad, Iraq.",
    projectsTitle: "Projects | Mustafa", projectsDescription: "A collection of projects built by Mustafa.",
  },
};

const ar: typeof en = {
  brandName: "مصطفى حسنين",
  logoAlt: "شعار مصطفى حسنين",
  nav: ["المشاريع", "الخدمات", "التقنيات", "التزامي"],
  contactButton: "تواصل معي", menuOpen: "افتح القائمة", menuClose: "أغلق القائمة",
  hero: {
    shaping: "أحوّل", words: ["الأفكار", "المفاهيم", "التصاميم", "الأكواد"],
    line2: "إلى مشاريع حقيقية", line3: "تحقق نتائج ملموسة",
    intro: "مرحباً، أنا مصطفى، مطوّر برمجيات مقيم في بغداد، العراق.", explore: "استكشف أعمالي",
  },
  counters: ["سنوات من الخبرة", "قطاعات خدمتها", "مشاريع مكتملة", "نسبة التسليم في الموعد"],
  showcase: { title: "مشاريع مميزة", live: "زيارة الموقع", all: "عرض جميع المشاريع", code: "عرض الكود" },
  projectsPage: "جميع المشاريع",
  projects: [
    { title: "Ryde: رحلات عند الطلب بسهولة", description: "مشروع تجريبي لتطبيق حجز رحلات باستخدام React Native. ستتوفر التفاصيل والصور الفعلية قريباً.", alt: "واجهة تطبيق Ryde" },
    { title: "منصة إدارة المكتبات", description: "مشروع تجريبي لمنصة إدارة مكتبات. ستتوفر التفاصيل والصور الفعلية قريباً.", alt: "واجهة منصة إدارة المكتبات" },
    { title: "YC Directory: دليل للشركات الناشئة", description: "مشروع تجريبي لتطبيق يعرض الشركات الناشئة. ستتوفر التفاصيل والصور الفعلية قريباً.", alt: "واجهة دليل الشركات الناشئة" },
  ],
  servicesTitle: "الخدمات والخبرات",
  services: [
    { title: "تطبيقات ويب مخصصة", tags: ["منصات أعمال", "منتجات برمجية", "أدوات داخلية"], description: "أطوّر تطبيقات ويب تناسب احتياجات عملك، من المنصات الموجهة للعملاء إلى الأدوات الداخلية التي تبسّط العمل اليومي وتقلل المهام اليدوية وتدعم نموك." },
    { title: "تطوير مواقع ووردبريس", tags: ["مواقع أعمال", "تصميم مخصص", "WooCommerce"], description: "أطوّر وأخصص مواقع ووردبريس متجاوبة وسهلة الإدارة، مع تحسين الأداء وتكييفها مع نشاطك ومحتواك واحتياجات عملائك." },
    { title: "حلول Frappe وERPNext", tags: ["ERPNext", "وحدات مخصصة", "أتمتة سير العمل"], description: "أخصص Frappe وERPNext بما يتوافق مع طريقة عملك، بما يشمل الوحدات المخصصة وسير العمل الآلي والتقارير والتكاملات وتحسين الأداء." },
    { title: "الاستضافة والدعم التقني", tags: ["النشر", "إدارة الخوادم", "دعم مستمر"], description: "أتولى النشر والاستضافة وإعداد الخوادم والمراقبة والنسخ الاحتياطي والدعم التقني المستمر للحفاظ على أمان موقعك أو تطبيقك واستقراره وتوفره." },
  ],
  discuss: "لنتحدث عن مشروعك",
  stack: { title: "التقنيات", sub: "الأدوات التي أستخدمها" },
  commitment: { title: "التزامي", sub: "لماذا تعمل معي؟", abilities: [
    { title: "الاهتمام بالجودة", desc: "أصنع حلولاً متقنة بعناية ودقة واهتمام بكل التفاصيل." },
    { title: "تواصل واضح", desc: "أبقيك على اطلاع بمراحل المشروع من خلال تحديثات واضحة ومنتظمة." },
    { title: "تسليم موثوق", desc: "أنجز المشاريع في موعدها مع الحفاظ على الجودة والاهتمام بالتفاصيل." },
  ] },
  contact: {
    title: "تواصل معي", sub: "هل لديك سؤال أو فكرة؟ لنتحدث!",
    name: "اسمك", namePlaceholder: "ما اسمك؟", email: "بريدك الإلكتروني", emailPlaceholder: "ما عنوان بريدك الإلكتروني؟",
    message: "رسالتك", messagePlaceholder: "كيف يمكنني مساعدتك؟",
    send: "إرسال الرسالة", sending: "جارٍ الإرسال...", invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
    success: "تم إرسال رسالتك بنجاح. سأرد عليك قريباً!", error: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
  },
  footer: "جميع الحقوق محفوظة.",
  seo: {
    homeTitle: "مصطفى حسنَين | مطوّر برمجيات", homeDescription: "الموقع الشخصي لمصطفى حسنَين، مطوّر برمجيات مقيم في بغداد، العراق.",
    projectsTitle: "المشاريع | مصطفى حسنَين", projectsDescription: "مجموعة من المشاريع التي طوّرها مصطفى حسنَين.",
  },
};

export const dictionaries = { en, ar };
export type Dictionary = typeof en;
