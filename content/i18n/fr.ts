import type { Dict } from "./types";

export const fr: Dict = {
  lang: "fr",
  htmlLang: "fr-CA",
  speechLang: "fr-FR",
  nativeName: "Français",
  splitChars: true,
  hero: {
    hello: "Bonjour",
    im: "Je suis",
    kicker: "PRODUIT · BÂTISSEUSE IA · ORIENTÉE CLIENT",
    summary: "Bâtisseuse produit & IA — je livre des solutions à de vrais problèmes et je mesure si elles ont fonctionné.",
    sub: "Je vise des postes en gestion de produit, en stratégie et en IA où je peux travailler sur des problèmes difficiles, livrer vite et continuer d'apprendre.",
  },
  about: {
    heading: "À propos de moi",
    paragraphs: [
      "J'identifie les problèmes, je construis des solutions et je mesure si elles ont fonctionné. Mon parcours couvre l'ingénierie IA, la livraison de produits et l'analyse de données — j'utilise les trois pour livrer ce qui fait vraiment la différence. Mon travail couvre l'ingénierie de prompts, les pipelines de récupération, les API backend et le déploiement à l'échelle de l'entreprise.",
      "J'aime transformer des contraintes produit et réglementaires ambiguës en systèmes déployables auxquels les équipes peuvent se fier.",
    ],
    focusLabel: "Priorité :",
    focusText: "livrer des workflows IA fiables qui améliorent de vraies opérations, pas seulement des démos.",
    imageAnchors: ["je construis des solutions", "et je mesure si elles ont fonctionné."],
  },
  sections: {
    proof: "Élan et preuves sociales",
    projects: "Projets phares",
    experience: "Expérience",
    skills: "Compétences",
    education: "Formation et certifications",
    substack: "Lipgloss & LLMS",
    substackIntro: "Lectures choisies de mon Substack sur des concepts pratiques d'IA et une réflexion ancrée dans le réel.",
    substackStatus: "Derniers articles, synchronisés automatiquement depuis Lipgloss & LLMS.",
    substackEmpty: "Aucun article pour l'instant — revenez bientôt.",
    substackError: "Impossible de charger les derniers articles Substack pour le moment. Revenez bientôt.",
    substackCta: "Découvrir Lipgloss & LLMs",
    arcade: "Arcade d'entretiens",
    arcadeIntro: "Choisis un rôle + une difficulté, bats le chrono, enchaîne les séries et entraîne-toi comme dans un jeu d'entretien.",
    contact: "Restons en contact",
  },
  nav: { projects: "Projets", about: "À propos", experience: "Expérience", substack: "Substack", resume: "CV", contact: "Contact" },
  ui: {
    role: "Bâtisseuse produit & IA",
    city: "Toronto",
    scroll: "Défiler",
    email: "E-mail",
    backToTop: "Haut de page ↑",
    downloadPdf: "Télécharger le PDF",
    home: "Accueil",
    next: "Suivant",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    previousPosts: "Articles précédents",
    nextPosts: "Articles suivants",
    details: "détails",
    toolsTopics: "Outils et sujets",
    skip: "Aller au contenu",
    settings: "Préférences",
    language: "Langue",
    theme: "Thème",
    system: "Système",
    light: "Clair",
    dark: "Sombre",
    accessibility: "Accessibilité",
    accessibilityHint: "Texte plus grand et contrasté, sans animations, descriptions d'images et lecture à voix haute.",
    on: "Activé",
    off: "Désactivé",
    readAloud: "Lire à voix haute",
    pause: "Pause",
    resume: "Reprendre",
    stop: "Arrêter",
    noVoice: "Aucune voix pour cette langue sur cet appareil — voix par défaut utilisée.",
    noSpeech: "La lecture à voix haute n'est pas prise en charge par ce navigateur.",
    image: "Image :",
    noTimeLimit: "Sans limite de temps",
  },
  alt: {
    portrait: "Tatyana Amugo lors d'une conférence, en haut marron et jupe bleu marine, avec son badge.",
    ona: "L'application web ONA, qui présente une conscience spatiale réinventée pour les personnes malvoyantes.",
    shipping: "Le prototype d'assistant de configuration des expéditions demandant aux marchands « Que vendez-vous ? »",
  },
  proof: [
    "Projets IA clés livrés",
    "Réduction du travail manuel dans les workflows IA (%)",
    "Gain marketing grâce à l'analytique (%)",
    "Impact de l'automatisation des workflows ERP (%)",
  ],
  projects: {
    "shipping-setup-assistant": {
      title: "Prototype d'assistant de configuration des expéditions (exercice façon Shopify)",
      description:
        "Un petit prototype que j'ai construit à partir d'un énoncé d'exercice Shopify sur la configuration des expéditions. Le problème : beaucoup de marchands abandonnent la configuration avant la fin lorsqu'ils tombent sur des termes d'expédition inconnus. Ma solution : un assistant guidé qui pose deux questions en langage simple et configure le parcours automatiquement. Construit et déployé comme prototype interactif sur Netlify.",
      meta: [],
      tags: ["Gestion de produit", "UX", "Prototype", "Approche service en continu"],
      badge: "À la une",
      links: ["Voir le prototype"],
    },
    "ona-assistive-ai": {
      title: "ONA - Système d'IA d'assistance (2e place : Impact remarquable)",
      description:
        "J'ai dirigé une équipe pluridisciplinaire dans la conception d'un système d'assistance alimenté par l'IA, qui aide les personnes malvoyantes et les patients atteints de démence grâce à la conscience spatiale et au renforcement de la mémoire.",
      meta: [
        { label: "Impact", text: "Récompensé par la 2e place du prix Impact remarquable pour son applicabilité concrète et la clarté de la solution." },
        {
          label: "",
          text: "J'ai défini l'architecture du système et la stratégie de validation utilisateur, en traduisant des défis humains ambigus en workflows IA déployables.",
        },
        {
          label: "Sous le capot",
          text: "Un pipeline basé sur PyTorch exécute YOLOv26 pour la détection d'objets et d'obstacles en temps réel, avec MiDaS pour l'estimation de profondeur monoculaire, ce qui donne au système une lecture en direct de ce qui est proche et à quelle distance. FriendNet, un modèle entraîné sur mesure, reconnaît les visages familiers pour renforcer la mémoire des patients atteints de démence. Gemini transforme ces détections en descriptions de scène et en conseils contextuels en langage naturel, Argos Translate permet une sortie multilingue entièrement hors ligne, et Piper TTS lit les résultats à voix haute pour une accessibilité mains libres et sans écran.",
        },
      ],
      tags: ["YOLOv26", "MiDaS", "PyTorch", "Gemini", "Argos Translate", "Piper TTS", "FriendNet (modèle sur mesure)"],
      badge: "Projet de fin d'études",
      links: ["Voir la vidéo de démo", "Démo en ligne"],
    },
    "rag-interview-prep": {
      title: "Système de préparation aux entretiens propulsé par RAG",
      description:
        "Je construis un système LLM + RAG de bout en bout qui récupère dynamiquement des connaissances propres à chaque poste et génère des simulations d'entretien structurées avec retours.",
      meta: [
        {
          label: "Priorité",
          text: "Modèles de prompts, pipelines de récupération et logique de validation des réponses pour améliorer la pertinence et réduire les hallucinations.",
        },
      ],
      tags: ["RAG", "Ingénierie de prompts", "ChromaDB", "FastAPI", "Logique de validation"],
      links: ["Voir le README", "Dépôt GitHub"],
    },
    "anomaly-detection": {
      title: "Système de détection d'anomalies (projet de cycle supérieur)",
      description: "Conception et évaluation comparative de modèles basés sur PaDiM, SPADE et CLIP avec PyTorch et OpenCV pour la détection d'anomalies vidéo.",
      meta: [
        {
          label: "",
          text: "Optimisation des pipelines de prétraitement et d'inférence pour de meilleures performances sur des jeux de données réels, et déploiement d'une démo interactive avec des visualisations Grad-CAM.",
        },
      ],
      tags: ["PyTorch", "OpenCV", "PaDiM", "SPADE", "CLIP"],
      links: ["Démo en ligne"],
    },
  },
  experience: {
    "exp-ai-engineer": {
      role: "Ingénieure IA (stage coop) - Fonction publique de l'Ontario",
      location: "Toronto, Canada | janv. 2026 - avr. 2026",
      bullets: [
        "J'ai permis des décisions de révision de dossiers assistées par l'IA, fiables et structurées, dans le système de gestion de dossiers d'entreprise SAMS, en validant l'exactitude des réponses du modèle — à l'aide de modèles de prompts Jinja pour des workflows LLM en production.",
        "J'ai réduit d'environ 79 % la charge de traitement manuel des dossiers dans un environnement gouvernemental réglementé, en créant des API RESTful sécurisées et des couches d'orchestration backend pour des workflows de décision agentiques assistés par l'IA.",
        "J'ai amélioré la fiabilité des intégrations LLM et l'alignement des parties prenantes en définissant des indicateurs de réussite mesurables et en itérant sur la conception du pipeline de prompts et de récupération — déployé et débogué via le CI/CD d'Azure DevOps.",
      ],
    },
    "exp-beats-by-dre": {
      role: "Externe - Connaissance client et analyse de données, Beats by Dre",
      location: "Nairobi, Kenya | sept. 2024 - oct. 2024",
      bullets: [
        "J'ai amélioré de 15 % l'efficacité du marketing ciblé en traduisant des questions business ambiguës en insights structurés et fondés sur des indicateurs — analyse du comportement client et de la segmentation du marché avec Python et Tableau.",
        "J'ai permis aux parties prenantes transverses de décider plus vite et plus clairement en transformant des données complexes en recommandations concrètes — présentées dans des tableaux de bord dynamiques.",
        "J'ai amélioré de 20 % l'efficacité de la collecte de données et la qualité de l'analyse en aval en concevant et déployant des enquêtes clients à la logique de questions optimisée.",
      ],
    },
    "exp-upande": {
      role: "Développeuse ERP - Upande",
      location: "Nairobi, Kenya | sept. 2024 - déc. 2024",
      bullets: [
        "J'ai fluidifié les opérations entre services en intégrant des services backend et en automatisant les workflows — mis en œuvre et configuré avec les modules ERPNext.",
        "J'ai amélioré la précision des rapports et l'efficacité opérationnelle en réduisant le traitement manuel d'environ 30 % — grâce à des pipelines d'automatisation.",
      ],
    },
  },
  skills: [
    {
      title: "Gestion de produit",
      items: [
        "Cadrage des problèmes, estimation des opportunités et priorisation liés à des résultats mesurables.",
        "Stratégie produit et feuille de route ancrées dans les besoins des utilisateurs et les contraintes business.",
        "Transforme des besoins ambigus en plans clairs que les équipes peuvent exécuter.",
      ],
    },
    {
      title: "Agilité et livraison",
      items: [
        "User stories, gestion du backlog, planification de sprints, stand-ups et rétrospectives.",
        "Itération rapide du prototype au livrable testé, avec des délais serrés.",
        "Exécution transverse avec l'ingénierie, le design et le business.",
      ],
    },
    {
      title: "Analyse de données et expérimentation",
      items: [
        "Analyses SQL et Python pour le suivi des KPI, le diagnostic de performance et l'aide à la décision.",
        "Tests A/B et conception d'expériences avec des indicateurs de réussite clairs et une analyse des compromis.",
        "Tableaux de bord et storytelling chiffré pour la visibilité opérationnelle et produit.",
      ],
    },
    {
      title: "Communication avec les parties prenantes",
      items: [
        "Traduit les contraintes techniques en langage business clair pour les décideurs.",
        "Aligne les équipes sur les objectifs, les risques, les délais et des critères de réussite mesurables.",
        "Favorise la collaboration entre produit, ingénierie et opérations.",
      ],
    },
    {
      title: "IA et systèmes produit",
      items: [
        "Conception et optimisation de modèles de prompts (Jinja) pour des workflows LLM en production.",
        "Création et évaluation de pipelines RAG avec ChromaDB et sentence-transformers.",
        "Création de systèmes agentiques de bout en bout avec des backends FastAPI et des patterns de tool calling.",
        "Intégration d'API basées sur des LLM dans des systèmes d'entreprise, avec sorties structurées et validation des résultats.",
      ],
    },
  ],
  education: [
    {
      title: "Certificat d'études supérieures - Intelligence artificielle et apprentissage automatique (coop)",
      detail: "Fanshawe College, London, Canada | janv. 2025 - aujourd'hui",
    },
    { title: "Licence - Informatique et sciences informatiques", detail: "Strathmore University, Nairobi, Kenya | avr. 2020 - juil. 2023" },
    { title: "Diplôme - Technologies de l'information appliquées à l'entreprise", detail: "Strathmore University, Nairobi, Kenya | janv. 2019 - sept. 2021" },
    { title: "Certification professionnelle", detail: "Data Analyst with Python and SQL, DataCamp (2024)" },
  ],
  arcade: {
    roles: { data_analyst: "Analyste de données", ml_engineer: "Ingénieur ML", product_analytics: "Analytique produit" },
    difficulties: { easy: "Facile", medium: "Moyen", hard: "Difficile" },
    xp: "XP",
    streak: "Série",
    timer: "Chrono",
    question: "Question",
    rubric: "Grille idéale",
    needHint: "Un indice",
    nailedIt: "J'ai assuré",
    skip: "Passer",
    newChallenge: "Nouveau défi",
    start: "Lance la manche, réponds à voix haute, puis note-toi honnêtement.",
    timeUp: "Temps écoulé. Prends un indice, puis tente un autre défi.",
    noHints: "Pas encore d'indice pour cette question.",
    hint: (h) => `Indice : ${h}`,
    strongRun: (e, b, s, k) => `Belle manche ! +${e} XP (${b} base, ${s} vitesse, ${k} série).`,
    skipped: "Passé. Série remise à zéro. Nouveau défi chargé.",
    newRound: "Nouvelle manche chargée. Dis ta réponse à voix haute, puis note-toi.",
    difficultySet: (_k, label) => `Difficulté : ${label}.`,
    data: {
      data_analyst: [
        {
          question: "Le tableau de bord de churn s'envole pour une cohorte. Quel est ton plan d'enquête pour les 30 premières minutes ?",
          rubric: [
            "Confirme la définition de l'indicateur et la fraîcheur des données.",
            "Découpe le problème par segment et par étape du funnel.",
            "Propose une prochaine action concrète aux parties prenantes.",
          ],
          hints: ["Commence par vérifier la fiabilité des données.", "Compare avec la référence de la semaine précédente.", "Isole d'abord par canal d'acquisition."],
        },
        {
          question: "Conçois une vue KPI qu'un manager non technique peut utiliser en 60 secondes.",
          rubric: ["Choisit un KPI principal clair et une tendance de soutien.", "Utilise des seuils ou des alertes pour décider vite.", "Ajoute une action recommandée selon le signal."],
          hints: ["La clarté l'emporte sur la complexité.", "Utilise des libellés simples.", "Un KPI, une décision."],
        },
      ],
      ml_engineer: [
        {
          question: "Comment évaluerais-tu un coach d'entretien RAG au-delà de la précision du modèle ?",
          rubric: [
            "Sépare la qualité de la récupération de celle de la génération.",
            "Définit des contrôles d'ancrage et d'hallucination.",
            "Inclut une boucle de revue humaine et une taxonomie des échecs.",
          ],
          hints: ["Mesure la récupération et la réponse séparément.", "Utilise une grille, pas un seul score.", "Suis les types d'échec dans le temps."],
        },
        {
          question: "La latence de ton RAG se dégrade après l'ajout de fonctionnalités. Qu'optimises-tu en premier ?",
          rubric: [
            "Profile le pipeline pour trouver le vrai goulot d'étranglement.",
            "Arbitre entre cache et profondeur de récupération.",
            "Protège la qualité des réponses avec des tests de régression.",
          ],
          hints: ["Profile avant d'optimiser.", "Vérifie d'abord le chemin embeddings/récupération.", "Préserve la qualité en réduisant la latence."],
        },
      ],
      product_analytics: [
        {
          question: "Une fonctionnalité augmente l'engagement mais baisse la conversion. Quelle recommandation livres-tu ?",
          rubric: [
            "Présente les compromis par segment d'utilisateurs et impact sur le funnel.",
            "Relie la recommandation aux objectifs produit.",
            "Définit une expérience de suivi mesurable.",
          ],
          hints: ["Qui y a gagné ? Qui y a perdu ?", "Relie les indicateurs à l'objectif business.", "Livre avec des garde-fous et un plan de test."],
        },
        {
          question: "Comment priorises-tu la feuille de route quand les retours d'entretiens se contredisent ?",
          rubric: ["Regroupe les retours par persona et par impact.", "Raisonne effort/impact en toute transparence.", "Transforme les priorités en plan par jalons."],
          hints: ["Regroupe les retours avant de classer.", "D'abord l'impact, ensuite l'effort.", "Définis à quoi ressemble la réussite."],
        },
      ],
    },
  },
};
