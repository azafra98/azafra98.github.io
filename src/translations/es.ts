export const es = {
  // Header
  header: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Educación",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
  },

  // Hero Section
  hero: {
    badge: "Desarrollador Full Stack",
    name: "Alberto Zafra",
    surname: "Montero",
    description:
      "Desarrollador FullStack especializado en Prestashop, Laravel y WordPress. Experto en optimización de rendimiento, SEO y administración de sistemas.",
    ariaLabel: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
      scrollDown: "Desplazarse hacia abajo",
    },
  },

  // ... (leaving other sections unchanged via context matching or just targeting specific blocks if possible, but replace_file_content works on blocks)
  // simpler to make multiple calls or one large block? I will do targeted edits for each section to be safe.


  // About Section
  about: {
    title: "Sobre",
    titleHighlight: "Mí",
    description:
      "Desarrollador FullStack con experiencia en múltiples tecnologías y plataformas. Especializado en crear soluciones web escalables y optimizadas.",
    skills: {
      languages: "Lenguajes",
      frameworks: "Frameworks",
      cmsEcommerce: "CMS & E-commerce",
      databases: "Bases de Datos",
      devopsTools: "DevOps & Tools",
      systems: "Sistemas",
    },
  },

  // Experience Section
  experience: {
    title: "Experiencia",
    titleHighlight: "Profesional",
    subtitle: "Mi trayectoria profesional en desarrollo web y administración de sistemas",
    expandButton: "Ver más detalles",
    collapseButton: "Ver menos",
    technologies: "Tecnologías utilizadas",
    positions: [
      {
        title: "Desarrollador FullStack y Técnico de Sistemas",
        company: "Santiago Vargas",
        period: "Oct 2025 – Dic 2025",
        location: "Lucena, Córdoba",
        summary: [
          "Mantenimiento evolutivo y correctivo de ecosistemas WordPress y PrestaShop, desarrollando módulos personalizados",
          "Diseño y desarrollo de software de automatización para folletos comerciales",
          "Gestión integral del ciclo de vida del hardware y configuración de puestos de trabajo",
        ],
        details: [
          "Implementación de módulos personalizados en PrestaShop para mejorar la experiencia del usuario",
          "Desarrollo de herramientas de automatización que redujeron el tiempo de producción de folletos en un 60%",
          "Gestión de infraestructura IT incluyendo adquisición, configuración y mantenimiento de equipos",
          "Soporte técnico a usuarios finales y resolución de incidencias",
        ],
        technologies: ["PrestaShop", "WordPress", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Windows Server"],
      },
      {
        title: "Desarrollador Web",
        company: "Agrocor",
        period: "Abr 2024 – Jun 2024",
        location: "Lucena, Córdoba",
        summary: [
          "Desarrollo web en Prestashop en entorno local y producción",
          "Optimización SEO y mejora de productos con categorización óptima",
          "Reducción del peso de la base de datos en un 80%",
          "Aumento de ventas del 800% tras optimización integral",
        ],
        details: [
          "Migración de tienda online a versión más reciente de PrestaShop",
          "Implementación de estrategias SEO que incrementaron el tráfico orgánico significativamente",
          "Optimización de base de datos mediante limpieza de registros obsoletos y optimización de índices",
          "Mejora de la velocidad de carga de la tienda reduciendo el tiempo en un 70%",
          "Reorganización de categorías de productos mejorando la experiencia de usuario",
        ],
        technologies: ["PrestaShop", "PHP", "MySQL", "SEO", "Google Analytics", "cPanel"],
      },
      {
        title: "Técnico de Sistemas",
        company: "Grupo Tragsa",
        period: "May 2023 – Nov 2023",
        location: "Granada",
        summary: [
          "Soporte informático a usuarios en Andalucía oriental con Windows Server 2022",
          "Instalación de perfiles y gestión de dispositivos móviles mediante inventario",
          "Instalación y mantenimiento de racks de red y switches",
        ],
        details: [
          "Administración de Active Directory para gestión de usuarios y políticas de grupo",
          "Configuración y despliegue de estaciones de trabajo Windows",
          "Gestión de inventario IT mediante herramientas especializadas",
          "Instalación y configuración de infraestructura de red (switches, routers, cableado estructurado)",
          "Resolución de incidencias de hardware y software",
          "Soporte remoto y presencial a usuarios finales",
        ],
        technologies: ["Windows Server 2022", "Active Directory", "GPO", "Redes", "Switches Cisco", "MDM"],
      },
      {
        title: "Desarrollador Full Stack",
        company: "Automatismos Chacón",
        period: "Ago 2021 – Mar 2022",
        location: "Lucena, Córdoba",
        summary: [
          "Desarrollo de páginas web con WordPress (inthesk.net)",
          "Maquetación de contenido con Adobe Photoshop e Illustrator",
          "Gestión y optimización del framework de base de datos de clientes",
        ],
        details: [
          "Diseño y desarrollo completo del sitio web corporativo inthesk.net",
          "Creación de contenido visual y gráfico para la web",
          "Implementación de sistema de gestión de contenidos personalizado",
          "Optimización de base de datos de clientes mejorando tiempos de respuesta",
          "Mantenimiento y actualización continua del sitio web",
        ],
        technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Adobe Photoshop", "Adobe Illustrator", "CSS3"],
      },
      {
        title: "Desarrollador Web",
        company: "Eccuo Marketing Digital",
        period: "Oct 2020 – Ene 2021",
        location: "Córdoba",
        summary: [
          "Desarrollo Full Stack de páginas web con WordPress",
          "Maquetado CSS personalizado según necesidades del cliente",
          "Manejo de PrestaShop",
        ],
        details: [
          "Desarrollo de múltiples sitios web para clientes de diversos sectores",
          "Personalización de temas WordPress según especificaciones del cliente",
          "Implementación de diseños responsivos para todos los dispositivos",
          "Configuración y personalización de tiendas PrestaShop",
          "Integración de plugins y módulos de terceros",
        ],
        technologies: ["WordPress", "PrestaShop", "PHP", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      },
      {
        title: "Técnico de Sistemas",
        company: "Argen Soluciones Informáticas",
        period: "Mar 2017 – Jun 2017",
        location: "Lucena, Córdoba",
        summary: [
          "Administración y mantenimiento de sistemas y red en centro educativo",
          "Despliegue masivo de equipos y optimización de infraestructura de red",
          "Gestión de inventario y resolución de incidencias de conectividad",
        ],
        details: [
          "Reinstalación y optimización de sistemas operativos en portátiles, incluyendo congelación de configuración",
          "Reorganización y cableado estructurado de racks e infraestructura de red con etiquetado preciso basado en planos Visio",
          "Despliegue de imágenes de sistema mediante Clonezilla y Windows Server 2012 (WDS/Sysprep)",
          "Implementación de solución Wifi Ubiquiti Unifi para garantizar conectividad de alta densidad en aulas",
          "Mantenimiento correctivo de hardware y digitalización de documentación administrativa",
        ],
        technologies: ["Windows Server 2012", "Clonezilla", "Sysprep", "Ubiquiti Unifi", "Hardware", "Visio", "Redes"],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Mis",
    titleHighlight: "Proyectos",
    subtitle: "Una selección de proyectos que demuestran mi experiencia en desarrollo web y soluciones digitales",
    viewMore: "Ver más",
    viewLess: "Ver menos",
    viewProject: "Ver proyecto",
    viewCode: "Ver código",
    period: "Período",
    items: [
      {
        title: "Barbería Joseabarber",
        summary:
          "Sistema completo de reserva de citas desarrollado con Laravel. Permite a los clientes reservar sus citas online de forma sencilla y al barbero gestionar su agenda.",
        description:
          "Aplicación web completa para gestión de citas de barbería desarrollada desde cero con Laravel. El sistema permite a los clientes realizar reservas online de forma intuitiva, mientras que el propietario puede gestionar su agenda, horarios y servicios desde un panel de administración.",
        challenge:
          "El cliente necesitaba digitalizar su proceso de reservas que se hacía completamente por teléfono, lo que generaba confusiones y citas duplicadas. Requería un sistema que fuera fácil de usar tanto para él como para sus clientes.",
        solution:
          "Desarrollé una aplicación Laravel con autenticación de usuarios, sistema de reservas con disponibilidad en tiempo real, panel de administración para gestión de horarios y servicios, y notificaciones por email. Implementé un diseño responsivo que funciona perfectamente en móviles.",
        results: [
          "Reducción del 85% en llamadas telefónicas para reservas",
          "0% de citas duplicadas desde el lanzamiento",
          "Incremento del 40% en reservas totales gracias a la disponibilidad 24/7",
          "Tiempo de gestión de agenda reducido de 2 horas diarias a 15 minutos",
        ],
        features: [
          "Sistema de autenticación de usuarios",
          "Reserva de citas con calendario interactivo",
          "Panel de administración completo",
          "Gestión de servicios y precios",
          "Notificaciones por email automatizadas",
          "Diseño responsivo optimizado para móviles",
          "Sistema de recordatorios de citas",
        ],
        tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
        link: "https://joseabarber.es",
        github: null,
        period: "Abr 2023 – Actualidad",
        image: "logo-Peluquero",
        imageFormat: "png"
      },
      {
        title: "IntheSK",
        summary:
          "Mantenimiento evolutivo y mejoras continuas de la web WordPress para Automatismos Chacón usando Elementor.",
        description:
          "Mantenimiento evolutivo y desarrollo de nuevas funcionalidades para la web corporativa. Implementación de páginas clave como Inicio, Tienda y Ayuda utilizando Elementor para adaptar la web a los requisitos del producto (un tag localizador de dispositivos).",
        challenge:
          "La web requería actualizaciones constantes y nuevas secciones para mostrar eficazmente el producto, asegurando una experiencia de usuario fluida.",
        solution:
          "Realicé mejoras continuas según los requisitos, diseñando y maquetando secciones completas (Inicio, Tienda, Ayuda) con Elementor y gestionando la presentación del producto.",
        results: [
          "Diseño e implementación de páginas principales con Elementor",
          "Mejora continua de la experiencia de usuario",
          "Adaptación flexible a los cambios de requisitos del producto",
          "Mantenimiento estable del sitio WordPress",
        ],
        features: [
          "Maquetación con Elementor",
          "Diseño de Landing Pages",
          "Gestión de Tienda Online",
          "Sección de Ayuda y Soporte",
          "Optimización de imágenes",
          "Mantenimiento evolutivo",
          "Integración con redes sociales",
        ],
        tech: ["WordPress", "Elementor", "CSS3", "JavaScript", "Adobe Photoshop", "Adobe Illustrator"],
        link: "https://inthesk.net",
        github: null,
        period: "2021 – 2022",
        image: "ik_logo",
        imageFormat: "png"
      },
      {
        title: "E-commerce Agrocor",
        summary:
          "Optimización integral de tienda online en PrestaShop. Mejora de SEO, reducción de base de datos en 80% y aumento de ventas del 800%.",
        description:
          "Proyecto de optimización completa de tienda online de productos agrícolas. La tienda tenía serios problemas de rendimiento, SEO deficiente y una base de datos sobrecargada que afectaba gravemente la experiencia del usuario.",
        challenge:
          "La tienda sufría tiempos de carga superiores a 10 segundos, prácticamente no aparecía en búsquedas de Google, y la base de datos había crecido descontroladamente hasta ocupar más de 2GB con productos duplicados y registros obsoletos. Las ventas habían caído un 60% en 6 meses.",
        solution:
          "Realicé una auditoría completa y ejecuté un plan de optimización integral: limpieza exhaustiva de base de datos eliminando duplicados y registros innecesarios, optimización de índices, implementación de caché, optimización de imágenes, reestructuración de categorías siguiendo mejores prácticas SEO, y mejora de la arquitectura de información del sitio.",
        results: [
          "Reducción del peso de base de datos de 2GB a 400MB (80%)",
          "Tiempo de carga reducido de 10s a 1.5s (85% mejora)",
          "Aumento de ventas del 800% en 3 meses post-optimización",
          "Posicionamiento orgánico mejorado: de página 5+ a primera página en keywords principales",
          "Tasa de conversión incrementada del 0.8% al 4.2%",
        ],
        features: [
          "Auditoría completa de rendimiento",
          "Limpieza y optimización de base de datos",
          "Implementación de sistema de caché multinivel",
          "Optimización de imágenes y recursos",
          "Reestructuración de categorías SEO-friendly",
          "Mejora de arquitectura de información",
          "Configuración de CDN",
          "Implementación de lazy loading",
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
    title: "Formación",
    titleHighlight: "Académica",
    subtitle: "Mi trayectoria educativa en tecnologías de la información",
    items: [
      {
        title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        institution: "IES Marqués de Comares",
        period: "Sep 2024 – Dic 2025",
        location: "Lucena, Córdoba",
        description:
          "Formación avanzada en desarrollo de aplicaciones para múltiples plataformas, incluyendo móvil y escritorio.",
      },
      {
        title: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
        institution: "IES Marqués de Comares",
        period: "Sep 2017 – Feb 2020",
        location: "Lucena, Córdoba",
        description:
          "Especialización en desarrollo web full stack, incluyendo frontend, backend y gestión de bases de datos.",
      },
      {
        title: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
        institution: "IES Marqués de Comares",
        period: "Sep 2015 – Jun 2017",
        location: "Lucena, Córdoba",
        description:
          "Fundamentos de sistemas informáticos, redes y soporte técnico.",
      },
    ],
  },

  // Certificates Section
  certificates: {
    title: "Certificados",
    titleHighlight: "y Logros",
    subtitle: "Reconocimientos oficiales a mi dedicación y aprendizaje",
    items: [
      {
        title: "Proyecto Erasmus+ “Water It’s Me”",
        issuer: "Erasmus+ / Comisión Europea",
        year: "Abr 2023",
        description: "Intercambio cultural en Wroclaw (Polonia) con participantes de Rumanía, Lituania, Polonia y España.",
        details: [
          "Proyecto enfocado en la concienciación sobre el agua potable.",
          "Análisis ambiental del impacto de la minería.",
          "Fomento de hábitos sostenibles y cooperación internacional.",
          "Talleres y actividades de integración en un entorno intercultural."
        ],
        link: "https://www.youthpass.eu/en/verify/9XXC-AVFY-LLDM-YG5F/Alberto%20Zafra%20Montero"
      }
    ]
  },

  // Testimonials Section
  testimonials: {
    title: "Recomendaciones",
    titleHighlight: "Laborales",
    subtitle: "Lo que dicen mis compañeros y empleadores sobre mi trabajo",
    items: [
      {
        name: "Marta Dios",
        role: "Directora de desarrollo empresarial en Agrocor",
        image: "marta-dios",
        imageFormat: "jpg",
        content: "Con Alberto trabajamos con total confianza y con la certeza de saber que estábamos confiando, datos e información a una persona que los trataba de forma totalmente profesional y que sin duda desarrolló un excelente trabajo con nosotros. Alberto es una persona muy trabajadora, muy responsable que se preocupa por el trabajo que está desarrollando para hacerlo siempre de la mejor forma dando lo mejor de sí en cada día. Los nuevos retos no le frenan, sino que los le motivan a seguir adelante, afrontarlos con una fuerza y un carácter que lo hacen un activo muy valioso y un profesional genuino.",
        linkedin: "https://www.linkedin.com/in/marta-dios-c-b3a71928/"
      },
      {
        name: "Pedro Santiago",
        role: "Ejecutivo en Santiago Vargas",
        image: "pedro-santiago",
        imageFormat: "jpg",
        content: "Alberto, es un profesional talentoso que realizó sus prácticas como desarrollador de aplicaciones web y plataformas en José Santiago Vargas, s.a durante varios meses. Pude comprobar directamente su trabajo y excepcional desempeño, iniciativa y potencial para adaptar cualquier empresa a las exigencias técnologícas de la actualidad. Demostró una sólida comprensión de tecnologías clave para el desarrollo web, incluyendo HTML5, CSS3, JavaScript (ES6+), React y Node.js. y participó activamente en la implemetación del programa de datos de seguridad de productos químicos y su inclusión en la web de la empresa. Igualmente, optimizó el rendimiento de los equipos informáticos.",
        linkedin: "https://www.linkedin.com/in/pedro-santiago-mu%C3%B1oz-a974028b/"
      },
      {
        name: "Jose Antonio Reyes",
        role: "Propietario de Joseabarber",
        image: "josea-reyes",
        imageFormat: "jpg",
        content: "Quiero agradecer a mi amigo Zafra por el gran trabajo que ha hecho con mi página web. Desde el principio supo captar exactamente lo que quería y lo plasmó de forma clara, profesional y muy cuidada. El resultado es una web moderna, funcional y fácil de usar, justo lo que necesitaba. Además, añadió recordatorios automáticos por WhatsApp, la posibilidad de ver las citas más cercanas disponibles y se encargó de actualizar todo el sistema para que funcionara de forma rápida y eficiente. El trato ha sido cercano en todo momento, siempre dispuesto a resolver dudas y proponer mejoras. Sin duda, lo recomiendo totalmente.",
        linkedin: "https://www.linkedin.com/in/josea-reyes-cabrera/"
      }
    ]
  },

  viewCertificate: "Mostrar certificado",

  // Contact Section
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
    email: "Email",
    linkedin: "LinkedIn",
    location: "Ubicación",
    downloadCV: "Descargar CV",
    sendMessage: "Envíame un mensaje",
    cvErrorTitle: "Error al descargar",
    cvErrorDescription: "Ha ocurrido un problema al intentar descargar el CV. Como alternativa puedes visitar mi perfil de Linkedin mientras tanto.",
    goToLinkedin: "Ir a LinkedIn",
    close: "Cerrar",
  },

  // Footer
  footer: {
    rights: "Todos los derechos reservados",
    madeWith: "Hecho con",
    inSpain: "en España",
    legal: "Aviso Legal: De conformidad con la normativa de protección de datos, se informa que la información personal contenida en este CV es confidencial y está dirigida exclusivamente a reclutadores y personal de RRHH. Se prohíbe expresamente la reproducción, distribución o uso comercial de estos datos (spam)."
  },
};

export type Translations = typeof es;
