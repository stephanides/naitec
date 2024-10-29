export const BUNNY_CDN_URL = 'https://naitec.b-cdn.net';

const LINEAR_GRADIENTS = {
  sensitive:
    'linear-gradient(135deg, rgba(63,52,95,1) 0%, rgba(169,108,197,1) 100%)',
  smart:
    'linear-gradient(135deg, rgba(68,95,52,1) 0%, rgba(153,197,108,1) 100%)',
  onyx: 'linear-gradient(135deg, rgba(93,93,93,1) 0%, rgba(189,189,189,1) 100%)',
  stellair:
    'linear-gradient(135deg, rgba(52,79,95,1) 0%, rgba(108,165,197,1) 100%)',
  sensitive_pro:
    'linear-gradient(135deg, rgba(117,29,29,1) 0%, rgba(220,79,79,1) 100%)',
};

export const INTERNAL_ROUTES = {
  HOME: '/',
  SUPPORT: '/support',
  WHERE_TO_BUY: '/where-to-buy',
  CONTACT: '/contact',
  STELLAIR: '/stellair',
  SENSITIVE_PRO: '/sensitive-pro',
  SENSITIVE: '/sensitive',
  ONYX: '/onyx',
  SMART: '/smart',
  LISA: '/lisa',
  FIREPLACE_DIFFUSER: '/fireplace-diffuser',
  STELLAIR_SUPPORT: '/support/stellair',
  SENSITIVE_PRO_SUPPORT: '/support/sensitive-pro',
  SENSITIVE_SUPPORT: '/support/sensitive',
  ONYX_SUPPORT: '/support/onyx',
  SMART_SUPPORT: '/support/smart',
  LISA_SUPPORT: '/support/lisa',
  FIREPLACE_DIFFUSER_SUPPORT: '/support/fireplace-diffuser',
};

export const EXTERNAL_ROUTES = {
  IOS: 'https://apps.apple.com/us/app/ac-freedom/id988314711',
  ANDROID:
    'https://play.google.com/store/apps/details?id=com.broadlink.acfreedom',
};

export const EMAILS = {
  CONTACT: 'info@naitec.sk',
};

export const PHONE_NUMBERS = {
  CONTACT_SK: '+421 905 554 553',
  CONTACT_HU: '+421 918 807 856',
  CONTACT_AT: '+43 664 99725039',
};

export type PRODUCT_TYPE = 'air_conditioners' | 'accessories' | 'household';

export type DOCUMENT_TYPE = 'document' | 'video';

export type Product = {
  title: string;
  type: PRODUCT_TYPE;
  mainImage: string;
  supportImage: string;
  href: string;
  color?: string;
  supportDocuments?: {
    title: string;
    items: {
      title: string;
      href: string;
      type: DOCUMENT_TYPE;
      date: string;
      size?: string;
    }[];
  }[];
};

