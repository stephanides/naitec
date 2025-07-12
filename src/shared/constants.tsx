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
  CASSETTE_AIR_CONDITIONING: '/cassette-air-conditioning',
  DUCTED_AIR_CONDITIONING: '/ducted-air-conditioning',
  MULTI_SPLIT_SYSTEM: '/multi-split-system',
  STELLAIR_SUPPORT: '/support/stellair',
  SENSITIVE_PRO_SUPPORT: '/support/sensitive-pro',
  SENSITIVE_SUPPORT: '/support/sensitive',
  ONYX_SUPPORT: '/support/onyx',
  SMART_SUPPORT: '/support/smart',
  LISA_SUPPORT: '/support/lisa',
  FIREPLACE_DIFFUSER_SUPPORT: '/support/fireplace-diffuser',
  CASSETTE_AIR_CONDITIONING_SUPPORT: '/support/cassette-air-conditioning',
  DUCTED_AIR_CONDITIONING_SUPPORT: '/support/ducted-air-conditioning',
  MULTI_SPLIT_SYSTEM_SUPPORT: '/support/multi-split-system',
  PRIVACY_POLICY: '/privacy-policy',
  LEGAL_NOTICE: '/legal-notice',
};

export const EXTERNAL_ROUTES = {
  IOS: 'https://apps.apple.com/us/app/ac-freedom/id988314711',
  ANDROID:
    'https://play.google.com/store/apps/details?id=com.broadlink.acfreedom',
};

export const EMAILS = {
  CONTACT: 'info@naitec.ai',
};

export const PHONE_NUMBERS = {
  CONTACT_AT: '+43 650 2749692',
  CONTACT_HU: '+36 20 777 4477',
  CONTACT_SK: '+421 905 433 522',
  CONTACT_CZ: '+420 608 732 222',
};

