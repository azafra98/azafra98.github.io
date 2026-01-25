import { Translations } from "./es";

export const en: Translations = {
    // Header
    header: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            education: "Education",
            contact: "Contact",
            downloadCV: "Download CV",
        },
    },

    // Hero Section
    hero: {
        badge: "Full Stack Developer",
        name: "Alberto Zafra",
        surname: "Montero",
        description:
            "Full Stack Developer specialized in Prestashop, Laravel, and WordPress. Expert in performance optimization, SEO, and system administration.",
        ariaLabel: {
            linkedin: "LinkedIn",
            github: "GitHub",
            email: "Email",
            scrollDown: "Scroll down",
        },
    },

    // About Section
    about: {
        title: "About",
        titleHighlight: "Me",
        description:
            "Full Stack Developer with experience in multiple technologies and platforms. Specialized in creating scalable and optimized web solutions.",
        skills: {
            languages: "Languages",
            frameworks: "Frameworks",
            cmsEcommerce: "CMS & E-commerce",
            databases: "Databases",
            devopsTools: "DevOps & Tools",
            systems: "Systems",
        },
    },

    // Experience Section
    experience: {
        title: "Professional",
        titleHighlight: "Experience",
        subtitle: "My professional journey in web development and systems administration",
        expandButton: "Show more details",
        collapseButton: "Show less",
        technologies: "Technologies used",
        positions: [
            {
                title: "Full Stack Developer and Systems Technician",
                company: "Santiago Vargas",
                period: "Oct 2025 – Dec 2025",
                location: "Lucena, Córdoba",
                summary: [
                    "Evolutionary and corrective maintenance of WordPress and PrestaShop ecosystems, developing custom modules",
                    "Design and development of automation software for commercial brochures",
                    "Comprehensive hardware lifecycle management and workstation configuration",
                ],
                details: [
                    "Implementation of custom PrestaShop modules to enhance user experience",
                    "Development of automation tools that reduced brochure production time by 60%",
                    "IT infrastructure management including acquisition, configuration, and equipment maintenance",
                    "End-user technical support and incident resolution",
                ],
                technologies: ["PrestaShop", "WordPress", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Windows Server"],
            },
            {
                title: "Web Developer",
                company: "Agrocor",
                period: "Apr 2024 – Jun 2024",
                location: "Lucena, Córdoba",
                summary: [
                    "Prestashop web development in local and production environments",
                    "SEO optimization and product improvement with optimal categorization",
                    "Database size reduction by 80%",
                    "800% sales increase after comprehensive optimization",
                ],
                details: [
                    "Migration of online store to newer PrestaShop version",
                    "Implementation of SEO strategies that significantly increased organic traffic",
                    "Database optimization through obsolete record cleanup and index optimization",
                    "Store loading speed improvement reducing time by 70%",
                    "Product category reorganization improving user experience",
                ],
                technologies: ["PrestaShop", "PHP", "MySQL", "SEO", "Google Analytics", "cPanel"],
            },
            {
                title: "Systems Technician",
                company: "Grupo Tragsa",
                period: "May 2023 – Nov 2023",
                location: "Granada",
                summary: [
                    "IT support for users in eastern Andalusia with Windows Server 2022",
                    "Profile installation and mobile device management through inventory",
                    "Network rack and switch installation and maintenance",
                ],
                details: [
                    "Active Directory administration for user management and group policies",
                    "Windows workstation configuration and deployment",
                    "IT inventory management using specialized tools",
                    "Network infrastructure installation and configuration (switches, routers, structured cabling)",
                    "Hardware and software incident resolution",
                    "Remote and on-site end-user support",
                ],
                technologies: ["Windows Server 2022", "Active Directory", "GPO", "Networking", "Cisco Switches", "MDM"],
            },
            {
                title: "Full Stack Developer",
                company: "Automatismos Chacón",
                period: "Aug 2021 – Mar 2022",
                location: "Lucena, Córdoba",
                summary: [
                    "WordPress website development (inthesk.net)",
                    "Content layout with Adobe Photoshop and Illustrator",
                    "Customer database framework management and optimization",
                ],
                details: [
                    "Complete design and development of corporate website inthesk.net",
                    "Visual and graphic content creation for the web",
                    "Custom content management system implementation",
                    "Customer database optimization improving response times",
                    "Continuous website maintenance and updates",
                ],
                technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Adobe Photoshop", "Adobe Illustrator", "CSS3"],
            },
            {
                title: "Web Developer",
                company: "Eccuo Marketing Digital",
                period: "Oct 2020 – Jan 2021",
                location: "Córdoba",
                summary: [
                    "Full Stack development of websites with WordPress",
                    "Custom CSS layout according to client needs",
                    "PrestaShop management",
                ],
                details: [
                    "Development of multiple websites for clients from various sectors",
                    "WordPress theme customization according to client specifications",
                    "Responsive design implementation for all devices",
                    "PrestaShop store configuration and customization",
                    "Third-party plugin and module integration",
                ],
                technologies: ["WordPress", "PrestaShop", "PHP", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
            },
            {
                title: "Systems Technician",
                company: "Argen Soluciones Informáticas",
                period: "Mar 2017 – Jun 2017",
                location: "Lucena, Córdoba",
                summary: [
                    "Systems and network administration in an educational center",
                    "Mass deployment of equipment and network infrastructure optimization",
                    "Inventory management and resolution of connectivity issues",
                ],
                details: [
                    "Reinstallation and optimization of operating systems on laptops, including configuration freezing",
                    "Reorganization and structured cabling of racks and network infrastructure with precise labeling based on Visio plans",
                    "System image deployment using Clonezilla and Windows Server 2012 (WDS/Sysprep)",
                    "Implementation of Ubiquiti Unifi Wi-Fi solution to guarantee high-density connectivity in classrooms",
                    "Corrective hardware maintenance and administrative documentation digitization",
                ],
                technologies: ["Windows Server 2012", "Clonezilla", "Sysprep", "Ubiquiti Unifi", "Hardware", "Visio", "Networking"],
            },
        ],
    },

    // Projects Section
    projects: {
        title: "My",
        titleHighlight: "Projects",
        subtitle: "A selection of projects that demonstrate my experience in web development and digital solutions",
        viewMore: "View more",
        viewLess: "View less",
        viewProject: "View project",
        viewCode: "View code",
        period: "Period",
        items: [
            {
                title: "Joseabarber Barbershop",
                summary:
                    "Complete appointment booking system developed with Laravel. Allows customers to book appointments online easily and the barber to manage their schedule.",
                description:
                    "Full web application for barbershop appointment management developed from scratch with Laravel. The system allows customers to make online reservations intuitively, while the owner can manage their schedule, hours, and services from an admin panel.",
                challenge:
                    "The client needed to digitize their booking process that was done entirely by phone, which generated confusion and duplicate appointments. They required a system that was easy to use for both them and their customers.",
                solution:
                    "I developed a Laravel application with user authentication, real-time availability booking system, admin panel for schedule and service management, and email notifications. I implemented a responsive design that works perfectly on mobile devices.",
                results: [
                    "85% reduction in phone calls for bookings",
                    "0% duplicate appointments since launch",
                    "40% increase in total bookings thanks to 24/7 availability",
                    "Schedule management time reduced from 2 hours daily to 15 minutes",
                ],
                features: [
                    "User authentication system",
                    "Appointment booking with interactive calendar",
                    "Complete admin panel",
                    "Service and pricing management",
                    "Automated email notifications",
                    "Mobile-optimized responsive design",
                    "Appointment reminder system",
                ],
                tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
                link: "https://joseabarber.es",
                github: null,
                period: "Apr 2023 – Present",
                image: "logo-Peluquero",
                imageFormat: "png"
            },
            {
                title: "IntheSK",
                summary:
                    "Evolutionary maintenance and continuous improvements of the WordPress website for Automatismos Chacón using Elementor.",
                description:
                    "Evolutionary maintenance and development of new features for the corporate website. Implementation of key pages such as Home, Shop, and Help using Elementor to adapt the site to product requirements (a device locator tag).",
                challenge:
                    "The website required constant updates and new sections to effectively showcase the product, ensuring a seamless user experience.",
                solution:
                    "Performed continuous improvements based on requirements, designing and laying out complete sections (Home, Shop, Help) with Elementor and managing product presentation.",
                results: [
                    "Design and implementation of main pages with Elementor",
                    "Continuous user experience improvement",
                    "Flexible adaptation to changing product requirements",
                    "Stable WordPress site maintenance",
                ],
                features: [
                    "Layout with Elementor",
                    "Landing Page Design",
                    "Online Shop Management",
                    "Help and Support Section",
                    "Image Optimization",
                    "Evolutionary Maintenance",
                    "Social Media Integration",
                ],
                tech: ["WordPress", "Elementor", "CSS3", "JavaScript", "Adobe Photoshop", "Adobe Illustrator"],
                link: "https://inthesk.net",
                github: null,
                period: "2021 – 2022",
                image: "ik_logo",
                imageFormat: "png"
            },
            {
                title: "Agrocor E-commerce",
                summary:
                    "Comprehensive online store optimization in PrestaShop. SEO improvement, 80% database reduction, and 800% sales increase.",
                description:
                    "Complete optimization project for agricultural products online store. The store had serious performance issues, poor SEO, and an overloaded database that severely affected user experience.",
                challenge:
                    "The store suffered loading times exceeding 10 seconds, barely appeared in Google searches, and the database had grown uncontrollably to over 2GB with duplicate products and obsolete records. Sales had fallen 60% in 6 months.",
                solution:
                    "I conducted a complete audit and executed a comprehensive optimization plan: thorough database cleanup removing duplicates and unnecessary records, index optimization, cache implementation, image optimization, category restructuring following SEO best practices, and site information architecture improvement.",
                results: [
                    "Database size reduction from 2GB to 400MB (80%)",
                    "Loading time reduced from 10s to 1.5s (85% improvement)",
                    "800% sales increase in 3 months post-optimization",
                    "Improved organic ranking: from page 5+ to first page for main keywords",
                    "Conversion rate increased from 0.8% to 4.2%",
                ],
                features: [
                    "Complete performance audit",
                    "Database cleanup and optimization",
                    "Multi-level cache system implementation",
                    "Image and resource optimization",
                    "SEO-friendly category restructuring",
                    "Information architecture improvement",
                    "CDN configuration",
                    "Lazy loading implementation",
                ],
                tech: ["PrestaShop", "PHP", "MySQL", "SEO", "Google Analytics", "Redis Cache"],
                link: "https://www.agrocor.es",
                github: null,
                period: "2024",
                image: "Logo-Agrocor",
                imageFormat: "jpg",
                bgWhite: true
            },
        ],
    },

    // Education Section
    education: {
        title: "Academic",
        titleHighlight: "Training",
        subtitle: "My educational journey in information technology",
        items: [
            {
                title: "Higher Degree in Multiplatform Application Development (DAM)",
                institution: "IES Marqués de Comares",
                period: "Sep 2024 – Dec 2025",
                location: "Lucena, Córdoba",
                description:
                    "Advanced training in multiplatform application development, including mobile and desktop.",
            },
            {
                title: "Higher Degree in Web Application Development (DAW)",
                institution: "IES Marqués de Comares",
                period: "Sep 2017 – Feb 2020",
                location: "Lucena, Córdoba",
                description:
                    "Specialization in full stack web development, including frontend, backend, and database management.",
            },
            {
                title: "Intermediate Degree in Microcomputer Systems and Networks (SMR)",
                institution: "IES Marqués de Comares",
                period: "Sep 2015 – Jun 2017",
                location: "Lucena, Córdoba",
                description:
                    "Fundamentals of computer systems, networking, and technical support.",
            },
        ],
    },

    // Certificates Section
    certificates: {
        title: "Certificates",
        titleHighlight: "and Achievements",
        subtitle: "Official recognition of my dedication and learning",
        items: [
            {
                title: "Erasmus+ Project “Water It’s Me”",
                issuer: "Erasmus+ / European Commission",
                year: "Apr 2023",
                description: "Cultural exchange in Wroclaw (Poland) with participants from Romania, Lithuania, Poland, and Spain.",
                details: [
                    "Project focused on potable water awareness.",
                    "Environmental analysis of mining impact.",
                    "Promoting sustainable habits and international cooperation.",
                    "Workshops and team building activities in an intercultural environment."
                ],
                link: "https://www.youthpass.eu/en/verify/9XXC-AVFY-LLDM-YG5F/Alberto%20Zafra%20Montero"
            }
        ]
    },

    // Testimonials Section
    testimonials: {
        title: "Work",
        titleHighlight: "Recommendations",
        subtitle: "What my colleagues and employers say about my work",
        items: [
            {
                name: "Marta Dios",
                role: "Business Development Director at Agrocor",
                image: "marta-dios",
                imageFormat: "jpg",
                content: [
                    "Successfully resolves web incidents and errors.",
                    "Contributes ideas that are positively valued in performance.",
                    "Attentive to system and web failures.",
                    "Proposes solutions, investigates, and constantly learns to adapt to the position.",
                    "Proactive person, always proposing solutions to carry them out.",
                    "Takes great care that everything goes well.",
                    "Completed implementation on time and form.",
                    "Excellent dedication to work and commitment to results."
                ]
            },
            {
                name: "Pedro Santiago",
                role: "Executive at Santiago Vargas",
                image: "pedro-santiago",
                imageFormat: "jpg",
                content: "Recommendation letter pending receipt."
            }
        ]
    },

    viewCertificate: "View certificate",

    // Contact Section
    contact: {
        title: "Contact",
        subtitle: "Have a project in mind? Let's talk!",
        email: "Email",
        linkedin: "LinkedIn",
        location: "Location",
        downloadCV: "Download CV",
        sendMessage: "Send me a message",
        cvErrorTitle: "Download Error",
        cvErrorDescription: "A problem occurred while trying to download the CV. Alternatively, you can visit my LinkedIn profile in the meantime.",
        goToLinkedin: "Go to LinkedIn",
        close: "Close",
    },

    // Footer
    footer: {
        rights: "All rights reserved",
        madeWith: "Made with",
        inSpain: "in Spain",
        legal: "Legal Notice: In accordance with data protection regulations, we inform you that the personal information contained in this CV is confidential and is intended exclusively for recruiters and HR personnel. Reproduction, distribution, or commercial use of this data (spam) is expressly prohibited."
    },
};
