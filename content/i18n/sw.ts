import type { Dict } from "./types";

export const sw: Dict = {
  lang: "sw",
  htmlLang: "sw",
  speechLang: "sw-KE",
  nativeName: "Kiswahili",
  splitChars: true,
  hero: {
    hello: "Habari",
    im: "Mimi ni",
    kicker: "BIDHAA · MJENZI WA AI · ANAZINGATIA MTEJA",
    summary: "Mjenzi wa Bidhaa na AI — ninatengeneza vitu vinavyotatua matatizo halisi na kupima kama vimefanya kazi.",
    sub: "Ninalenga nafasi za usimamizi wa bidhaa, mikakati na AI ambapo ninaweza kushughulikia matatizo magumu, kukamilisha haraka na kuendelea kujifunza.",
  },
  about: {
    heading: "Kunihusu",
    paragraphs: [
      "Ninatambua matatizo, ninajenga suluhisho, na ninapima kama yalifanya kazi. Uzoefu wangu unahusisha uhandisi wa AI, utoaji wa bidhaa na uchambuzi wa data — ninatumia vyote vitatu kutengeneza vitu vinavyoleta mabadiliko ya kweli. Kazi yangu inajumuisha uhandisi wa prompt, mifumo ya urejeshaji taarifa, API za backend na usambazaji wa kiwango cha biashara kubwa.",
      "Ninafurahia kubadilisha vikwazo visivyo wazi vya bidhaa na sera kuwa mifumo inayoweza kutumika ambayo timu zinaweza kuiamini.",
    ],
    focusLabel: "Lengo:",
    focusText: "kutoa mifumo ya kazi ya AI inayotegemewa inayoboresha shughuli halisi, si maonyesho tu.",
    imageAnchors: ["ninajenga suluhisho,", "na ninapima kama yalifanya kazi."],
  },
  sections: {
    proof: "Kasi na Ushahidi wa Mafanikio",
    projects: "Miradi Teule",
    experience: "Uzoefu",
    skills: "Ujuzi",
    education: "Elimu na Vyeti",
    substack: "Lipgloss & LLMS",
    substackIntro: "Makala teule kutoka Substack yangu kuhusu dhana za AI kwa vitendo na fikra za ulimwengu halisi.",
    substackStatus: "Machapisho ya hivi karibuni, yanasawazishwa kiotomatiki kutoka Lipgloss & LLMS.",
    substackEmpty: "Bado hakuna machapisho — rudi hivi karibuni.",
    substackError: "Hatukuweza kupakia machapisho ya Substack kwa sasa. Tafadhali rudi hivi karibuni.",
    substackCta: "Tembelea Lipgloss & LLMs",
    arcade: "Arcade ya Mahojiano",
    arcadeIntro: "Chagua nafasi + ugumu, shinda saa, jenga mfululizo, na ujifunze kama mchezo wa mahojiano.",
    contact: "Tuungane",
  },
  nav: { projects: "Miradi", about: "Kunihusu", experience: "Uzoefu", substack: "Substack", resume: "Wasifu", contact: "Mawasiliano" },
  ui: {
    role: "Mjenzi wa Bidhaa na AI",
    city: "Toronto",
    scroll: "Sogeza",
    email: "Barua pepe",
    backToTop: "Rudi juu ↑",
    downloadPdf: "Pakua PDF",
    home: "Nyumbani",
    next: "Inayofuata",
    openMenu: "Fungua menyu",
    closeMenu: "Funga menyu",
    previousPosts: "Machapisho yaliyotangulia",
    nextPosts: "Machapisho yanayofuata",
    details: "maelezo",
    toolsTopics: "Zana na mada",
    skip: "Ruka hadi maudhui",
    settings: "Mapendeleo",
    language: "Lugha",
    theme: "Mandhari",
    system: "Mfumo",
    light: "Mwanga",
    dark: "Giza",
    accessibility: "Ufikivu",
    accessibilityHint: "Maandishi makubwa yenye utofautishaji mkubwa, bila michoro inayosonga, maelezo ya picha na kusomewa kwa sauti.",
    on: "Imewashwa",
    off: "Imezimwa",
    readAloud: "Soma kwa sauti",
    pause: "Sitisha",
    resume: "Endelea",
    stop: "Simamisha",
    noVoice: "Hakuna sauti ya lugha hii kwenye kifaa hiki — sauti ya kawaida inatumika.",
    noSpeech: "Kivinjari hiki hakitumii kipengele cha kusoma kwa sauti.",
    image: "Picha:",
    noTimeLimit: "Hakuna kikomo cha muda",
  },
  alt: {
    portrait: "Tatyana Amugo kwenye mkutano, akiwa amevaa blauzi ya kahawia, sketi ya bluu iliyokolea na beji ya jina lake.",
    ona: "Programu ya wavuti ya ONA, inayowasilisha ufahamu wa mazingira uliobuniwa upya kwa watu wenye ulemavu wa kuona.",
    shipping: "Mfano wa Msaidizi wa Kuweka Usafirishaji ukiwauliza wafanyabiashara “Unauza nini?”",
  },
  proof: [
    "Miradi mikuu ya AI iliyokamilishwa",
    "Kupungua kwa kazi za mikono katika mifumo ya AI (%)",
    "Ongezeko la ufanisi wa masoko kutokana na uchambuzi (%)",
    "Athari ya uendeshaji otomatiki wa mifumo ya ERP (%)",
  ],
  projects: {
    "shipping-setup-assistant": {
      title: "Mfano wa Msaidizi wa Kuweka Usafirishaji (Zoezi la Mtindo wa Shopify)",
      description:
        "Mfano mdogo niliouunda kutokana na zoezi la Shopify kuhusu kuweka mipangilio ya usafirishaji. Tatizo: wafanyabiashara wengi huacha mipangilio kabla ya kumaliza wanapokutana na istilahi za usafirishaji wasizozifahamu. Suluhisho langu: msaidizi anayeongoza ambaye huuliza maswali mawili kwa lugha rahisi na kuweka mtiririko wa mipangilio kiotomatiki. Uliundwa na kuchapishwa kama mfano shirikishi kwenye Netlify.",
      meta: [],
      tags: ["Usimamizi wa Bidhaa", "UX", "Mfano", "Fikra za Huduma Hai"],
      badge: "Teule",
      links: ["Tazama mfano"],
    },
    "ona-assistive-ai": {
      title: "ONA - Mfumo wa AI Saidizi (Mshindi wa Pili: Athari Bora)",
      description:
        "Niliongoza timu ya taaluma mbalimbali kubuni mfumo saidizi unaotumia AI unaowasaidia watu wenye ulemavu wa kuona na wagonjwa wa shida ya akili (dementia) kwa ufahamu wa mazingira na kuimarisha kumbukumbu.",
      meta: [
        { label: "Athari", text: "Ulitambuliwa kama mshindi wa pili katika Athari Bora kwa matumizi yake halisi na uwazi wa suluhisho." },
        {
          label: "",
          text: "Nilibainisha usanifu wa mfumo na mkakati wa kuthibitisha na watumiaji, nikigeuza changamoto zisizo wazi zinazomhusu binadamu kuwa mifumo ya kazi ya AI inayoweza kutumika.",
        },
        {
          label: "Ndani ya Mfumo",
          text: "Mfumo unaotumia PyTorch huendesha YOLOv26 kutambua vitu na vizuizi papo hapo pamoja na MiDaS kukadiria umbali kwa kamera moja, hivyo mfumo hujua kilicho karibu na umbali wake. FriendNet, modeli iliyofunzwa mahususi, hutambua nyuso zinazojulikana ili kuimarisha kumbukumbu kwa wagonjwa wa shida ya akili. Gemini hubadilisha utambuzi huo kuwa maelezo ya mandhari na mwongozo kwa lugha ya kawaida, Argos Translate huwezesha matokeo ya lugha nyingi bila mtandao kabisa, na Piper TTS husoma matokeo kwa sauti kwa ufikivu bila kutumia mikono wala skrini.",
        },
      ],
      tags: ["YOLOv26", "MiDaS", "PyTorch", "Gemini", "Argos Translate", "Piper TTS", "FriendNet (modeli maalum)"],
      badge: "Mradi wa Mwisho",
      links: ["Tazama video ya onyesho", "Onyesho hai"],
    },
    "rag-interview-prep": {
      title: "Mfumo wa Maandalizi ya Mahojiano Unaotumia RAG",
      description:
        "Ninajenga mfumo kamili wa LLM + RAG unaorejesha maarifa mahususi ya kila nafasi na kutengeneza mazoezi ya mahojiano yaliyopangwa pamoja na mrejesho.",
      meta: [
        {
          label: "Lengo",
          text: "Violezo vya prompt, mifumo ya urejeshaji na mantiki ya kuthibitisha majibu ili kuboresha umuhimu wa matokeo na kupunguza majibu ya kubuni (hallucinations).",
        },
      ],
      tags: ["RAG", "Uhandisi wa Prompt", "ChromaDB", "FastAPI", "Mantiki ya Uthibitishaji"],
      links: ["Tazama README", "Hazina ya GitHub"],
    },
    "anomaly-detection": {
      title: "Mfumo wa Kugundua Hitilafu (Mradi wa Ngazi ya Uzamili)",
      description: "Niliunda na kulinganisha modeli za PaDiM, SPADE na CLIP kwa kutumia PyTorch na OpenCV kugundua hitilafu kwenye video.",
      meta: [
        {
          label: "",
          text: "Niliboresha mifumo ya uchakataji wa awali na ubashiri ili ifanye vizuri zaidi kwenye seti halisi za data, na nikachapisha onyesho shirikishi lenye michoro ya Grad-CAM.",
        },
      ],
      tags: ["PyTorch", "OpenCV", "PaDiM", "SPADE", "CLIP"],
      links: ["Onyesho hai"],
    },
  },
  experience: {
    "exp-ai-engineer": {
      role: "Mhandisi wa AI (Co-op) - Ontario Public Service",
      location: "Toronto, Kanada | Januari 2026 - Aprili 2026",
      bullets: [
        "Niliwezesha maamuzi ya ukaguzi wa kesi yanayosaidiwa na AI, yanayotegemewa na yaliyopangwa, katika mfumo wa usimamizi wa kesi wa SAMS kwa kuthibitisha usahihi wa majibu ya modeli — kwa kutumia violezo vya prompt vya Jinja kwa mifumo ya LLM ya uzalishaji.",
        "Nilipunguza mzigo wa uchakataji wa kesi kwa mikono kwa takriban 79% katika mazingira ya serikali yanayodhibitiwa kwa kujenga API salama za RESTful na tabaka za uratibu wa backend kwa mifumo ya maamuzi ya kiwakala inayosaidiwa na AI.",
        "Niliboresha uthabiti wa muunganisho wa LLM na maelewano na wadau kwa kuweka vipimo vya mafanikio vinavyopimika na kuboresha muundo wa mfumo wa prompt/urejeshaji — ulichapishwa na kurekebishwa kupitia CI/CD ya Azure DevOps.",
      ],
    },
    "exp-beats-by-dre": {
      role: "Mwanafunzi wa Mafunzo (Extern) - Maarifa ya Wateja na Uchambuzi wa Data, Beats by Dre",
      location: "Nairobi, Kenya | Septemba 2024 - Oktoba 2024",
      bullets: [
        "Niliboresha ufanisi wa masoko yaliyolengwa kwa 15% kwa kugeuza maswali ya biashara yasiyo wazi kuwa maarifa yaliyopangwa yanayotegemea vipimo — nilichambua tabia za wateja na mgawanyo wa soko kwa Python na Tableau.",
        "Niliwezesha maamuzi ya haraka na yaliyo wazi zaidi kwa wadau wa idara mbalimbali kwa kufupisha data changamano kuwa mapendekezo yanayotekelezeka — yaliyowasilishwa kupitia dashibodi zinazobadilika.",
        "Niliboresha ufanisi wa ukusanyaji wa data na ubora wa uchambuzi unaofuata kwa 20% kwa kubuni na kusambaza tafiti za wateja zenye mantiki bora ya maswali.",
      ],
    },
    "exp-upande": {
      role: "Msanidi wa ERP - Upande",
      location: "Nairobi, Kenya | Septemba 2024 - Desemba 2024",
      bullets: [
        "Nilirahisisha shughuli kati ya idara kwa kuunganisha huduma za backend na kuendesha mifumo ya kazi kiotomatiki — kwa kutumia moduli za ERPNext.",
        "Niliboresha usahihi wa ripoti na ufanisi wa uendeshaji kwa kupunguza uchakataji wa mikono kwa takriban 30% — kwa kujenga mifumo ya uendeshaji otomatiki.",
      ],
    },
  },
  skills: [
    {
      title: "Usimamizi wa Bidhaa",
      items: [
        "Kufafanua matatizo, kukadiria fursa na kuweka vipaumbele kulingana na matokeo yanayopimika.",
        "Mkakati wa bidhaa na ramani ya maendeleo inayotokana na mahitaji ya watumiaji na vikwazo vya biashara.",
        "Hugeuza mahitaji yasiyo wazi kuwa mipango iliyo wazi ambayo timu zinaweza kutekeleza.",
      ],
    },
    {
      title: "Agile na Utoaji",
      items: [
        "Hadithi za watumiaji, usimamizi wa backlog, upangaji wa sprint, mikutano ya kila siku na tathmini za baadaye.",
        "Kuboresha haraka kutoka mfano hadi kazi iliyojaribiwa ndani ya muda mfupi.",
        "Utekelezaji wa pamoja na wadau wa uhandisi, usanifu na biashara.",
      ],
    },
    {
      title: "Uchambuzi wa Data na Majaribio",
      items: [
        "Uchambuzi wa SQL na Python kwa kufuatilia KPI, kuchunguza utendaji na kusaidia maamuzi.",
        "Majaribio ya A/B na usanifu wa majaribio yenye vipimo vya mafanikio vilivyo wazi na uchambuzi wa faida na hasara.",
        "Dashibodi na usimulizi kwa vipimo kwa uwazi wa uendeshaji na bidhaa.",
      ],
    },
    {
      title: "Mawasiliano na Wadau",
      items: [
        "Hufafanua vikwazo vya kiufundi kwa lugha ya biashara iliyo wazi kwa wafanya maamuzi.",
        "Huunganisha timu kuhusu malengo, hatari, muda na fasili zinazopimika za mafanikio.",
        "Huchochea ushirikiano kati ya wadau wa bidhaa, uhandisi na uendeshaji.",
      ],
    },
    {
      title: "AI na Mifumo ya Bidhaa",
      items: [
        "Nilibuni na kuboresha violezo vya prompt (Jinja) kwa mifumo ya LLM ya uzalishaji.",
        "Nilijenga na kutathmini mifumo ya RAG kwa ChromaDB na sentence-transformers.",
        "Nilijenga mifumo kamili ya kiwakala yenye backend za FastAPI na mbinu za tool-calling.",
        "Niliunganisha API zinazotumia LLM kwenye mifumo ya biashara kwa matokeo yaliyopangwa na uthibitishaji wa matokeo.",
      ],
    },
  ],
  education: [
    { title: "Cheti cha Uzamili - Akili Bandia na Ujifunzaji wa Mashine (Co-op)", detail: "Fanshawe College, London, Kanada | Januari 2025 - Sasa" },
    { title: "Shahada ya Kwanza - Informatiki na Sayansi ya Kompyuta", detail: "Strathmore University, Nairobi, Kenya | Aprili 2020 - Julai 2023" },
    { title: "Stashahada - Teknolojia ya Habari ya Biashara", detail: "Strathmore University, Nairobi, Kenya | Januari 2019 - Septemba 2021" },
    { title: "Cheti cha Kitaaluma", detail: "Data Analyst with Python and SQL, DataCamp (2024)" },
  ],
  arcade: {
    roles: { data_analyst: "Mchambuzi wa Data", ml_engineer: "Mhandisi wa ML", product_analytics: "Uchambuzi wa Bidhaa" },
    difficulties: { easy: "Rahisi", medium: "Wastani", hard: "Ngumu" },
    xp: "XP",
    streak: "Mfululizo",
    timer: "Saa",
    question: "Swali",
    rubric: "Vigezo Bora",
    needHint: "Nahitaji Dokezo",
    nailedIt: "Nimeweza",
    skip: "Ruka",
    newChallenge: "Changamoto Mpya",
    start: "Anza raundi, jibu kwa sauti, kisha jipe alama kwa uaminifu.",
    timeUp: "Muda umeisha. Chukua dokezo, kisha jaribu changamoto nyingine.",
    noHints: "Bado hakuna dokezo kwa swali hili.",
    hint: (h) => `Dokezo: ${h}`,
    strongRun: (e, b, s, k) => `Safi sana! +${e} XP (${b} msingi, ${s} kasi, ${k} mfululizo).`,
    skipped: "Umeruka. Mfululizo umeanza upya. Changamoto mpya imepakiwa.",
    newRound: "Raundi mpya imepakiwa. Sema jibu lako kwa sauti, kisha jipe alama.",
    difficultySet: (_k, label) => `Ugumu: ${label}.`,
    data: {
      data_analyst: [
        {
          question: "Dashibodi ya wateja wanaoondoka (churn) imepanda ghafla kwa kundi moja. Mpango wako wa uchunguzi wa dakika 30 za kwanza ni upi?",
          rubric: ["Huthibitisha fasili ya kipimo na upya wa data.", "Hugawa tatizo kwa kundi na hatua ya funnel.", "Hupendekeza hatua moja mahususi inayofuata kwa wadau."],
          hints: ["Anza kwa kukagua uaminifu wa data.", "Linganisha na kiwango cha wiki iliyopita.", "Tenga kwanza kwa njia ya kupata wateja."],
        },
        {
          question: "Buni mwonekano wa KPI ambao meneja asiye wa kiufundi anaweza kuutumia ndani ya sekunde 60.",
          rubric: ["Huchagua KPI kuu iliyo wazi na mwenendo unaounga mkono.", "Hutumia viwango au tahadhari kwa maamuzi ya haraka.", "Huongeza hatua moja inayopendekezwa kulingana na ishara."],
          hints: ["Uwazi ni bora kuliko ugumu wa dashibodi.", "Tumia lebo za lugha rahisi.", "KPI moja, uamuzi mmoja."],
        },
      ],
      ml_engineer: [
        {
          question: "Ungetathmini vipi kocha wa mahojiano wa RAG zaidi ya usahihi wa modeli?",
          rubric: [
            "Hutenganisha ubora wa urejeshaji na ubora wa utengenezaji wa majibu.",
            "Hufafanua ukaguzi wa msingi wa ukweli na majibu ya kubuni.",
            "Hujumuisha mzunguko wa ukaguzi wa binadamu na uainishaji wa makosa.",
          ],
          hints: ["Pima urejeshaji na jibu kando kando.", "Tumia vigezo, si alama moja tu.", "Fuatilia aina za makosa kwa muda."],
        },
        {
          question: "Kasi ya RAG yako imeshuka baada ya kuongeza vipengele. Unaboresha nini kwanza?",
          rubric: [
            "Huchunguza mfumo kubaini kizuizi halisi.",
            "Husawazisha uhifadhi wa muda (cache) na kina cha urejeshaji.",
            "Hulinda ubora wa majibu kwa majaribio ya kurudi nyuma (regression).",
          ],
          hints: ["Chunguza kabla ya kuboresha.", "Kagua kwanza njia ya embedding/urejeshaji.", "Linda ubora huku ukipunguza muda wa kusubiri."],
        },
      ],
      product_analytics: [
        {
          question: "Kipengele kinaongeza ushiriki lakini kinapunguza ubadilishaji. Utatoa pendekezo gani?",
          rubric: [
            "Hueleza faida na hasara kwa kundi la watumiaji na athari kwenye funnel.",
            "Huunganisha pendekezo na malengo ya bidhaa.",
            "Hufafanua jaribio la ufuatiliaji linalopimika.",
          ],
          hints: ["Nani alinufaika? Nani alipoteza?", "Unganisha vipimo na lengo la biashara.", "Toa ukiwa na kinga na mpango wa majaribio."],
        },
        {
          question: "Unapangaje vipaumbele vya ramani ya bidhaa wakati mrejesho wa mahojiano unapingana?",
          rubric: ["Hupanga mrejesho kwa aina ya mtumiaji na athari.", "Hutumia hoja ya juhudi/athari kwa uwazi.", "Hubadilisha vipaumbele kuwa mpango wa hatua kuu."],
          hints: ["Panga mrejesho kabla ya kuorodhesha.", "Athari kwanza, kisha juhudi.", "Fafanua mafanikio yanavyoonekana."],
        },
      ],
    },
  },
};
