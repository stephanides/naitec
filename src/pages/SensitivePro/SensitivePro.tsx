import {
  AllYouNeed,
  AllYouNeedModalContent,
  CleanAir,
  Container,
  CoolantR32,
  DiffuseCooling,
  EffectiveHeating,
  Glow,
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

export const SensitivePro = () => {
  const { t } = useTranslation(['sensitivepro', 'common']);
  return (
    <Box>
      <Box>
        <Flex width="100%" justifyContent="center">
          <Label
            text={t('heading_label')}
            color="text.sensitive_pro"
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
            background={LINEAR_GRADIENTS.sensitive_pro}
            fontSize={{
              base: rem(42),
              xs: rem(60),
              md: rem(90),
              lg: rem(110),
              xl: rem(134),
            }}
            fontWeight={600}
            textTransform="uppercase"
            textAlign="center"
            backgroundClip="text"
            color="transparent"
            position="absolute"
            top={0}
          >
            Sensitive Pro
          </NeueHaasGroteskDisplay>
          <Flex
            position="relative"
            pt={{
              base: rem(4),
              xs: rem(4),
              md: rem(32),
              lg: rem(32),
              xl: rem(20),
              '2xl': rem(4),
            }}
            maxW={{
              base: rem(546),
              xs: rem(780),
              md: rem(1040),
              lg: rem(1300),
              xl: rem(1820),
              '2xl': rem(2080),
            }}
            width={{
              base: rem(546),
              xs: rem(780),
              md: rem(1040),
              lg: rem(1300),
              xl: rem(1820),
              '2xl': rem(2080),
            }}
            justify="center"
            overflow="hidden"
          >
            <Image
              src="/images/sensitive-pro/sensitive-pro-main.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
              alt="Sensitive"
              placeholder="blur"
              blurDataURL="/images/sensitive-pro/sensitive-pro-main-placeholder.png"
            />
          </Flex>
        </Flex>
        <ProductHeadingButtons
          hoverColor="background.sensitive_pro_hover"
          color="background.sensitive_pro"
        />
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
          overflow="hidden"
          pb={rem(60)}
          pt={{ base: rem(100), lg: rem(176) }}
          position="relative"
        >
          <Container>
            <WhyInfoSwiper
              title="Sensitive Pro"
              color={LINEAR_GRADIENTS.sensitive_pro}
              items={[
                {
                  image: '/images/sensitive-pro/sensitive-pro-why-1.jpg',
                  title: t('why_info_item_1_title'),
                  description: t('why_info_item_1_description'),
                },
                {
                  image: '/images/sensitive-pro/sensitive-pro-why-2.jpg',
                  title: t('why_info_item_2_title'),
                  description: t('why_info_item_2_description'),
                },
                {
                  image: '/images/sensitive-pro/sensitive-pro-why-3.jpg',
                  title: t('why_info_item_3_title'),
                  description: t('why_info_item_3_description'),
                },
                {
                  image: '/images/sensitive-pro/sensitive-pro-why-4.jpg',
                  title: t('why_info_item_4_title'),
                  description: t('why_info_item_4_description'),
                },
                {
                  image: '/images/sensitive-pro/sensitive-pro-why-5.jpg',
                  title: t('why_info_item_5_title'),
                  description: t('why_info_item_5_description'),
                },
                {
                  image: '/images/sensitive-pro/sensitive-pro-why-6.jpg',
                  title: t('why_info_item_6_title'),
                  description: t('why_info_item_6_description'),
                },
              ]}
            />
          </Container>
        </Box>
      </Element>

      <HowCoolingLooksLike
        color={LINEAR_GRADIENTS.sensitive_pro}
        buttonColor="background.sensitive_pro_light"
      />

      <Box
        background="background.primary"
        pt={{ base: rem(60), lg: rem(144) }}
        pb={{ base: rem(60), lg: rem(165) }}
        position="relative"
        overflow="hidden"
      >
        <Glow />
        <DiffuseCooling light color={LINEAR_GRADIENTS.sensitive_pro} />
        <NaitecApplication
          textColor={LINEAR_GRADIENTS.sensitive_pro}
          blurOnBottom={true}
          withoutBlur
        />
        <Box position="relative">
          <Box position={'relative'} zIndex={2}>
            <EffectiveHeating
              color={LINEAR_GRADIENTS.sensitive_pro}
              image1="/images/sensitive-pro/effective-heating-1.jpg"
              image2="/images/sensitive-pro/effective-heating-2.jpg"
              blurOnBottom={true}
            />
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
      </Box>
      <Box mt={{ base: rem(60), md: rem(80), lg: rem(165) }}>
        <CleanAir color={LINEAR_GRADIENTS.sensitive_pro} imageOnLeft />
      </Box>
      <Box pt={{ base: rem(60), md: rem(80), lg: rem(170) }}>
        <AllYouNeed
          color={LINEAR_GRADIENTS.sensitive_pro}
          items={[
            {
              icon: <Virus />,
              title: t('all_you_need_item_1_title'),
              description: t('all_you_need_item_1_description'),
              interactiveIcon: <PlusExpand />,
              iconColor: '#D54C4C',
              iconColorHover: 'background.sensitive_pro_hover',
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
              iconColor: '#D54C4C',
              iconColorHover: 'background.sensitive_pro_hover',
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
              iconColor: '#D54C4C',
              iconColorHover: 'background.sensitive_pro_hover',
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
        <CoolantR32 color={LINEAR_GRADIENTS.sensitive_pro} />
      </Box>

      <Box mt={{ base: rem(60), md: rem(80), lg: rem(100) }}>
        <TechnicalParameters
          label="Naitec Sensitive Pro"
          color={LINEAR_GRADIENTS.sensitive_pro}
          hoverColor="background.sensitive_pro_hover"
          buttonColor="background.sensitive_pro_light"
          params={[
            {
              chladiaciVykon: '3,5',
              vykurovaciVykon: '4,2',
              energetickaTrieda: 'A+++',
              hlucnostVnutornejJednotky: '19',
              hlucnostVonkajsejJednotky: '52',
              seer: '8,7',
              scop: '4,7',
              hmotnostVnutornejJednotky: '8,5',
              hmotnostVonkajsejJednotky: '24,5',
              rozmeryVnutornejJednotky: '827x299x201mm',
              rozmeryVonkajsejJednotky: '705x530x280mm',
              ionizator: true,
              nasavanieVzduchuZExterieru: false,
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: true,
              dlhodobeVykurovanie: '-35°C',
              aktivneCistenie: true,
              zaruka: `5 ${t('common:years_rokov')}`,
              chladivo: 'R32',
            },
          ]}
        />
      </Box>
      <StellairSensitive
        color="background.sensitive_pro_light"
        hoverColor="background.sensitive_pro_hover"
        gradientColor={LINEAR_GRADIENTS.sensitive_pro}
        stellair
        sensitive
      />
    </Box>
  );
};
