import type { Dict } from "./types";

export const es: Dict = {
  lang: "es",
  htmlLang: "es",
  speechLang: "es-ES",
  nativeName: "Español",
  splitChars: true,
  hero: {
    hello: "Hola",
    im: "Soy",
    kicker: "PRODUCTO · CONSTRUCTORA DE IA · CENTRADA EN EL CLIENTE",
    summary: "Constructora de Producto e IA — lanzo soluciones a problemas reales y mido si funcionaron.",
    sub: "Busco roles en gestión de producto, estrategia e IA donde pueda trabajar en problemas difíciles, lanzar rápido y seguir aprendiendo.",
  },
  about: {
    heading: "Sobre mí",
    paragraphs: [
      "Identifico problemas, construyo soluciones y mido si funcionaron. Mi experiencia abarca ingeniería de IA, entrega de productos y análisis de datos — uso las tres para lanzar cosas que realmente marcan la diferencia. Mi trabajo abarca ingeniería de prompts, pipelines de recuperación, APIs de backend y despliegues de nivel empresarial.",
      "Disfruto convirtiendo restricciones ambiguas de producto y de políticas en sistemas desplegables en los que los equipos pueden confiar.",
    ],
    focusLabel: "Enfoque:",
    focusText: "lanzar flujos de trabajo de IA fiables que mejoren operaciones reales, no solo demos.",
    imageAnchors: ["construyo soluciones", "y mido si funcionaron."],
  },
  sections: {
    proof: "Impulso y prueba social",
    projects: "Proyectos destacados",
    experience: "Experiencia",
    skills: "Habilidades",
    education: "Educación y credenciales",
    substack: "Lipgloss & LLMS",
    substackIntro: "Lecturas destacadas de mi Substack sobre conceptos prácticos de IA y pensamiento aplicado al mundo real.",
    substackStatus: "Últimas publicaciones, sincronizadas automáticamente desde Lipgloss & LLMS.",
    substackEmpty: "Aún no hay publicaciones — vuelve pronto.",
    substackError: "No pudimos cargar las últimas publicaciones de Substack en este momento. Vuelve pronto.",
    substackCta: "Visita Lipgloss & LLMs",
    arcade: "Arcade de entrevistas",
    arcadeIntro: "Elige rol + dificultad, gánale al reloj, encadena rachas y entrena como en un juego de entrevistas.",
    contact: "Conectemos",
  },
  nav: { projects: "Proyectos", about: "Sobre mí", experience: "Experiencia", substack: "Substack", resume: "Currículum", contact: "Contacto" },
  ui: {
    role: "Constructora de Producto e IA",
    city: "Toronto",
    scroll: "Desplaza",
    email: "Correo",
    backToTop: "Volver arriba ↑",
    downloadPdf: "Descargar PDF",
    home: "Inicio",
    next: "Siguiente",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    previousPosts: "Publicaciones anteriores",
    nextPosts: "Publicaciones siguientes",
    details: "detalles",
    toolsTopics: "Herramientas y temas",
    skip: "Saltar al contenido",
    settings: "Preferencias",
    language: "Idioma",
    theme: "Tema",
    system: "Sistema",
    light: "Claro",
    dark: "Oscuro",
    accessibility: "Accesibilidad",
    accessibilityHint: "Texto más grande y de alto contraste, sin animaciones, descripciones de imágenes y lectura en voz alta.",
    on: "Activado",
    off: "Desactivado",
    readAloud: "Leer en voz alta",
    pause: "Pausar",
    resume: "Reanudar",
    stop: "Detener",
    noVoice: "No hay voz para este idioma en este dispositivo; se usa la voz predeterminada.",
    noSpeech: "Este navegador no admite la lectura en voz alta.",
    image: "Imagen:",
    noTimeLimit: "Sin límite de tiempo",
  },
  alt: {
    portrait: "Tatyana Amugo en una conferencia, con blusa marrón, falda azul marino y su gafete.",
    ona: "La aplicación web de ONA, que presenta la conciencia espacial reinventada para personas con discapacidad visual.",
    shipping: "El prototipo del asistente de configuración de envíos preguntando a los comerciantes “¿Qué vendes?”",
  },
  proof: [
    "Proyectos clave de IA entregados",
    "Reducción de trabajo manual en flujos de IA (%)",
    "Mejora de marketing gracias a la analítica (%)",
    "Impacto de la automatización de flujos ERP (%)",
  ],
  projects: {
    "shipping-setup-assistant": {
      title: "Prototipo de asistente de configuración de envíos (tarea estilo Shopify)",
      description:
        "Un pequeño prototipo que construí a partir del enunciado de una tarea de configuración de envíos de Shopify. El problema: muchos comerciantes abandonan la configuración antes de terminar cuando se topan con términos de envío desconocidos. Mi solución: un asistente guiado que hace dos preguntas en lenguaje sencillo y configura el flujo automáticamente. Construido y desplegado como prototipo interactivo en Netlify.",
      meta: [],
      tags: ["Gestión de producto", "UX", "Prototipo", "Pensamiento de servicio en vivo"],
      badge: "Destacado",
      links: ["Ver prototipo"],
    },
    "ona-assistive-ai": {
      title: "ONA - Sistema de IA asistiva (Segundo lugar: Impacto Destacado)",
      description:
        "Lideré un equipo multidisciplinario en el diseño de un sistema asistivo con IA que apoya a personas con discapacidad visual y a pacientes con demencia con conciencia espacial y refuerzo de la memoria.",
      meta: [
        { label: "Impacto", text: "Reconocido con el segundo lugar en Impacto Destacado por su aplicabilidad real y la claridad de la solución." },
        {
          label: "",
          text: "Definí la arquitectura del sistema y la estrategia de validación con usuarios, traduciendo desafíos ambiguos centrados en las personas en flujos de trabajo desplegables con IA.",
        },
        {
          label: "Bajo el capó",
          text: "Un pipeline basado en PyTorch ejecuta YOLOv26 para detectar objetos y obstáculos en tiempo real junto con MiDaS para la estimación de profundidad monocular, lo que da al sistema una lectura en vivo de qué hay cerca y a qué distancia. FriendNet, un modelo entrenado a medida, reconoce rostros familiares para reforzar la memoria de los pacientes con demencia. Gemini convierte esas detecciones en descripciones de la escena y orientación contextual en lenguaje natural, Argos Translate permite una salida multilingüe totalmente sin conexión y Piper TTS lee los resultados en voz alta para una accesibilidad sin manos y sin pantalla.",
        },
      ],
      tags: ["YOLOv26", "MiDaS", "PyTorch", "Gemini", "Argos Translate", "Piper TTS", "FriendNet (modelo propio)"],
      badge: "Proyecto final",
      links: ["Ver video demo", "Demo en vivo"],
    },
    "rag-interview-prep": {
      title: "Sistema de preparación de entrevistas con RAG",
      description:
        "Construyendo un sistema LLM + RAG de extremo a extremo que recupera dinámicamente conocimiento específico de cada rol y genera simulaciones de entrevista estructuradas con retroalimentación.",
      meta: [
        {
          label: "Enfoque",
          text: "Plantillas de prompts, pipelines de recuperación y lógica de validación de respuestas para mejorar la relevancia de los resultados y reducir las alucinaciones.",
        },
      ],
      tags: ["RAG", "Ingeniería de prompts", "ChromaDB", "FastAPI", "Lógica de validación"],
      links: ["Ver README", "Repositorio en GitHub"],
    },
    "anomaly-detection": {
      title: "Sistema de detección de anomalías (proyecto de posgrado)",
      description: "Desarrollé y comparé modelos basados en PaDiM, SPADE y CLIP con PyTorch y OpenCV para la detección de anomalías en video.",
      meta: [
        {
          label: "",
          text: "Optimicé los pipelines de preprocesamiento e inferencia para un mejor rendimiento con conjuntos de datos reales y desplegué una demo interactiva con visualizaciones Grad-CAM.",
        },
      ],
      tags: ["PyTorch", "OpenCV", "PaDiM", "SPADE", "CLIP"],
      links: ["Demo en vivo"],
    },
  },
  experience: {
    "exp-ai-engineer": {
      role: "Ingeniera de IA (Co-op) - Ontario Public Service",
      location: "Toronto, Canadá | ene 2026 - abr 2026",
      bullets: [
        "Habilité decisiones de revisión de casos asistidas por IA, fiables y estructuradas, en el sistema empresarial de gestión de casos SAMS, validando la precisión de las respuestas del modelo — desarrollado con plantillas de prompts basadas en Jinja para flujos de trabajo de LLM en producción.",
        "Reduje en aproximadamente un 79% la carga de procesamiento manual de casos en un entorno gubernamental regulado, creando APIs RESTful seguras y capas de orquestación de backend para flujos de decisión agénticos asistidos por IA.",
        "Mejoré la fiabilidad de las integraciones de LLM y la alineación con las partes interesadas definiendo métricas de éxito medibles e iterando el diseño del pipeline de prompts y recuperación — desplegado y depurado mediante CI/CD en Azure DevOps.",
      ],
    },
    "exp-beats-by-dre": {
      role: "Externa - Insights del consumidor y análisis de datos, Beats by Dre",
      location: "Nairobi, Kenia | sep 2024 - oct 2024",
      bullets: [
        "Mejoré un 15% la eficacia del marketing segmentado traduciendo preguntas de negocio ambiguas en insights estructurados y basados en métricas — analicé el comportamiento de los clientes y la segmentación del mercado con Python y Tableau.",
        "Agilicé y aclaré la toma de decisiones de equipos multifuncionales destilando datos complejos en recomendaciones accionables — presentadas mediante dashboards dinámicos.",
        "Mejoré un 20% la eficiencia de la recopilación de datos y la calidad del análisis posterior diseñando y lanzando encuestas a clientes con una lógica de preguntas optimizada.",
      ],
    },
    "exp-upande": {
      role: "Desarrolladora ERP - Upande",
      location: "Nairobi, Kenia | sep 2024 - dic 2024",
      bullets: [
        "Optimicé las operaciones entre departamentos integrando servicios de backend y automatizando flujos de trabajo — implementado y configurado con módulos de ERPNext.",
        "Mejoré la precisión de los informes y la eficiencia operativa reduciendo el procesamiento manual en aproximadamente un 30% — mediante la creación de pipelines de automatización.",
      ],
    },
  },
  skills: [
    {
      title: "Gestión de producto",
      items: [
        "Definición de problemas, dimensionamiento de oportunidades y priorización ligados a resultados medibles.",
        "Estrategia de producto y hojas de ruta basadas en las necesidades de los usuarios y las restricciones del negocio.",
        "Convierte requisitos ambiguos en planes claros que los equipos pueden ejecutar.",
      ],
    },
    {
      title: "Agile y entrega",
      items: [
        "Historias de usuario, gestión del backlog, planificación de sprints, dailies y retrospectivas.",
        "Iteración rápida del prototipo a un entregable probado con plazos ajustados.",
        "Ejecución multifuncional con equipos de ingeniería, diseño y negocio.",
      ],
    },
    {
      title: "Análisis de datos y experimentación",
      items: [
        "Análisis con SQL y Python para seguimiento de KPIs, diagnóstico de rendimiento y apoyo a decisiones.",
        "Pruebas A/B y diseño de experimentos con métricas de éxito claras y análisis de compromisos.",
        "Dashboards y storytelling con métricas para dar visibilidad operativa y de producto.",
      ],
    },
    {
      title: "Comunicación con partes interesadas",
      items: [
        "Traduce restricciones técnicas a un lenguaje de negocio claro para quienes deciden.",
        "Alinea a los equipos en torno a objetivos, riesgos, plazos y definiciones medibles de éxito.",
        "Impulsa la colaboración entre producto, ingeniería y operaciones.",
      ],
    },
    {
      title: "IA y sistemas de producto",
      items: [
        "Diseñé y optimicé plantillas de prompts (Jinja) para flujos de trabajo de LLM en producción.",
        "Construí y evalué pipelines RAG con ChromaDB y sentence-transformers.",
        "Construí sistemas agénticos de extremo a extremo con backends en FastAPI y patrones de tool calling.",
        "Integré APIs basadas en LLM en sistemas empresariales con salidas estructuradas y validación de resultados.",
      ],
    },
  ],
  education: [
    { title: "Certificado de posgrado - Inteligencia Artificial y Aprendizaje Automático (Co-op)", detail: "Fanshawe College, London, Canadá | ene 2025 - actualidad" },
    { title: "Licenciatura - Informática y Ciencias de la Computación", detail: "Strathmore University, Nairobi, Kenia | abr 2020 - jul 2023" },
    { title: "Diploma - Tecnologías de la Información Empresarial", detail: "Strathmore University, Nairobi, Kenia | ene 2019 - sep 2021" },
    { title: "Credencial profesional", detail: "Data Analyst with Python and SQL, DataCamp (2024)" },
  ],
  arcade: {
    roles: { data_analyst: "Analista de datos", ml_engineer: "Ingeniería de ML", product_analytics: "Analítica de producto" },
    difficulties: { easy: "Fácil", medium: "Media", hard: "Difícil" },
    xp: "XP",
    streak: "Racha",
    timer: "Tiempo",
    question: "Pregunta",
    rubric: "Rúbrica ideal",
    needHint: "Pista",
    nailedIt: "¡Lo clavé!",
    skip: "Saltar",
    newChallenge: "Nuevo reto",
    start: "Empieza la ronda, responde en voz alta y luego puntúate con honestidad.",
    timeUp: "Se acabó el tiempo. Pide una pista y prueba otro reto.",
    noHints: "Aún no hay pistas para esta pregunta.",
    hint: (h) => `Pista: ${h}`,
    strongRun: (e, b, s, k) => `¡Buena ronda! +${e} XP (${b} base, ${s} velocidad, ${k} racha).`,
    skipped: "Saltada. Racha reiniciada. Nuevo reto cargado.",
    newRound: "Nueva ronda cargada. Di tu respuesta en voz alta y luego puntúate.",
    difficultySet: (_k, label) => `Dificultad: ${label}.`,
    data: {
      data_analyst: [
        {
          question: "El dashboard de churn se dispara para una cohorte. ¿Cuál es tu plan de investigación para los primeros 30 minutos?",
          rubric: [
            "Confirma la definición de la métrica y la actualidad de los datos.",
            "Divide el problema por segmento y etapa del embudo.",
            "Propone una acción concreta a seguir para las partes interesadas.",
          ],
          hints: ["Empieza comprobando la fiabilidad de los datos.", "Compara con la línea base de la semana anterior.", "Aísla primero por canal de adquisición."],
        },
        {
          question: "Diseña una vista de KPI que un gerente no técnico pueda usar en 60 segundos.",
          rubric: ["Elige un KPI principal claro y una tendencia de apoyo.", "Usa umbrales o alertas para decidir rápido.", "Añade una acción recomendada según la señal."],
          hints: ["La claridad gana a la complejidad del dashboard.", "Usa etiquetas en lenguaje sencillo.", "Un KPI, una decisión."],
        },
      ],
      ml_engineer: [
        {
          question: "¿Cómo evaluarías un coach de entrevistas con RAG más allá de la precisión del modelo?",
          rubric: [
            "Separa la calidad de la recuperación de la calidad de la generación.",
            "Define comprobaciones de fundamentación y de alucinaciones.",
            "Incluye un ciclo de revisión humana y una taxonomía de fallos.",
          ],
          hints: ["Mide la recuperación y la respuesta por separado.", "Usa una rúbrica, no una sola puntuación.", "Sigue los tipos de fallo a lo largo del tiempo."],
        },
        {
          question: "La latencia de tu RAG empeora tras añadir funciones. ¿Qué optimizas primero?",
          rubric: [
            "Perfila el pipeline para encontrar el verdadero cuello de botella.",
            "Equilibra la caché y la profundidad de recuperación.",
            "Protege la calidad de las respuestas con pruebas de regresión.",
          ],
          hints: ["Perfila antes de optimizar.", "Revisa primero el camino de embeddings/recuperación.", "Cuida la calidad mientras reduces la latencia."],
        },
      ],
      product_analytics: [
        {
          question: "Una función aumenta el engagement pero reduce la conversión. ¿Qué recomendación lanzas?",
          rubric: [
            "Plantea los compromisos por segmento de usuarios e impacto en el embudo.",
            "Conecta la recomendación con los objetivos del producto.",
            "Define un experimento de seguimiento medible.",
          ],
          hints: ["¿Quién ganó? ¿Quién perdió?", "Vincula las métricas al objetivo de negocio.", "Lanza con salvaguardas y un plan de pruebas."],
        },
        {
          question: "¿Cómo priorizas la hoja de ruta cuando el feedback de las entrevistas es contradictorio?",
          rubric: [
            "Agrupa el feedback por persona e impacto.",
            "Usa el razonamiento esfuerzo/impacto de forma transparente.",
            "Convierte las prioridades en un plan por hitos.",
          ],
          hints: ["Agrupa el feedback antes de ordenar.", "Primero el impacto, luego el esfuerzo.", "Define cómo se ve el éxito."],
        },
      ],
    },
  },
};