export const PRODUCTS = [
  {
    id: 'stellair',
    title: 'Stellair',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/stellair/stellair-main.png`,
    supportImage: `${BUNNY_CDN_URL}/support/stellair-support.png`,
    href: INTERNAL_ROUTES.STELLAIR_SUPPORT,
    color: LINEAR_GRADIENTS.stellair,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/stellair-sensitive-remote-controller-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '918 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/stellair-sensitive-remote-controller-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '537 Kb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/naitec-wifi-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '11.8 Mb',
          },
        ],
      },
    ],
  },
  {
    id: 'sensitive',
    title: 'Sensitive',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/sensitive/sensitive-main.png`,
    supportImage: `${BUNNY_CDN_URL}/support/sensitive-support.png`,
    href: INTERNAL_ROUTES.SENSITIVE_SUPPORT,
    color: LINEAR_GRADIENTS.sensitive,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/stellair-sensitive-remote-controller-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '918 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/stellair-sensitive-remote-controller-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '537 Kb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/naitec-wifi-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '11.8 Mb',
          },
        ],
      },
    ],
  },
  {
    id: 'smart',
    title: 'Smart',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/smart/smart-main.png`,
    supportImage: `${BUNNY_CDN_URL}/support/smart-support.png`,
    href: INTERNAL_ROUTES.SMART_SUPPORT,
    color: LINEAR_GRADIENTS.smart,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/stellair-sensitive-remote-controller-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '918 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/stellair-sensitive-remote-controller-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '537 Kb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/naitec-wifi-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '11.8 Mb',
          },
        ],
      },
    ],
  },
  {
    id: 'onyx',
    title: 'Onyx',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/onyx/onyx-main.png`,
    supportImage: `${BUNNY_CDN_URL}/support/onyx-support.png`,
    href: INTERNAL_ROUTES.ONYX_SUPPORT,
    color: LINEAR_GRADIENTS.onyx,
    supportDocuments: [
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/naitec-wifi-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '11.8 Mb',
          },
        ],
      },
    ],
  },
  {
    id: 'sensitive-pro',
    title: 'Sensitive Pro',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-main.png`,
    supportImage: `${BUNNY_CDN_URL}/support/sensitive-pro-support.png`,
    href: INTERNAL_ROUTES.SENSITIVE_PRO_SUPPORT,
    color: LINEAR_GRADIENTS.sensitive_pro,
    supportDocuments: [
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/naitec-wifi-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '11.8 Mb',
          },
        ],
      },
    ],
  },
  {
    id: 'fireplace-diffuser',
    title: 'fireplace',
    type: 'household' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/fireplace/fireplace-main.png`,
    supportImage: `${BUNNY_CDN_URL}/support/fireplace-support.png`,
    href: INTERNAL_ROUTES.FIREPLACE_DIFFUSER_SUPPORT,
    supportDocuments: [],
  },
  {
    id: 'lisa',
    title: 'Lisa',
    type: 'accessories' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/lisa/lisa-main.png`,
    supportImage: `${BUNNY_CDN_URL}/support/lisa-support.png`,
    href: INTERNAL_ROUTES.LISA_SUPPORT,
    supportDocuments: [],
  },
];

export const BASE_URL = 'https://www.naitec.ai';

export const SEO_CONTENT = {
  home: {
    title: {
      sk: 'Naitec - Vytvorené pre budúcnosť, dostupné už dnes | Naitec',
      cz: 'Naitec - Vytvořeno pro budoucnost, dostupné již dnes | Naitec',
      en: 'Naitec - Created for the Future, Available Today | Naitec',
      hu: 'Naitec - A jövőre készítve, már ma elérhető | Naitec',
      pl: 'Naitec - Stworzony na przyszłość, dostępny już dziś | Naitec',
      de: 'Naitec - Für die Zukunft geschaffen, schon heute verfügbar | Naitec',
      ja: 'Naitec - 未来のために作られた、今日利用可能 | Naitec',
    },
    description: {
      sk: 'Objavte svet inovatívnych klimatizácií a pokročilých technológií Naitec, ktoré prinášajú komfort a efektivitu do vášho domova.',
      cz: 'Objevte svět inovativních klimatizací a pokročilých technologií Naitec, které přinášejí komfort a efektivitu do vašeho domova.',
      en: 'Discover the world of innovative air conditioning and advanced Naitec technologies that bring comfort and efficiency to your home.',
      hu: 'Fedezze fel az innovatív Naitec klímaberendezések és fejlett technológiák világát, amelyek kényelmet és hatékonyságot hoznak otthonába.',
      pl: 'Odkryj świat innowacyjnych klimatyzatorów i zaawansowanych technologii Naitec, które zapewniają komfort i efektywność w Twoim domu.',
      de: 'Entdecken Sie die Welt der innovativen Klimaanlagen und fortschrittlichen Naitec-Technologien, die Komfort und Effizienz in Ihr Zuhause bringen.',
      ja: '革新的な空調システムと高度なNaitec技術の世界を発見し、快適さと効率性をあなたの家に届けます。',
    },
  },
  stellair: {
    title: {
      sk: 'Klimatizácia Naitec Stellair | Naitec New AI Technology',
      cz: 'Klimatizace Naitec Stellair | Naitec Nová AI Technologie',
      en: 'Naitec Stellair Air Conditioning | Naitec New AI Technology',
      hu: 'Naitec Stellair Klíma | Naitec Új AI Technológia',
      pl: 'Klimatyzacja Naitec Stellair | Naitec Nowa Technologia AI',
      de: 'Naitec Stellair Klimaanlage | Naitec Neue KI-Technologie',
      ja: 'Naitec Stellair 空調 | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Vstupte do ríše dokonalej klímy. Hviezdny zážitok čerstvého vzduchu z vonku, očisteného od mikronečistôt a alergénov, príjemne vychladeného na mieru vašim túžbam.',
      cz: 'Vstupte do říše dokonalé klímy. Hvězdný zážitek čerstvého vzduchu zvenku, očištěného od mikronečistot a alergenů, příjemně ochlazeného na míru vašim touhám.',
      en: 'Enter the realm of perfect climate. A stellar experience of fresh outdoor air, purified from micro-impurities and allergens, pleasantly cooled to your desires.',
      hu: 'Lépjen be a tökéletes klíma birodalmába. Csillagfényes élmény a külső friss levegővel, megtisztítva a mikroszennyeződésektől és allergénektől, kellemesen hűtve az Ön igényeihez.',
      pl: 'Wejdź do królestwa idealnego klimatu. Gwiazdorskie doświadczenie świeżego powietrza z zewnątrz, oczyszczonego z mikro zanieczyszczeń i alergenów, przyjemnie schłodzonego do Twoich pragnień.',
      de: 'Treten Sie in das Reich des perfekten Klimas ein. Ein himmlisches Erlebnis von frischer Außenluft, gereinigt von Mikroverunreinigungen und Allergenen, angenehm nach Ihren Wünschen gekühlt.',
      ja: '完璧な気候の領域へようこそ。微細な不純物やアレルゲンが取り除かれた新鮮な外気を、あなたの望みに応じて心地よく冷却します。',
    },
  },
  sensitive: {
    title: {
      sk: 'Klimatizácia Naitec Sensitive | Naitec Nová AI Technológia',
      cz: 'Klimatizace Naitec Sensitive | Naitec Nová AI Technologie',
      en: 'Naitec Sensitive Air Conditioning | Naitec New AI Technology',
      hu: 'Naitec Sensitive Klíma | Naitec Új AI Technológia',
      pl: 'Klimatyzacja Naitec Sensitive | Naitec Nowa Technologia AI',
      de: 'Naitec Sensitive Klimaanlage | Naitec Neue KI-Technologie',
      ja: 'Naitec Sensitive 空調 | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Zažite dokonalý komfort s čistým vzduchom bez prievanu. Rovnomerné chladenie a očistenie od alergénov pre maximálny komfort vo vašom domove.',
      cz: 'Zažijte dokonalý komfort s čistým vzduchem bez průvanu. Rovnoměrné chlazení a odstranění alergenů pro maximální komfort ve vašem domově.',
      en: 'Experience perfect comfort with clean, draft-free air. Even cooling and allergen removal for maximum comfort in your home.',
      hu: 'Tapasztalja meg a tökéletes kényelmet a tiszta, huzatmentes levegővel. Egyenletes hűtés és allergének eltávolítása a maximális kényelemért az otthonában.',
      pl: 'Doświadcz doskonałego komfortu dzięki czystemu, bezprzewodowemu powietrzu. Równomierne chłodzenie i usuwanie alergenów dla maksymalnego komfortu w Twoim domu.',
      de: 'Erleben Sie perfekten Komfort mit sauberer, zugluftfreier Luft. Gleichmäßige Kühlung und Allergenenentfernung für maximalen Komfort in Ihrem Zuhause.',
      ja: '完璧な快適さを清潔でドラフトのない空気で体験してください。均一な冷却とアレルゲンの除去で、あなたの家での最大の快適さを実現します。',
    },
  },
  smart: {
    title: {
      sk: 'Klimatizácia Naitec Smart | Naitec Nová AI Technológia',
      cz: 'Klimatizace Naitec Smart | Naitec Nová AI Technologie',
      en: 'Naitec Smart Air Conditioning | Naitec New AI Technology',
      hu: 'Naitec Smart Klíma | Naitec Új AI Technológia',
      pl: 'Klimatyzacja Naitec Smart | Naitec Nowa Technologia AI',
      de: 'Naitec Smart Klimaanlage | Naitec Neue KI-Technologie',
      ja: 'Naitec Smart 空調 | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Moderný dizajn, vysoká účinnosť a vykurovanie až do -25 °C. Wi-Fi ovládanie pre komfort a pohodlie po celý rok.',
      cz: 'Moderní design, vysoká účinnost a topení až do -25 °C. Wi-Fi ovládání pro komfort a pohodlí po celý rok.',
      en: 'Modern design, high efficiency, and heating down to -25 °C. Wi-Fi control for comfort and convenience all year round.',
      hu: 'Modern dizájn, magas hatékonyság és fűtés akár -25 °C-ig. Wi-Fi vezérlés a kényelem és a komfort érdekében egész évben.',
      pl: 'Nowoczesny design, wysoka wydajność i ogrzewanie do -25 °C. Sterowanie Wi-Fi dla komfortu i wygody przez cały rok.',
      de: 'Modernes Design, hohe Effizienz und Heizung bis -25 °C. WLAN-Steuerung für Komfort und Bequemlichkeit das ganze Jahr über.',
      ja: 'モダンなデザイン、高効率、-25 °Cまでの暖房。年間を通して快適さと便利さを提供するWi-Fiコントロール。',
    },
  },
  onyx: {
    title: {
      sk: 'Klimatizácia Naitec Onyx | Naitec Nová AI Technológia',
      cz: 'Klimatizace Naitec Onyx | Naitec Nová AI Technologie',
      en: 'Naitec Onyx Air Conditioning | Naitec New AI Technology',
      hu: 'Naitec Onyx Klíma | Naitec Új AI Technológia',
      pl: 'Klimatyzacja Naitec Onyx | Naitec Nowa Technologia AI',
      de: 'Naitec Onyx Klimaanlage | Naitec Neue KI-Technologie',
      ja: 'Naitec Onyx 空調 | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Štýlový čierny dizajn a špičkový výkon. Tiché chladenie a vykurovanie do -25 °C pre elegantný komfort v každom ročnom období.',
      cz: 'Stylový černý design a špičkový výkon. Tichý chlazení a topení až do -25 °C pro elegantní komfort v každém ročním období.',
      en: 'Stylish black design and top performance. Quiet cooling and heating down to -25 °C for elegant comfort in every season.',
      hu: 'Stílusos fekete dizájn és csúcs teljesítmény. Csendes hűtés és fűtés akár -25 °C-ig az elegáns kényelem érdekében minden évszakban.',
      pl: 'Stylowy czarny design i najwyższa wydajność. Ciche chłodzenie i ogrzewanie do -25 °C dla eleganckiego komfortu o każdej porze roku.',
      de: 'Stilvolles schwarzes Design und Spitzenleistung. Leises Kühlen und Heizen bis -25 °C für eleganten Komfort in jeder Jahreszeit.',
      ja: 'スタイリッシュなブラックデザインと卓越したパフォーマンス。静かな冷却と-25 °Cまでの暖房で、どの季節でもエレガントな快適さを提供します。',
    },
  },
  lisa: {
    title: {
      sk: 'Hlasový ovládač Lisa | Naitec Nová AI Technológia',
      cz: 'Hlasový ovladač Lisa | Naitec Nová AI Technologie',
      en: 'Lisa Voice Controller | Naitec New AI Technology',
      hu: 'Lisa Hangvezérlő | Naitec Új AI Technológia',
      pl: 'Lisa Kontroler Głosowy | Naitec Nowa Technologia AI',
      de: 'Lisa Sprachsteuerung | Naitec Neue KI-Technologie',
      ja: 'Lisa 音声コントローラー | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Užite si luxus bezdotykového ovládania klimatizácie s našou inovatívnou technológiou hlasového ovládania. Naitec Lisa.',
      cz: 'Užijte si luxus bezdotykového ovládání klimatizace s naší inovativní technologií hlasového ovládání. Naitec Lisa.',
      en: 'Experience the luxury of touchless air conditioning control with our innovative voice control technology. Naitec Lisa.',
      hu: 'Élvezze a légkondicionáló érintés nélküli vezérlésének luxusát innovatív hangvezérlő technológiánkkal. Naitec Lisa.',
      pl: 'Ciesz się luksusem bezdotykowego sterowania klimatyzacją dzięki naszej innowacyjnej technologii sterowania głosowego. Naitec Lisa.',
      de: 'Genießen Sie den Luxus der berührungslosen Steuerung Ihrer Klimaanlage mit unserer innovativen Sprachsteuerungstechnologie. Naitec Lisa.',
      ja: '私たちの革新的な音声コントロール技術で、タッチレスでエアコンを操作する贅沢を体験してください。Naitec Lisa.',
    },
  },
  fireplace_diffuser: {
    title: {
      sk: 'Krbový difúzor | Naitec Nová AI Technológia',
      cz: 'Krbový difuzér | Naitec Nová AI Technologie',
      en: 'Fireplace Diffuser | Naitec New AI Technology',
      hu: 'Kályha Diffúzor | Naitec Új AI Technológia',
      pl: 'Dyfuzor Kominkowy | Naitec Nowa Technologia AI',
      de: 'Kamin-Diffusor | Naitec Neue KI-Technologie',
      ja: '暖炉ディフューザー | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Vytvára útulnú atmosféru, rozptyľuje príjemné vône a dodáva vášmu domovu pocit pohody. Krbový difúzor Naitec',
      cz: 'Vytváří útulnou atmosféru, rozptyluje příjemné vůně a dodává vašemu domovu pocit pohody. Krbový difuzér Naitec.',
      en: 'Creates a cozy atmosphere, disperses pleasant scents, and adds a sense of comfort to your home. Fireplace Diffuser Naitec.',
      hu: 'Kényelmes légkört teremt, kellemes illatokat oszlat, és otthona hangulatát fokozza. Kályha Diffúzor Naitec.',
      pl: 'Tworzy przytulną atmosferę, rozprasza przyjemne zapachy i dodaje Twojemu domowi poczucie komfortu. Dyfuzor Kominkowy Naitec.',
      de: 'Schafft eine gemütliche Atmosphäre, verteilt angenehme Düfte und verleiht Ihrem Zuhause ein Gefühl der Behaglichkeit. Kamin-Diffusor Naitec.',
      ja: '心地よい雰囲気を作り、快適な香りを広げ、家にくつろぎの感覚を加えます。暖炉ディフューザー Naitec.',
    },
  },
  where_to_buy: {
    title: {
      sk: 'Kde kúpim produkty Naitec? | Naitec Nová AI Technológia',
      cz: 'Kde koupit produkty Naitec? | Naitec Nová AI Technologie',
      en: 'Where to Buy Naitec Products | Naitec New AI Technology',
      hu: 'Hol vásárolhatók Naitec termékek? | Naitec Új AI Technológia',
      pl: 'Gdzie kupić produkty Naitec? | Naitec Nowa Technologia AI',
      de: 'Wo kann man Naitec-Produkte kaufen? | Naitec Neue KI-Technologie',
      ja: 'Naitec製品の購入場所 | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Nájdite najbližšieho autorizovaného predajcu produktov Naitec alebo sa obráťte s vašimi otázkami priamo na nás.',
      cz: 'Najděte nejbližší autorizovaný prodejce produktů Naitec nebo nás kontaktujte s vašimi dotazy.',
      en: 'Find the nearest authorized dealer for Naitec products or contact us directly with your questions.',
      hu: 'Találja meg a legközelebbi hivatalos forgalmazót Naitec termékekhez, vagy lépjen kapcsolatba velünk közvetlenül kérdéseivel.',
      pl: 'Znajdź najbliższego autoryzowanego sprzedawcę produktów Naitec lub skontaktuj się z nami bezpośrednio w przypadku pytań.',
      de: 'Finden Sie den nächsten autorisierten Händler für Naitec-Produkte oder kontaktieren Sie uns direkt bei Fragen.',
      ja: 'Naitec製品の最寄りの認定販売店を見つけるか、ご質問がある場合は直接お問い合わせください。',
    },
  },
  contact: {
    title: {
      sk: 'Kontaktujte nás | Naitec Nová AI Technológia',
      cz: 'Kontaktujte nás | Naitec Nová AI Technologie',
      en: 'Contact Us | Naitec New AI Technology',
      hu: 'Lépjen kapcsolatba velünk | Naitec Új AI Technológia',
      pl: 'Skontaktuj się z nami | Naitec Nowa Technologia AI',
      de: 'Kontaktieren Sie uns | Naitec Neue KI-Technologie',
      ja: 'お問い合わせ | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Sme tu pre vás! Kontaktujte nás s otázkami o produktoch, službách alebo technickej podpore.',
      cz: 'Jsme tu pro vás! Kontaktujte nás s otázkami ohledně produktů, služeb nebo technické podpory.',
      en: 'We are here for you! Contact us with any questions about products, services, or technical support.',
      hu: 'Itt vagyunk Önnek! Lépjen kapcsolatba velünk kérdéseivel a termékekről, szolgáltatásokról vagy technikai támogatásról.',
      pl: 'Jesteśmy tu dla Ciebie! Skontaktuj się z nami w sprawie pytań dotyczących produktów, usług lub wsparcia technicznego.',
      de: 'Wir sind für Sie da! Kontaktieren Sie uns bei Fragen zu Produkten, Dienstleistungen oder technischer Unterstützung.',
      ja: '私たちはあなたのためにここにいます！製品、サービス、または技術サポートに関する質問がある場合は、お問い合わせください。',
    },
  },
  sensitive_pro: {
    title: {
      sk: 'Klimatizácia Naitec Sensitive Pro | Naitec Nová AI Technológia',
      cz: 'Klimatizace Naitec Sensitive Pro | Naitec Nová AI Technologie',
      en: 'Naitec Sensitive Pro Air Conditioning | Naitec New AI Technology',
      hu: 'Naitec Sensitive Pro Klíma | Naitec Új AI Technológia',
      pl: 'Klimatyzacja Naitec Sensitive Pro | Naitec Nowa Technologia AI',
      de: 'Naitec Sensitive Pro Klimaanlage | Naitec Neue KI-Technologie',
      ja: 'Naitec Sensitive Pro 空調 | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Nový štandard komfortu s bezprievanovým chladením a vykurovaním až do -35 °C. Čistý vzduch a moderný dizajn pre zdravé prostredie.',
      cz: 'Nový standard komfortu s bezprůvanovým chlazením a vytápěním až do -35 °C. Čistý vzduch a moderní design pro zdravé prostředí.',
      en: 'A new standard of comfort with draft-free cooling and heating down to -35 °C. Clean air and modern design for a healthy environment.',
      hu: 'Új kényelmi standard huzatmentes hűtéssel és fűtéssel akár -35 °C-ig. Tiszta levegő és modern dizájn az egészséges környezetért.',
      pl: 'Nowy standard komfortu z chłodzeniem i ogrzewaniem bez przeciągów do -35 °C. Czyste powietrze i nowoczesny design dla zdrowego środowiska.',
      de: 'Ein neuer Standard für Komfort mit zugluftfreier Kühlung und Heizung bis -35 °C. Saubere Luft und modernes Design für ein gesundes Umfeld.',
      ja: '新しい快適さの基準、-35°Cまでのドラフトフリー冷却と暖房。清潔な空気とモダンなデザインで健康的な環境を提供します。',
    },
  },
  support: {
    title: {
      sk: 'Podpora | Naitec Nová AI Technológia',
      cz: 'Podpora | Naitec Nová AI Technologie',
      en: 'Support | Naitec New AI Technology',
      hu: 'Támogatás | Naitec Új AI Technológia',
      pl: 'Wsparcie | Naitec Nowa Technologia AI',
      de: 'Support | Naitec Neue KI-Technologie',
      ja: 'サポート | Naitec 新しいAI技術',
    },
    description: {
      sk: 'Prejdite si naše užívateľské príručky, návody a ďalšie podporné materiály pre produkty Naitec. Získajte potrebné informácie o používaní našich zariadení a stiahnite si všetky dôležité dokumenty na jednom mieste.',
      cz: 'Prozkoumejte naše uživatelské příručky, návody a další podpůrné materiály pro produkty Naitec. Získejte potřebné informace o používání našich zařízení a stáhněte si všechny důležité dokumenty na jednom místě.',
      en: 'Browse our user manuals, guides, and other support materials for Naitec products. Get the necessary information on using our devices and download all important documents in one place.',
      hu: 'Nézze át felhasználói kézikönyveinket, útmutatóinkat és egyéb támogatási anyagainkat Naitec termékekhez. Szerezze meg a szükséges információkat eszközeink használatáról és töltse le az összes fontos dokumentumot egy helyen.',
      pl: 'Przeglądaj nasze podręczniki użytkownika, przewodniki i inne materiały wsparcia dla produktów Naitec. Uzyskaj potrzebne informacje na temat używania naszych urządzeń i pobierz wszystkie ważne dokumenty w jednym miejscu.',
      de: 'Durchsuchen Sie unsere Benutzerhandbücher, Anleitungen und andere Unterstützungsunterlagen für Naitec-Produkte. Erhalten Sie die notwendigen Informationen zur Verwendung unserer Geräte und laden Sie alle wichtigen Dokumente an einem Ort herunter.',
      ja: 'Naitec製品のユーザーマニュアル、ガイド、その他のサポート資料をご覧ください。デバイスの使用に関する必要な情報を取得し、すべての重要なドキュメントを一箇所でダウンロードできます。',
    },
  },
};

export const HREF_LANGS = {
  en: 'en-US',
  sk: 'sk-SK',
  cs: 'cs-CZ',
  hu: 'hu-HU',
  pl: 'pl-PL',
  de: 'de-DE',
  at: 'de-AT',
  ja: 'ja-JP',
};