export const SOCIAL_NETWORKS = {
  sk: {
    instagram: 'https://www.instagram.com/naitecsk/',
    facebook:
      'https://www.facebook.com/people/Naitec-Slovensko/61553003033343/',
  },
  cs: {
    instagram: 'https://www.instagram.com/naiteccz/',
    facebook: 'https://www.facebook.com/people/Naitec-Česká-Republika/61573764282391/',
  },
  en: {
    instagram: 'https://www.instagram.com/naitecsk/',
    facebook: 'https://www.facebook.com/naitec.sk/',
  },
  hu: {
    instagram: 'https://www.instagram.com/naitechungary/',
    facebook: 'https://www.facebook.com/people/Naitec-Magyarország/61573733194290/',
  },
  pl: {
    instagram: 'https://www.instagram.com/naitecsk/',
    facebook: 'https://www.facebook.com/naitec.sk/',
  },
  de: {
    instagram: 'https://www.instagram.com/naitecde/',
    facebook: 'https://www.facebook.com/people/Naitec-Deutschland/61577282007494/',
  },
  ja: {
    instagram: 'https://www.instagram.com/naitecsk/',
    facebook: 'https://www.facebook.com/naitec.sk/',
  },
  it: {
    instagram: 'https://www.instagram.com/naitecsk/',
    facebook: 'https://www.facebook.com/naitec.sk/',
  },
  at: {
    instagram: 'https://www.instagram.com/naitecat/',
    facebook: 'https://www.facebook.com/people/Naitec-Österreich/61573446946475/',
  },
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
          {
            title: 'Čestina',
            href: '/manuals/stellair-sensitive-remote-controller-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '438 Kb',
          },
          {
            title: 'Deutch',
            href: '/manuals/stellair-sensitive-remote-controller-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '1.1 Mb',
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
          {
            title: 'Čestina',
            href: '/manuals/naitec-wifi-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '737 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/naitec-wifi-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '1.1 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/naitec-wifi-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '684 Kb',
          },
        ],
      },
      {
        title: 'installation_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/installation-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.8 Mb',
          },
          {
            title: 'Čestina',
            href: '/manuals/installation-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.6 Mb',
          },
          {
            title: 'Magyar',
            href: '/manuals/installation-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '3.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/installation-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4 Mb',
          },
        ],
      },
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
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
          {
            title: 'Čestina',
            href: '/manuals/stellair-sensitive-remote-controller-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '438 Kb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/stellair-sensitive-remote-controller-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '1.1 Mb',
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
          {
            title: 'Čestina',
            href: '/manuals/naitec-wifi-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '737 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/naitec-wifi-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '1.1 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/naitec-wifi-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '684 Kb',
          },
        ],
      },
      {
        title: 'installation_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/installation-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.8 Mb',
          },
          {
            title: 'Čestina',
            href: '/manuals/installation-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.6 Mb',
          },
          {
            title: 'Magyar',
            href: '/manuals/installation-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '3.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/installation-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4 Mb',
          },
        ],
      },
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
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
            href: '/manuals/smart-remote-controller-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '918 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/smart-remote-controller-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '537 Kb',
          },
          {
            title: 'Čestina',
            href: '/manuals/smart-remote-controller-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '348 Kb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/smart-remote-controller-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/9/2024',
            size: '958 Kb',
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
          {
            title: 'Čestina',
            href: '/manuals/naitec-wifi-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '737 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/naitec-wifi-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '1.1 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/naitec-wifi-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '684 Kb',
          },
        ],
      },
      {
        title: 'installation_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/installation-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.8 Mb',
          },
          {
            title: 'Čestina',
            href: '/manuals/installation-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.6 Mb',
          },
          {
            title: 'Magyar',
            href: '/manuals/installation-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '3.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/installation-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4 Mb',
          },
        ],
      },
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
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
          {
            title: 'Čestina',
            href: '/manuals/naitec-wifi-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '737 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/naitec-wifi-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '1.1 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/naitec-wifi-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '684 Kb',
          },
        ],
      },
      {
        title: 'installation_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/installation-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.8 Mb',
          },
          {
            title: 'Čestina',
            href: '/manuals/installation-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.6 Mb',
          },
          {
            title: 'Magyar',
            href: '/manuals/installation-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '3.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/installation-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4 Mb',
          },
        ],
      },
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
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
          {
            title: 'Čestina',
            href: '/manuals/naitec-wifi-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '737 Kb',
          },
          {
            title: 'Magyar',
            href: '/manuals/naitec-wifi-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '1.1 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/naitec-wifi-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '684 Kb',
          },
        ],
      },
      {
        title: 'installation_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/installation-manual-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.8 Mb',
          },
          {
            title: 'Čestina',
            href: '/manuals/installation-manual-cz.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4.6 Mb',
          },
          {
            title: 'Magyar',
            href: '/manuals/installation-manual-hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '3.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/manuals/installation-manual-de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '1/8/2024',
            size: '4 Mb',
          },
        ],
      },
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
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
  {
    id: 'cassette-air-conditioning',
    title: 'cassette_air_conditioning',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/support/cassette-air-conditioning-support.png`,
    supportImage: `${BUNNY_CDN_URL}/support/cassette-air-conditioning-support.png`,
    href: INTERNAL_ROUTES.CASSETTE_AIR_CONDITIONING_SUPPORT,
    supportDocuments: [
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
          },
        ],
      },
    ],
  },
  {
    id: 'ducted-air-conditioning',
    title: 'ducted_air_conditioning',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/support/ducted-air-conditioner-support.png`,
    supportImage: `${BUNNY_CDN_URL}/support/ducted-air-conditioner-support.png`,
    href: INTERNAL_ROUTES.DUCTED_AIR_CONDITIONING_SUPPORT,
    supportDocuments: [
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
          },
        ],
      },
    ],
  },
  {
    id: 'multi-split-system',
    title: 'multi_split_system',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: `${BUNNY_CDN_URL}/support/multi-split-support.png`,
    supportImage: `${BUNNY_CDN_URL}/support/multi-split-support.png`,
    href: INTERNAL_ROUTES.MULTI_SPLIT_SYSTEM_SUPPORT,
    supportDocuments: [
      {
        title: 'error_codes',
        items: [
          {
            title: 'Slovenčina',
            href: '/manuals/error-codes-sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '9/7/2025',
            size: '500 Kb',
          },
        ],
      },
    ],
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
      it: 'Naitec - Creato per il futuro, disponibile oggi | Naitec',
    },
    description: {
      sk: 'Objavte svet inovatívnych klimatizácií a pokročilých technológií Naitec, ktoré prinášajú komfort a efektivitu do vášho domova.',
      cz: 'Objevte svět inovativních klimatizací a pokročilých technologií Naitec, které přinášejí komfort a efektivitu do vašeho domova.',
      en: 'Discover the world of innovative air conditioning and advanced Naitec technologies that bring comfort and efficiency to your home.',
      hu: 'Fedezze fel az innovatív Naitec klímaberendezések és fejlett technológiák világát, amelyek kényelmet és hatékonyságot hoznak otthonába.',
      pl: 'Odkryj świat innowacyjnych klimatyzatorów i zaawansowanych technologii Naitec, które zapewniają komfort i efektywność w Twoim domu.',
      de: 'Entdecken Sie die Welt der innovativen Klimaanlagen und fortschrittlichen Naitec-Technologien, die Komfort und Effizienz in Ihr Zuhause bringen.',
      ja: '革新的な空調システムと高度なNaitec技術の世界を発見し、快適さと効率性をあなたの家に届けます。',
      it: 'Scopri il mondo della climatizzazione innovativa e delle tecnologie avanzate di Naitec che portano comfort ed efficienza nella tua casa.',
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
      it: 'Naitec Stellair Climatizzazione | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Vstupte do ríše dokonalej klímy. Hviezdny zážitok čerstvého vzduchu z vonku, očisteného od mikronečistôt a alergénov, príjemne vychladeného na mieru vašim túžbam.',
      cz: 'Vstupte do říše dokonalé klímy. Hvězdný zážitek čerstvého vzduchu zvenku, očištěného od mikronečistot a alergenů, příjemně ochlazeného na míru vašim touhám.',
      en: 'Enter the realm of perfect climate. A stellar experience of fresh outdoor air, purified from micro-impurities and allergens, pleasantly cooled to your desires.',
      hu: 'Lépjen be a tökéletes klíma birodalmába. Csillagfényes élmény a külső friss levegővel, megtisztítva a mikroszennyeződésektől és allergénektől, kellemesen hűtve az Ön igényeihez.',
      pl: 'Wejdź do królestwa idealnego klimatu. Gwiazdorskie doświadczenie świeżego powietrza z zewnątrz, oczyszczonego z mikro zanieczyszczeń i alergenów, przyjemnie schłodzonego do Twoich pragnień.',
      de: 'Treten Sie in das Reich des perfekten Klimas ein. Ein himmlisches Erlebnis von frischer Außenluft, gereinigt von Mikroverunreinigungen und Allergenen, angenehm nach Ihren Wünschen gekühlt.',
      ja: '完璧な気候の領域へようこそ。微細な不純物やアレルゲンが取り除かれた新鮮な外気を、あなたの望みに応じて心地よく冷却します。',
      it: "Entra nel regno del clima perfetto. Un'esperienza stellare di aria fresca esterna, purificata da micro-impurità e allergeni, piacevolmente raffrescata secondo i tuoi desideri.",
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
      it: 'Naitec Sensitive Climatizzazione | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Zažite dokonalý komfort s čistým vzduchom bez prievanu. Rovnomerné chladenie a očistenie od alergénov pre maximálny komfort vo vašom domove.',
      cz: 'Zažijte dokonalý komfort s čistým vzduchem bez průvanu. Rovnoměrné chlazení a odstranění alergenů pro maximální komfort ve vašem domově.',
      en: 'Experience perfect comfort with clean, draft-free air. Even cooling and allergen removal for maximum comfort in your home.',
      hu: 'Tapasztalja meg a tökéletes kényelmet a tiszta, huzatmentes levegővel. Egyenletes hűtés és allergének eltávolítása a maximális kényelemért az otthonában.',
      pl: 'Doświadcz doskonałego komfortu dzięki czystemu, bezprzewodowemu powietrzu. Równomierne chłodzenie i usuwanie alergenów dla maksymalnego komfortu w Twoim domu.',
      de: 'Erleben Sie perfekten Komfort mit sauberer, zugluftfreier Luft. Gleichmäßige Kühlung und Allergenenentfernung für maximalen Komfort in Ihrem Zuhause.',
      ja: '完璧な快適さを清潔でドラフトのない空気で体験してください。均一な冷却とアレルゲンの除去で、あなたの家での最大の快適さを実現します。',
      it: 'Vivi il comfort perfetto con aria pulita e senza correnti. Raffrescamento uniforme e rimozione degli allergeni per il massimo comfort nella tua casa.',
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
      it: 'Naitec Smart Climatizzazione | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Moderný dizajn, vysoká účinnosť a vykurovanie až do -25 °C. Wi-Fi ovládanie pre komfort a pohodlie po celý rok.',
      cz: 'Moderní design, vysoká účinnost a topení až do -25 °C. Wi-Fi ovládání pro komfort a pohodlí po celý rok.',
      en: 'Modern design, high efficiency, and heating down to -25 °C. Wi-Fi control for comfort and convenience all year round.',
      hu: 'Modern dizájn, magas hatékonyság és fűtés akár -25 °C-ig. Wi-Fi vezérlés a kényelem és a komfort érdekében egész évben.',
      pl: 'Nowoczesny design, wysoka wydajność i ogrzewanie do -25 °C. Sterowanie Wi-Fi dla komfortu i wygody przez cały rok.',
      de: 'Modernes Design, hohe Effizienz und Heizung bis -25 °C. WLAN-Steuerung für Komfort und Bequemlichkeit das ganze Jahr über.',
      ja: 'モダンなデザイン、高効率、-25 °Cまでの暖房。年間を通して快適さと便利さを提供するWi-Fiコントロール。',
      it: 'Design moderno, alta efficienza e riscaldamento fino a -25 °C. Controllo Wi-Fi per comfort e praticità tutto l’anno.',
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
      it: 'Naitec Onyx Climatizzazione | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Štýlový čierny dizajn a špičkový výkon. Tiché chladenie a vykurovanie do -25 °C pre elegantný komfort v každom ročnom období.',
      cz: 'Stylový černý design a špičkový výkon. Tichý chlazení a topení až do -25 °C pro elegantní komfort v každém ročním období.',
      en: 'Stylish black design and top performance. Quiet cooling and heating down to -25 °C for elegant comfort in every season.',
      hu: 'Stílusos fekete dizájn és csúcs teljesítmény. Csendes hűtés és fűtés akár -25 °C-ig az elegáns kényelem érdekében minden évszakban.',
      pl: 'Stylowy czarny design i najwyższa wydajność. Ciche chłodzenie i ogrzewanie do -25 °C dla eleganckiego komfortu o każdej porze roku.',
      de: 'Stilvolles schwarzes Design und Spitzenleistung. Leises Kühlen und Heizen bis -25 °C für eleganten Komfort in jeder Jahreszeit.',
      ja: 'スタイリッシュなブラックデザインと卓越したパフォーマンス。静かな冷却と-25 °Cまでの暖房で、どの季節でもエレガントな快適さを提供します。',
      it: 'Design nero elegante e prestazioni al top. Raffrescamento silenzioso e riscaldamento fino a -25 °C per un comfort raffinato in ogni stagione.',
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
      it: 'Controller Vocale Lisa | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Užite si luxus bezdotykového ovládania klimatizácie s našou inovatívnou technológiou hlasového ovládania. Naitec Lisa.',
      cz: 'Užijte si luxus bezdotykového ovládání klimatizace s naší inovativní technologií hlasového ovládání. Naitec Lisa.',
      en: 'Experience the luxury of touchless air conditioning control with our innovative voice control technology. Naitec Lisa.',
      hu: 'Élvezze a légkondicionáló érintés nélküli vezérlésének luxusát innovatív hangvezérlő technológiánkkal. Naitec Lisa.',
      pl: 'Ciesz się luksusem bezdotykowego sterowania klimatyzacją dzięki naszej innowacyjnej technologii sterowania głosowego. Naitec Lisa.',
      de: 'Genießen Sie den Luxus der berührungslosen Steuerung Ihrer Klimaanlage mit unserer innovativen Sprachsteuerungstechnologie. Naitec Lisa.',
      ja: '私たちの革新的な音声コントロール技術で、タッチレスでエアコンを操作する贅沢を体験してください。Naitec Lisa.',
      it: 'Vivi il lusso del controllo della climatizzazione senza contatto con la nostra innovativa tecnologia di controllo vocale. Naitec Lisa.',
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
      it: 'Diffusore per Camino | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Vytvára útulnú atmosféru, rozptyľuje príjemné vône a dodáva vášmu domovu pocit pohody. Krbový difúzor Naitec',
      cz: 'Vytváří útulnou atmosféru, rozptyluje příjemné vůně a dodává vašemu domovu pocit pohody. Krbový difuzér Naitec.',
      en: 'Creates a cozy atmosphere, disperses pleasant scents, and adds a sense of comfort to your home. Fireplace Diffuser Naitec.',
      hu: 'Kényelmes légkört teremt, kellemes illatokat oszlat, és otthona hangulatát fokozza. Kályha Diffúzor Naitec.',
      pl: 'Tworzy przytulną atmosferę, rozprasza przyjemne zapachy i dodaje Twojemu domowi poczucie komfortu. Dyfuzor Kominkowy Naitec.',
      de: 'Schafft eine gemütliche Atmosphäre, verteilt angenehme Düfte und verleiht Ihrem Zuhause ein Gefühl der Behaglichkeit. Kamin-Diffusor Naitec.',
      ja: '心地よい雰囲気を作り、快適な香りを広げ、家にくつろぎの感覚を加えます。暖炉ディフューザー Naitec.',
      it: 'Crea un’atmosfera accogliente, diffonde profumi piacevoli e aggiunge una sensazione di comfort alla tua casa. Diffusore per Camino Naitec.',
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
      it: 'Dove Acquistare i Prodotti Naitec | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Nájdite najbližšieho autorizovaného predajcu produktov Naitec alebo sa obráťte s vašimi otázkami priamo na nás.',
      cz: 'Najděte nejbližší autorizovaný prodejce produktů Naitec nebo nás kontaktujte s vašimi dotazy.',
      en: 'Find the nearest authorized dealer for Naitec products or contact us directly with your questions.',
      hu: 'Találja meg a legközelebbi hivatalos forgalmazót Naitec termékekhez, vagy lépjen kapcsolatba velünk közvetlenül kérdéseivel.',
      pl: 'Znajdź najbliższego autoryzowanego sprzedawcę produktów Naitec lub skontaktuj się z nami bezpośrednio w przypadku pytań.',
      de: 'Finden Sie den nächsten autorisierten Händler für Naitec-Produkte oder kontaktieren Sie uns direkt bei Fragen.',
      ja: 'Naitec製品の最寄りの認定販売店を見つけるか、ご質問がある場合は直接お問い合わせください。',
      it: 'Trova il rivenditore autorizzato Naitec più vicino o contattaci direttamente per qualsiasi domanda.',
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
      it: 'Contattaci | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Sme tu pre vás! Kontaktujte nás s otázkami o produktoch, službách alebo technickej podpore.',
      cz: 'Jsme tu pro vás! Kontaktujte nás s otázkami ohledně produktů, služeb nebo technické podpory.',
      en: 'We are here for you! Contact us with any questions about products, services, or technical support.',
      hu: 'Itt vagyunk Önnek! Lépjen kapcsolatba velünk kérdéseivel a termékekről, szolgáltatásokról vagy technikai támogatásról.',
      pl: 'Jesteśmy tu dla Ciebie! Skontaktuj się z nami w sprawie pytań dotyczących produktów, usług lub wsparcia technicznego.',
      de: 'Wir sind für Sie da! Kontaktieren Sie uns bei Fragen zu Produkten, Dienstleistungen oder technischer Unterstützung.',
      ja: '私たちはあなたのためにここにいます！製品、サービス、または技術サポートに関する質問がある場合は、お問い合わせください。',
      it: 'Siamo qui per te! Contattaci per qualsiasi domanda su prodotti, servizi o assistenza tecnica.',
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
      it: 'Naitec Sensitive Pro Climatizzazione | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Nový štandard komfortu s bezprievanovým chladením a vykurovaním až do -35 °C. Čistý vzduch a moderný dizajn pre zdravé prostredie.',
      cz: 'Nový standard komfortu s bezprůvanovým chlazením a vytápěním až do -35 °C. Čistý vzduch a moderní design pro zdravé prostředí.',
      en: 'A new standard of comfort with draft-free cooling and heating down to -35 °C. Clean air and modern design for a healthy environment.',
      hu: 'Új kényelmi standard huzatmentes hűtéssel és fűtéssel akár -35 °C-ig. Tiszta levegő és modern dizájn az egészséges környezetért.',
      pl: 'Nowy standard komfortu z chłodzeniem i ogrzewaniem bez przeciągów do -35 °C. Czyste powietrze i nowoczesny design dla zdrowego środowiska.',
      de: 'Ein neuer Standard für Komfort mit zugluftfreier Kühlung und Heizung bis -35 °C. Saubere Luft und modernes Design für ein gesundes Umfeld.',
      ja: '新しい快適さの基準、-35°Cまでのドラフトフリー冷却と暖房。清潔な空気とモダンなデザインで健康的な環境を提供します。',
      it: 'Un nuovo standard di comfort con raffrescamento e riscaldamento senza correnti d’aria fino a -35 °C. Aria pulita e design moderno per un ambiente sano.',
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
      it: 'Supporto | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Prejdite si naše užívateľské príručky, návody a ďalšie podporné materiály pre produkty Naitec. Získajte potrebné informácie o používaní našich zariadení a stiahnite si všetky dôležité dokumenty na jednom mieste.',
      cz: 'Prozkoumejte naše uživatelské příručky, návody a další podpůrné materiály pro produkty Naitec. Získejte potřebné informace o používání našich zařízení a stáhněte si všechny důležité dokumenty na jednom místě.',
      en: 'Browse our user manuals, guides, and other support materials for Naitec products. Get the necessary information on using our devices and download all important documents in one place.',
      hu: 'Nézze át felhasználói kézikönyveinket, útmutatóinkat és egyéb támogatási anyagainkat Naitec termékekhez. Szerezze meg a szükséges információkat eszközeink használatáról és töltse le az összes fontos dokumentumot egy helyen.',
      pl: 'Przeglądaj nasze podręczniki użytkownika, przewodniki i inne materiały wsparcia dla produktów Naitec. Uzyskaj potrzebne informacje na temat używania naszych urządzeń i pobierz wszystkie ważne dokumenty w jednym miejscu.',
      de: 'Durchsuchen Sie unsere Benutzerhandbücher, Anleitungen und andere Unterstützungsunterlagen für Naitec-Produkte. Erhalten Sie die notwendigen Informationen zur Verwendung unserer Geräte und laden Sie alle wichtigen Dokumente an einem Ort herunter.',
      ja: 'Naitec製品のユーザーマニュアル、ガイド、その他のサポート資料をご覧ください。デバイスの使用に関する必要な情報を取得し、すべての重要なドキュメントを一箇所でダウンロードできます。',
      it: 'Consulta i nostri manuali utente, guide e altri materiali di supporto per i prodotti Naitec. Trova tutte le informazioni necessarie per utilizzare i nostri dispositivi e scarica tutti i documenti importanti in un unico posto.',
    },
  },
  cassette_air_conditioning: {
    title: {
      sk: 'Kazetová klimatizácia Naitec | Naitec New AI Technology',
      cz: 'Kazetová klimatizace Naitec | Naitec Nová AI Technologie',
      en: 'Cassette Air Conditioning Naitec | Naitec New AI Technology',
      hu: 'Kazettás Klímaberendezés Naitec | Naitec Új AI Technológia',
      pl: 'Klimatyzacja Kasetowa Naitec | Naitec Nowa Technologia AI',
      de: 'Kassettengerät Klimaanlage Naitec | Naitec Neue KI-Technologie',
      ja: 'カセット型エアコン Naitec | Naitec 新しいAI技術',
      it: 'Climatizzazione a Cassetta Naitec | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Kazetová klimatizácia od Naitec je špeciálne navrhnutá pre komerčné prostredie, kde je dôležité zabezpečiť optimálne podmienky pre zamestnancov a zákazníkov.',
      cz: 'Kazetová klimatizace od Naitec je speciálně navržena pro komerční prostředí, kde je důležité zajistit optimální podmínky pro zaměstnance a zákazníky.',
      en: 'The cassette air conditioning by Naitec is specifically designed for commercial environments, ensuring optimal conditions for employees and customers.',
      hu: 'A Naitec kazettás klímaberendezése kifejezetten kereskedelmi környezetekhez lett tervezve, ahol fontos a munkavállalók és ügyfelek optimális feltételeinek biztosítása.',
      pl: 'Klimatyzacja kasetowa od Naitec została specjalnie zaprojektowana do środowisk komercyjnych, gdzie ważne jest zapewnienie optymalnych warunków dla pracowników i klientów.',
      de: 'Die Kassettengerät-Klimaanlage von Naitec wurde speziell für gewerbliche Umgebungen entwickelt, um optimale Bedingungen für Mitarbeiter und Kunden zu gewährleisten.',
      ja: 'Naitecのカセット型エアコンは、従業員と顧客に最適な環境を提供するために、商業環境向けに特別に設計されています。',
      it: 'La climatizzazione a cassetta di Naitec è progettata specificamente per ambienti commerciali, garantendo condizioni ottimali per dipendenti e clienti.',
    },
  },
  ducted_air_conditioning: {
    title: {
      sk: 'Kanálová klimatizácia Naitec | Naitec New AI Technology',
      cs: 'Kanálová klimatizace Naitec | Naitec Nová AI Technologie',
      en: 'Ducted Air Conditioning Naitec | Naitec New AI Technology',
      hu: 'Csatornás Klíma Naitec | Naitec Új AI Technológia',
      pl: 'Klimatyzacja Kanałowa Naitec | Naitec Nowa Technologia AI',
      de: 'Kanalklimaanlage Naitec | Naitec Neue KI-Technologie',
      ja: 'ダクト式空調 Naitec | Naitec 新しいAI技術',
      it: 'Climatizzazione Canalizzata Naitec | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Kanálová klimatizácia od Naitec je diskrétne a efektívne riešenie pre Vašu domácnosť alebo kanceláriu.',
      cs: 'Kanálová klimatizace od Naitec je diskrétní a efektivní řešení pro Váš domov nebo kancelář.',
      en: 'Ducted air conditioning from Naitec is a discreet and efficient solution for your home or office.',
      hu: 'A Naitec csatornás klímája diszkrét és hatékony megoldást kínál otthonához vagy irodájához.',
      pl: 'Klimatyzacja kanałowa od Naitec to dyskretne i efektywne rozwiązanie do Twojego domu lub biura.',
      de: 'Die Kanalklimaanlage von Naitec ist eine diskrete und effiziente Lösung für Ihr Zuhause oder Büro.',
      ja: 'Naitecのダクト式空調は、ご自宅やオフィスに最適な控えめで効率的なソリューションです。',
      it: 'La climatizzazione canalizzata di Naitec è una soluzione discreta ed efficiente per la tua casa o il tuo ufficio.',
    },
  },
  multi_split_system: {
    title: {
      sk: 'Multisplitové riešenie Naitec | Naitec New AI Technology',
      cs: 'Multisplitové řešení Naitec | Naitec Nová AI Technologie',
      en: 'Multi-split Solution Naitec | Naitec New AI Technology',
      hu: 'Multi-split megoldás Naitec | Naitec Új AI Technológia',
      pl: 'Rozwiązanie Multi-split Naitec | Naitec Nowa Technologia AI',
      de: 'Multisplit-Lösung Naitec | Naitec Neue KI-Technologie',
      ja: 'マルチスプリットソリューション Naitec | Naitec 新しいAI技術',
      it: 'Soluzione Multi-split Naitec | Nuova Tecnologia AI di Naitec',
    },
    description: {
      sk: 'Naitec ponúka multisplitové riešenia pre modely Stellair, Sensitive, Smart a Onyx s dvoma až piatimi vnútornými jednotkami.',
      cs: 'Naitec nabízí multisplitová řešení pro modely Stellair, Sensitive, Smart a Onyx s dvěma až pěti vnitřními jednotkami.',
      en: 'Naitec offers multi-split solutions for Stellair, Sensitive, Smart, and Onyx models with two to five indoor units.',
      hu: 'A Naitec multi-split megoldásokat kínál a Stellair, Sensitive, Smart és Onyx modellekhez, két és öt belső egységgel.',
      pl: 'Naitec oferuje rozwiązania multi-split dla modeli Stellair, Sensitive, Smart i Onyx z dwoma do pięciu jednostkami wewnętrznymi.',
      de: 'Naitec bietet Multisplit-Lösungen für die Modelle Stellair, Sensitive, Smart und Onyx mit zwei bis fünf Inneneinheiten an.',
      ja: 'Naitecは、Stellair、Sensitive、Smart、Onyxモデルのために、2〜5台の室内ユニットを備えたマルチスプリットソリューションを提供しています。',
      it: 'Naitec offre soluzioni multi-split per i modelli Stellair, Sensitive, Smart e Onyx con da due a cinque unità interne.',
    },
  },
  privacy_policy: {
    title: {
      sk: 'Naitec - Zásady ochrany osobných údajov',
      cs: 'Naitec - Zásady ochrany osobních údajů',
      en: 'Naitec - Privacy policy',
      hu: 'Naitec - Adatvédelmi irányelvek',
      pl: 'Naitec - Polityka prywatności',
      de: 'Naitec - Datenschutzerklärung',
      ja: 'Naitec - プライバシーポリシー',
      it: 'Naitec - Informativa sulla privacy',
    },
    description: {
      sk: 'Objavte svet inovatívnych klimatizácií a pokročilých technológií Naitec, ktoré prinášajú komfort a efektivitu do vášho domova.',
      cz: 'Objevte svět inovativních klimatizací a pokročilých technologií Naitec, které přinášejí komfort a efektivitu do vašeho domova.',
      en: 'Discover the world of innovative air conditioning and advanced Naitec technologies that bring comfort and efficiency to your home.',
      hu: 'Fedezze fel az innovatív Naitec klímaberendezések és fejlett technológiák világát, amelyek kényelmet és hatékonyságot hoznak otthonába.',
      pl: 'Odkryj świat innowacyjnych klimatyzatorów i zaawansowanych technologii Naitec, które zapewniają komfort i efektywność w Twoim domu.',
      de: 'Entdecken Sie die Welt der innovativen Klimaanlagen und fortschrittlichen Naitec-Technologien, die Komfort und Effizienz in Ihr Zuhause bringen.',
      ja: '革新的な空調システムと高度なNaitec技術の世界を発見し、快適さと効率性をあなたの家に届けます。',
      it: 'Scopri il mondo della climatizzazione innovativa e delle tecnologie avanzate di Naitec che portano comfort ed efficienza nella tua casa.',
    },
  },
  legal_notice: {
    title: {
      sk: 'Naitec - Právne informácie',
      cs: 'Naitec - Právní informace',
      en: 'Naitec - Legal Notice',
      hu: 'Naitec - Jogi nyilatkozat',
      pl: 'Naitec - Informacje prawne',
      de: 'Naitec - Impressum',
      ja: 'Naitec - 法的通知',
      it: 'Naitec - Avviso Legale',
    },
    description: {
      sk: 'Objavte svet inovatívnych klimatizácií a pokročilých technológií Naitec, ktoré prinášajú komfort a efektivitu do vášho domova.',
      cz: 'Objevte svět inovativních klimatizací a pokročilých technologií Naitec, které přinášejí komfort a efektivitu do vašeho domova.',
      en: 'Discover the world of innovative air conditioning and advanced Naitec technologies that bring comfort and efficiency to your home.',
      hu: 'Fedezze fel az innovatív Naitec klímaberendezések és fejlett technológiák világát, amelyek kényelmet és hatékonyságot hoznak otthonába.',
      pl: 'Odkryj świat innowacyjnych klimatyzatorów i zaawansowanych technologii Naitec, które zapewniają komfort i efektywność w Twoim domu.',
      de: 'Entdecken Sie die Welt der innovativen Klimaanlagen und fortschrittlichen Naitec-Technologien, die Komfort und Effizienz in Ihr Zuhause bringen.',
      ja: '革新的な空調システムと高度なNaitec技術の世界を発見し、快適さと効率性をあなたの家に届けます。',
      it: 'Scopri il mondo della climatizzazione innovativa e delle tecnologie avanzate di Naitec che portano comfort ed efficienza nella tua casa.',
    },
  },
  giveaway: {
    title: {
      sk: 'Naitec - Súťaž',
      cs: 'Naitec - Soutěž',
      en: 'Naitec - Giveaway',
      hu: 'Naitec - Nyereményjáték',
      pl: 'Naitec - Konkurs',
      de: 'Naitec - Gewinnspiel',
      ja: 'Naitec - プレゼントキャンペーン',
      it: 'Naitec - Concorso',
    },
    description: {
      sk: 'Zapojte sa do súťaže a vyhrajte skvelé ceny! Čaká na vás prémiová klimatizácia Naitec Stellair, nový iPhone 16 alebo AirPody 4. generácie.',
      cs: 'Zapojte se do soutěže a vyhrajte skvělé ceny! Můžete získat prémiovou klimatizaci Naitec Stellair, nový iPhone 16 nebo AirPody 4. generace.',
      en: 'Join the giveaway and win amazing prizes! You could win a premium Naitec Stellair air conditioner, the new iPhone 16, or 4th-generation AirPods.',
      hu: 'Vegyen részt a nyereményjátékban, és nyerjen fantasztikus díjakat! Nyerhet egy prémium Naitec Stellair klímát, egy új iPhone 16-ot vagy 4. generációs AirPods-ot.',
      pl: 'Weź udział w konkursie i wygraj wspaniałe nagrody! Do wygrania jest klimatyzator Naitec Stellair, nowy iPhone 16 lub AirPods 4. generacji.',
      de: 'Machen Sie beim Gewinnspiel mit und gewinnen Sie tolle Preise! Zu gewinnen gibt es eine Premium-Klimaanlage Naitec Stellair, das neue iPhone 16 oder AirPods der 4. Generation.',
      ja: 'プレゼントキャンペーンに参加して豪華賞品を手に入れよう！Naitec Stellairの高性能エアコン、新型iPhone 16、または第4世代のAirPodsが当たるチャンス！',
      it: 'Partecipa al concorso e vinci fantastici premi! In palio un climatizzatore Naitec Stellair, il nuovo iPhone 16 o gli AirPods di quarta generazione.',
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
  it: 'it-IT',
};
