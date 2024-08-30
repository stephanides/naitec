import {
  AllYouNeed,
  AllYouNeedModalContent,
  CleanAir,
  Container,
  CoolantR32,
  DiffuseCooling,
  HowCoolingLooksLike,
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

export const Sensitive = () => {
  const { t } = useTranslation(['sensitive', 'common']);
  return (
    <Box>
      <Box>
        <Flex width="100%" justifyContent="center">
          <Label
            text={t('heading_label')}
            color="background.sensitive"
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
            background={LINEAR_GRADIENTS.sensitive}
            fontSize={{
              base: rem(52),
              xs: rem(68),
              md: rem(94),
              lg: rem(134),
              xl: rem(140),
              '3xl': rem(180),
            }}
            fontWeight={600}
            textTransform="uppercase"
            textAlign="center"
            backgroundClip="text"
            color="transparent"
            position="absolute"
            top={0}
          >
            Sensitive
          </NeueHaasGroteskDisplay>
          <Flex
            position="relative"
            pt={{
              base: rem(28),
              xs: rem(20),
              md: rem(32),
              lg: rem(60),
              xl: rem(54),
              '3xl': rem(50),
            }}
            maxW={{
              base: rem(546),
              xs: rem(780),
              md: rem(1040),
              lg: rem(1300),
              xl: rem(1500),
              '3xl': rem(2080),
            }}
            width={{
              base: rem(546),
              xs: rem(780),
              md: rem(1040),
              lg: rem(1300),
              xl: rem(1500),
              '3xl': rem(2080),
            }}
            justify="center"
          >
            <img
              src="/images/sensitive/sensitive-main.png"
              style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
              alt="Sensitive"
            />
          </Flex>
        </Flex>
        <ProductHeadingButtons
          hoverColor="background.sensitive_hover"
          color="background.sensitive"
        />
      </Box>
      <Flex
        mt={{ base: rem(54), md: rem(100) }}
        flexDir="column"
        alignItems="center"
        mb={{ base: rem(55), md: rem(158) }}
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
          overflow="hidden"
          pb={{ base: rem(60), lg: rem(160) }}
          background="background.primary"
          pt={{ base: rem(100), lg: rem(176) }}
          position="relative"
        >
          <Container>
            <WhyInfoSwiper
              light
              title="Sensitive"
              color={LINEAR_GRADIENTS.sensitive}
              items={[
                {
                  image: '/images/sensitive/sensitive-why-1.jpg',
                  title: t('why_info_item_1_title'),
                  description: t('why_info_item_1_description'),
                },
                {
                  image: '/images/sensitive/sensitive-why-2.jpg',
                  title: t('why_info_item_2_title'),
                  description: t('why_info_item_2_description'),
                },
                {
                  image: '/images/sensitive/sensitive-why-3.jpg',
                  title: t('why_info_item_3_title'),
                  description: t('why_info_item_3_description'),
                },
                {
                  image: '/images/sensitive/sensitive-why-4.jpg',
                  title: t('why_info_item_4_title'),
                  description: t('why_info_item_4_description'),
                },
                {
                  image: '/images/sensitive/sensitive-why-5.jpg',
                  title: t('why_info_item_5_title'),
                  description: t('why_info_item_5_description'),
                },
              ]}
            />
          </Container>
          <Box
            position="absolute"
            bottom={0}
            left={0}
            width="100%"
            transform="translateY(50%)"
            aspectRatio="1566/660"
            background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
            borderRadius="30%"
            filter="blur(100px)"
            pointerEvents="none"
          />
        </Box>
      </Element>
      <HowCoolingLooksLike
        color={LINEAR_GRADIENTS.sensitive}
        buttonColor="background.sensitive_light"
      />
      <DiffuseCooling color={LINEAR_GRADIENTS.sensitive} />
      <Box>
        <NaitecApplication blurOnBottom={false} />
      </Box>
      <Box
        pb={rem(180)}
        pt={{ base: rem(60), md: rem(80), xl: rem(168) }}
        top={rem(-1)}
        backgroundColor="background.primary"
        position="relative"
        overflow="hidden"
      >
        <Box position="relative" zIndex={2}>
          <CleanAir color={LINEAR_GRADIENTS.sensitive} imageOnLeft light />
        </Box>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width="100%"
          transform="translateY(50%)"
          aspectRatio="1566/660"
          background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
          borderRadius="30%"
          filter="blur(100px)"
          pointerEvents="none"
          zIndex={1}
        />
      </Box>
      <Box pt={{ base: rem(60), md: rem(80), xl: rem(168) }}>
        <AllYouNeed
          color={LINEAR_GRADIENTS.sensitive}
          items={[
            {
              icon: <Virus />,
              title: t('all_you_need_item_1_title'),
              description: t('all_you_need_item_1_description'),
              interactiveIcon: <PlusExpand />,
              iconColor: '#8E5EAC',
              iconColorHover: '#634179',
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
              iconColor: '#8E5EAC',
              iconColorHover: '#634179',
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
              iconColor: '#8E5EAC',
              iconColorHover: '#634179',
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
        <CoolantR32 color={LINEAR_GRADIENTS.sensitive} />
      </Box>

      <Box pt={{ base: rem(60), md: rem(80), xl: rem(168) }}>
        <TechnicalParameters
          label="Naitec Sensitive"
          color={LINEAR_GRADIENTS.sensitive}
          hoverColor="background.sensitive_hover"
          buttonColor="background.sensitive_light"
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
              dlhodobeVykurovanie: '-25°C',
              aktivneCistenie: true,
              zaruka: `3 ${t('common:years_roky')}`,
              chladivo: 'R32',
            },
          ]}
        />
      </Box>
      <StellairSensitive
        color="background.sensitive_light"
        hoverColor="background.sensitive_hover"
        gradientColor={LINEAR_GRADIENTS.sensitive}
        stellair
        sensitivePro
      />
    </Box>
  );
};
