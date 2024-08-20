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
  LISA: '/lisa-voice-control',
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
  CONTACT: '+421 905 554 553',
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
    mainImage: '/images/stellair/stellair-main.png',
    supportImage: '/images/support/stellair-support.png',
    href: INTERNAL_ROUTES.STELLAIR_SUPPORT,
    color: LINEAR_GRADIENTS.stellair,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'video_manuals',
        items: [
          {
            title: 'Čo ak nesprávne odteká kondenz (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Čo robiť ak klimatizácia zapácha? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Ako používať klímu aby som neprechladol? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
        ],
      },
    ],
  },
  {
    id: 'sensitive',
    title: 'Sensitive',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: '/images/sensitive/sensitive-main.png',
    supportImage: '/images/support/sensitive-support.png',
    href: INTERNAL_ROUTES.SENSITIVE_SUPPORT,
    color: LINEAR_GRADIENTS.sensitive,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'video_manuals',
        items: [
          {
            title: 'Čo ak nesprávne odteká kondenz (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Čo robiť ak klimatizácia zapácha? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Ako používať klímu aby som neprechladol? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
        ],
      },
    ],
  },
  {
    id: 'smart',
    title: 'Smart',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: '/images/smart/smart-main.png',
    supportImage: '/images/support/smart-support.png',
    href: INTERNAL_ROUTES.SMART_SUPPORT,
    color: LINEAR_GRADIENTS.smart,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'video_manuals',
        items: [
          {
            title: 'Čo ak nesprávne odteká kondenz (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Čo robiť ak klimatizácia zapácha? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Ako používať klímu aby som neprechladol? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
        ],
      },
    ],
  },
  {
    id: 'onyx',
    title: 'Onyx',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: '/images/onyx/onyx-main.png',
    supportImage: '/images/support/onyx-support.png',
    href: INTERNAL_ROUTES.ONYX_SUPPORT,
    color: LINEAR_GRADIENTS.onyx,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'video_manuals',
        items: [
          {
            title: 'Čo ak nesprávne odteká kondenz (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Čo robiť ak klimatizácia zapácha? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Ako používať klímu aby som neprechladol? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
        ],
      },
    ],
  },
  {
    id: 'sensitive-pro',
    title: 'Sensitive Pro',
    type: 'air_conditioners' as PRODUCT_TYPE,
    mainImage: '/images/sensitive-pro/sensitive-pro-main.png',
    supportImage: '/images/support/sensitive-pro-support.png',
    href: INTERNAL_ROUTES.SENSITIVE_PRO_SUPPORT,
    color: LINEAR_GRADIENTS.sensitive_pro,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'video_manuals',
        items: [
          {
            title: 'Čo ak nesprávne odteká kondenz (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Čo robiť ak klimatizácia zapácha? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Ako používať klímu aby som neprechladol? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
        ],
      },
    ],
  },
  {
    id: 'fireplace-diffuser',
    title: 'fireplace',
    type: 'household' as PRODUCT_TYPE,
    mainImage: '/images/fireplace/fireplace-main.png',
    supportImage: '/images/support/fireplace-support.png',
    href: INTERNAL_ROUTES.FIREPLACE_DIFFUSER_SUPPORT,
    supportDocuments: [
      {
        title: 'remote_control_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'video_manuals',
        items: [
          {
            title: 'Čo ak nesprávne odteká kondenz (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Čo robiť ak klimatizácia zapácha? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Ako používať klímu aby som neprechladol? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
        ],
      },
    ],
  },
  {
    id: 'lisa',
    title: 'Lisa',
    type: 'accessories' as PRODUCT_TYPE,
    mainImage: '/images/lisa/lisa-main.png',
    supportImage: '/images/support/lisa-support.png',
    href: INTERNAL_ROUTES.LISA_SUPPORT,
    supportDocuments: [
      {
        title: 'naitec_application_manual',
        items: [
          {
            title: 'Slovenčina',
            href: '/documents/remote_control_manual_sk.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'English',
            href: '/documents/remote_control_manual_en.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Magyar',
            href: '/documents/remote_control_manual_hu.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
          {
            title: 'Deutsch',
            href: '/documents/remote_control_manual_de.pdf',
            type: 'document' as DOCUMENT_TYPE,
            date: '31/7/2024',
            size: '1.5 Mb',
          },
        ],
      },
      {
        title: 'video_manuals',
        items: [
          {
            title: 'Čo ak nesprávne odteká kondenz (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Inštalácia a nastavenie aplikácie AC Freedom (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Čo robiť ak klimatizácia zapácha? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
          {
            title: 'Ako používať klímu aby som neprechladol? (Slovenčina)',
            href: 'https://www.youtube.com/watch?v=dq7qbjXkvqA',
            type: 'video' as DOCUMENT_TYPE,
            date: '31/7/2024',
          },
        ],
      },
    ],
  },
];
