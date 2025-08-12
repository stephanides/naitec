import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/src/shared/components/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Giveaway } from '@/src/pages';
import { getSeoDescription, getSeoTitle } from '@/src/shared/helpers';
import { NextSeo } from 'next-seo';
import { BASE_URL, HREF_LANGS } from '@/src/shared/constants';
import EmailPicker from '@/src/pages/Giveaway/EmailPicker';
import { useQuery } from 'react-query';
import { Box } from '@chakra-ui/react';
import { rem } from 'polished';
import { StellairSensitive } from '@/src/shared/components';

const pathsByLocale = {
  en: 'sutaz',
  sk: 'sutaz',
  cs: 'sutaz',
  hu: 'sutaz',
  pl: 'sutaz',
  de: 'sutaz',
  at: 'sutaz',
  ja: 'sutaz',
  it: 'sutaz',
};

const GiveawayPage = () => {
  const { locale } = useRouter();

  // const fetchData = async () => {
  //   const response = await fetch(`/api/giveaway`);

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data');
  //   }
  //   return response.json();
  // };

  // const { data, isLoading, isError } = useQuery<any>(['giveaway'], () =>
  //   fetchData()
  // );

  // if (isLoading) return <div>Loading...</div>;

  // const emails = data.data.map((item: any) => item.attributes.email);

  const emails = [
    'l.e.liptak @deniska_koscakova',
    'l.e.liptak @o_piskurova',
    'anickaizarikova @m_salayova',
    'anickaizarikova @lucia.hovancova',
    'leanaz299 @buckovaveronika',
    'leanaz299 @noravermesova',
    'leanaz299 @mellinka09',
    'leanaz299 @kika_sarisska',
    'leanaz299 @sonulik_s',
    'patricia_bujnakova @anickaizarikova',
    'patricia_bujnakova @belisova.elena',
    'patricia_bujnakova @valeria.timurova',
    'patricia_bujnakova @r_piskurka',
    'sabiosb @matka05',
    'i_w_o_nn_aaa @nikolaa8120',
    'nikolaa8120 @i_w_o_nn_aaa',
    'alenka.dsb @figulova.m',
    'michaelanavzdy @dyana.jacko',
    'michaelanavzdy @lydie.bon',
    'michaelanavzdy @allexis007',
    'michaelanavzdy @macugovaadka',
    'michaelanavzdy @simcaholztragerova',
    'tina.kika.kikuska @bekkyndela',
    'michaelanavzdy @monicka_giblakova_ vezmeš aj baby hm?😂😂',
    'michaelanavzdy @dyana.jacko ❤😎',
    'alzbetka.b @mariiieeen 🙌🏻',
    'alzbetka.b @lenka.soltesova 🙌🏻',
    'alzbetka.b @simur23 🙌🏻',
    'alzbetka.b @vik_horanska 🙌🏻',
    'alzbetka.b @kacka.stupnankova 🙌🏻',
    'andyka_es_veronika @nagyveronika99',
    'mariadudova @marienka_91🔥',
    'mariadudova @julinka_621 🔥',
    'petyakulasova @_spenerka_ 🔥❤️',
    'petyakulasova @make.up.by.maisha moja +1🔥❤️',
    'jankah13 @janka_halcisak ❤️',
    'jankah13 @pattyvaska ❤️',
    'jankah13 @9sima9 ❤️',
    'zanape @ondrej.zoo s dcérkou Zoe 😍',
    'mellinka09 @leanaz299',
    'buckovaveronika @julianabrinckova',
    'buckovaveronika @kika_sarisska 🍀',
    'blondinka_stanuska_ @annatarasova3415',
    'blondinka_stanuska_ @denisa3134',
    'majkasvacova @nela_smetanova',
    'majkasvacova @annarusnakova',
    'majkasvacova @veronikapetrik7',
    'majkasvacova @miriama.mikova',
    '_sanetrikova_ @_hockickovie_ 🍀❤️',
    'ivana_brillova @janka.hajduk_posvete ❤️',
    'lenka.hanisakova @tatianka_tanus  sis ❤️🔥',
    'make.up.by.maisha @petyakulasova 🩷',
    'tatiana_kmec @simona_cicha',
    'tatiana_kmec @mary_cvengros',
    'radkascavnicka @aanskrivda 😍',
    'radkascavnicka @martina.soltesova 😍',
    'liv_ist_ @anickaizarikova',
    'liv_ist_ @luciajass',
    'liv_ist_ @nikola_sln',
    'liv_ist_ @kristina.chovanova',
    'vancisinova_alexandra @viktoria_kac',
    'vancisinova_alexandra @klaudia_kacmarova',
    'janka_halcisak @miriama_faberova ❤️',
    'janka_halcisak @pattyvaska ❤️',
    'janka_halcisak @jankah13 ❤️',
    'liv_ist_ @norika.g',
    'liv_ist_ @sabina.busekova',
    'liv_ist_ @_anickaa8',
    'liv_ist_ @anet_.08',
    'galova.dana @vierkabuckova',
    'laura_ridillova @klara_m.m',
    'klara_m.m @laura_ridillova 💫',
    'prevuznakovasilvia @nikolaa8120',
    'prevuznakovasilvia @nikolaa8120',
    'j_kicurova @dominika_6456 ✨️',
    'dominika_6456 @j_kicurova 💋',
    'miro_hajzus @hajzusovasonka',
    'miro_hajzus @_filipova_bozena1',
    'hajzusovasonka @clarypp22',
    'hajzusovasonka @miro_hajzus',
    'tatiana_kmec @mary_cvengros 🥰',
    'tatiana_kmec @simona_cicha 🥰',
    'simona_cicha @tatiana_kmec',
    'tamara_rabatinova @nina_jedinakova',
    'liv_ist_ @radkaviktor',
    'liv_ist_ @nikola_sln',
    'liv_ist_ @luciajass',
    'liv_ist_ @evelin_876',
    'liv_ist_ @r_piskurka',
    'liv_ist_ @misismishell',
    'liv_ist_ @kristina.chovanova',
    'liv_ist_ @komarovabianca',
    'liv_ist_ @kej.crska',
    'komarovabianca @liv_ist_',
    'lenkamisenkova @hildadzanika 🍀',
    'lenkamisenkova @iwka_992',
    'lenkamisenkova @kika.cincila',
    'lenkamisenkova @kiwi_ivana',
    'lenkamisenkova @tatianahallayova_',
    'hildadzanika @lenkamisenkova',
  ];

  return (
    <>
      {/* <Layout> */}
      <EmailPicker
        emails={emails}
        forcedWinner={'anickaizarikova @m_salayova'}
      />
      {/* <Box>
          <StellairSensitive stellair sensitivePro />
        </Box> */}
      {/* </Layout> */}
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'sutazsk',
        'common',
        'contact',
      ])),
    },
  };
};

export default GiveawayPage;
