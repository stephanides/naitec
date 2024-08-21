import {
  AllYouNeed,
  AllYouNeedModalContent,
  CleanAir,
  Container,
  CoolantR32,
  EffectiveHeating,
  Glow,
  Label,
  NaitecApplication,
  NeueHaasGroteskDisplay,
  ProductHeadingButtons,
  StellairSensitive,
} from '@/src/shared/components';
import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import {
  Bolt,
  Heating,
  Info,
  LINEAR_GRADIENTS,
  LisaVoice,
  PlusExpand,
  Redirect,
  Verified,
  Virus,
} from '@/src/shared/design';
import { TechnicalParameters } from '@/src/shared/components/TechnicalParameters';
import { WhyInfoSwiper } from '@/src/shared/components/WhyInfoSwiper';
import { INTERNAL_ROUTES } from '@/src/shared/constants';
import { Element } from 'react-scroll';

export const Smart = () => {
  const { t } = useTranslation(['smart', 'common']);
  return (
    <Box>
      <Box>
        <Flex width="100%" justifyContent="center">
          <Label
            text={t('heading_label')}
            color="text.stellair"
            borderColor="rgba(134, 148, 156, 0.26)"
          />
        </Flex>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          position="relative"
          flexDir="column"
          overflow="hidden"
        >
          <NeueHaasGroteskDisplay
            background={LINEAR_GRADIENTS.smart}
            fontSize={{
              base: rem(60),
              xs: rem(72),
              md: rem(100),
              lg: rem(140),
              xl: rem(192),
            }}
            fontWeight={600}
            textTransform="uppercase"
            textAlign="center"
            backgroundClip="text"
            color="transparent"
            position="absolute"
            top={0}
          >
            Smart
          </NeueHaasGroteskDisplay>
          <Flex
            pt={{
              base: rem(24),
              xs: rem(20),
              md: rem(32),
              lg: rem(60),
              xl: rem(80),
              '2xl': rem(60),
            }}
            maxW={{
              base: rem(450),
              xs: rem(600),
              md: rem(800),
              lg: rem(1000),
              xl: rem(1400),
              '2xl': rem(1600),
            }}
            width={{
              base: rem(450),
              xs: rem(600),
              md: rem(800),
              lg: rem(1000),
              xl: rem(1400),
              '2xl': rem(1600),
            }}
            justify="center"
            overflow="hidden"
          >
            <img
              src="/images/smart/smart-main.png"
              style={{ width: '130%', height: 'auto', maxWidth: 'none' }}
              alt="Smart"
            />
          </Flex>
        </Flex>
        <ProductHeadingButtons color="background.smart" />
      </Box>
      <Flex
        mt={{ base: rem(54), md: rem(100) }}
        flexDir="column"
        alignItems="center"
        px={{ base: rem(16), xl: 0 }}
      >
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(20), md: rem(36) }}
          color="text.link"
          fontWeight={600}
        >
          {t('heading')}
        </NeueHaasGroteskDisplay>
        <NeueHaasGroteskDisplay
          maxW={rem(925)}
          fontSize={{ base: rem(18), md: rem(32) }}
          color="#8F8F8F"
          textAlign="center"
          fontWeight={600}
          mt={rem(12)}
        >
          {t('subheading')}
        </NeueHaasGroteskDisplay>
      </Flex>
      <Element id="content" name="content">
        <Box
          overflowX="hidden"
          pb={{ base: rem(60), lg: rem(160) }}
          pt={{ base: rem(100), lg: rem(176) }}
        >
          <Container>
            <WhyInfoSwiper
              title="Smart"
              color={LINEAR_GRADIENTS.smart}
              items={[
                {
                  image: '/images/smart/smart-why-1.jpg',
                  title: t('why_info_item_1_title'),
                  description: t('why_info_item_1_description'),
                },
                {
                  image: '/images/smart/smart-why-2.jpg',
                  title: t('why_info_item_2_title'),
                  description: t('why_info_item_2_description'),
                },
                {
                  image: '/images/smart/smart-why-3.jpg',
                  title: t('why_info_item_3_title'),
                  description: t('why_info_item_3_description'),
                },
                {
                  image: '/images/smart/smart-why-4.jpg',
                  title: t('why_info_item_4_title'),
                  description: t('why_info_item_4_description'),
                },
                {
                  image: '/images/smart/smart-why-5.jpg',
                  title: t('why_info_item_5_title'),
                  description: t('why_info_item_5_description'),
                },
              ]}
            />
          </Container>
        </Box>
      </Element>
      <Box
        pt={{ base: rem(60), md: rem(80), '2xl': rem(150) }}
        backgroundColor="background.primary"
        position="relative"
        overflow="hidden"
        top={rem(1)}
      >
        <EffectiveHeating
          color={LINEAR_GRADIENTS.smart}
          image1="/images/smart/effective-heating-1.png"
          image2="/images/smart/effective-heating-2.png"
        />
        <Glow />
      </Box>
      <NaitecApplication textColor={LINEAR_GRADIENTS.smart} />
      <Box pt={{ base: rem(50), md: rem(80), '2xl': rem(167) }}>
        <AllYouNeed
          color={LINEAR_GRADIENTS.smart}
          items={[
            {
              icon: <Virus />,
              title: t('all_you_need_item_1_title'),
              description: t('all_you_need_item_1_description'),
              interactiveIcon: <PlusExpand />,
              iconColor: '#84AC5E',
              expandContent: (
                <AllYouNeedModalContent
                  title={t('all_you_need_item_1_title')}
                  description={t('all_you_need_item_1_long_description')}
                  icon={<Virus />}
                  image="/images/common/self-cleaning.jpg"
                />
              ),
            },
            {
              icon: <Heating />,
              title: t('all_you_need_item_2_title'),
              description: t('all_you_need_item_2_description'),
            },
            {
              icon: <Verified />,
              title: t('all_you_need_item_3_title'),
              description: t('all_you_need_item_3_description'),
              interactiveIcon: <Info />,
              iconColor: '#84AC5E',
              expandContent: (
                <AllYouNeedModalContent
                  title={t('all_you_need_item_3_title')}
                  description={t('all_you_need_item_3_description')}
                  icon={<Verified />}
                  image="/images/common/warranty.jpg"
                />
              ),
            },
            {
              icon: <LisaVoice />,
              title: t('all_you_need_item_4_title'),
              description: t('all_you_need_item_4_description'),
              interactiveIcon: <Redirect />,
              iconColor: '#84AC5E',
              link: INTERNAL_ROUTES.LISA,
            },
            {
              icon: <Bolt />,
              title: t('all_you_need_item_5_title'),
              description: t('all_you_need_item_5_description'),
            },
          ]}
        />
      </Box>
      <Box>
        <CoolantR32 color={LINEAR_GRADIENTS.smart} />
      </Box>
      <Box my={{ base: rem(50), md: rem(80), '2xl': rem(152) }}>
        <CleanAir color={LINEAR_GRADIENTS.smart} />
      </Box>
      <Box>
        <TechnicalParameters
          label="Naitec Smart"
          color={LINEAR_GRADIENTS.smart}
          buttonColor="background.smart_light"
          params={[
            {
              chladiaciVykon: '3,5',
              vykurovaciVykon: '3,8',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: '22',
              hlucnostVonkajsejJednotky: '52',
              seer: '6,19',
              scop: '4,03',
              hmotnostVnutornejJednotky: '8,5',
              hmotnostVonkajsejJednotky: '22,5',
              rozmeryVnutornejJednotky: '792x292x201',
              rozmeryVonkajsejJednotky: '705x530x280',
              ionizator: true,
              nasavanieVzduchuZExterieru: false,
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: false,
              dlhodobeVykurovanie: 'do -25°C',
              aktivneCistenie: true,
              zaruka: `3 ${t('common:years_roky')}`,
              chladivo: 'R32',
            },
            {
              chladiaciVykon: '5',
              vykurovaciVykon: '5,6',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: '24',
              hlucnostVonkajsejJednotky: '56',
              seer: '7',
              scop: '4,19',
              hmotnostVnutornejJednotky: '11,5',
              hmotnostVonkajsejJednotky: '28',
              rozmeryVnutornejJednotky: '940x316x224mm',
              rozmeryVonkajsejJednotky: '785x300x555mm',
              ionizator: true,
              nasavanieVzduchuZExterieru: false,
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: false,
              dlhodobeVykurovanie: 'do -25°C',
              aktivneCistenie: true,
              zaruka: `3 ${t('common:years_roky')}`,
              chladivo: 'R32',
            },
            {
              chladiaciVykon: '7',
              vykurovaciVykon: '7,2',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: '27',
              hlucnostVonkajsejJednotky: '58',
              seer: '6.53',
              scop: '4,09',
              hmotnostVnutornejJednotky: '14',
              hmotnostVonkajsejJednotky: '39',
              rozmeryVnutornejJednotky: '1132x330x232mm',
              rozmeryVonkajsejJednotky: '900x700x350mm',
              ionizator: true,
              nasavanieVzduchuZExterieru: false,
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: false,
              dlhodobeVykurovanie: 'do -25°C',
              aktivneCistenie: true,
              zaruka: `3 ${t('common:years_roky')}`,
              chladivo: 'R32',
            },
          ]}
        />
      </Box>
      <StellairSensitive
        color="background.smart_light"
        gradientColor={LINEAR_GRADIENTS.smart}
      />
    </Box>
  );
};
