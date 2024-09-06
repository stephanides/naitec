import {
  AllYouNeed,
  AllYouNeedModalContent,
  CleanAir,
  Container,
  CoolantR32,
  DiffuseCooling,
  FreshAirSwiper,
  Glow,
  HowCoolingLooksLike,
  Label,
  NaitecApplication,
  NeueHaasGroteskDisplay,
  ProductHeadingButtons,
  StellairSensitive,
  TechnicalParameters,
  WhyInfoSwiper,
} from '@/src/shared/components';
import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
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
import { BUNNY_CDN_URL, INTERNAL_ROUTES } from '@/src/shared/constants';
import { Element } from 'react-scroll';

export const Stellair = () => {
  const { t } = useTranslation(['stellair', 'common']);
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
            background="linear-gradient(to right, #344F5F, #6CA5C5)"
            backgroundPosition="left center"
            backgroundSize="600% 200%"
            fontSize={{
              base: rem(60),
              xs: rem(72),
              md: rem(100),
              lg: rem(140),
              xl: rem(150),
              '3xl': rem(192),
            }}
            fontWeight={600}
            textTransform="uppercase"
            textAlign="center"
            backgroundClip="text"
            color="transparent"
            position="absolute"
            top={0}
            transition="all .3s ease-out"
            animation="backgroundAnimation 4s linear infinite"
            sx={{
              '@keyframes backgroundAnimation': {
                '0%': {
                  backgroundPosition: 'left center',
                },
                '50%': {
                  backgroundPosition: 'right center',
                },
                '100%': {
                  backgroundPosition: 'left center',
                },
              },
            }}
          >
            Stellair
          </NeueHaasGroteskDisplay>

          <Flex
            position="relative"
            animation={'fadeUp 1s ease-in-out'}
            sx={{
              '@keyframes fadeUp': {
                '0%': {
                  opacity: 0,
                  transform: 'translateY(60px)',
                },
                '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
            mt={{
              base: rem(28),
              xs: rem(20),
              md: rem(32),
              lg: rem(60),
              xl: rem(54),
              '3xl': rem(60),
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
            aspectRatio="75 / 23"
            justify="center"
            overflow="hidden"
          >
            <img
              src={`${BUNNY_CDN_URL}/stellair/stellair-main.png`}
              style={{ width: '100%', height: 'auto', maxWidth: 'none' }}
              alt="Stellair"
            />
          </Flex>
        </Flex>
        <ProductHeadingButtons
          hoverColor="background.stellair_hover"
          color="text.stellair"
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
              title="Stellair"
              color={LINEAR_GRADIENTS.stellair}
              items={[
                {
                  image: `${BUNNY_CDN_URL}/stellair/stellair-why-1.jpg`,
                  title: t('why_info_item_1_title'),
                  description: t('why_info_item_1_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/stellair/stellair-why-2.jpg`,
                  title: t('why_info_item_2_title'),
                  description: t('why_info_item_2_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/stellair/stellair-why-3.jpg`,
                  title: t('why_info_item_3_title'),
                  description: t('why_info_item_3_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/stellair/stellair-why-4.jpg`,
                  title: t('why_info_item_4_title'),
                  description: t('why_info_item_4_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/stellair/stellair-why-5.jpg`,
                  title: t('why_info_item_5_title'),
                  description: t('why_info_item_5_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/stellair/stellair-why-6.jpg`,
                  title: t('why_info_item_6_title'),
                  description: t('why_info_item_6_description'),
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
      <Box>
        <HowCoolingLooksLike
          color={LINEAR_GRADIENTS.stellair}
          buttonColor="background.stellair"
          videos={[
            { url: `${BUNNY_CDN_URL}/videos/stellair/2.mp4`, duration: 14 },
            { url: `${BUNNY_CDN_URL}/videos/stellair/1.mp4`, duration: 12 },
            { url: `${BUNNY_CDN_URL}/videos/stellair/3.mp4`, duration: 11 },
          ]}
        />
      </Box>
      <Box pb={{ base: rem(60), lg: rem(160) }} overflow="hidden">
        <Container>
          <FreshAirSwiper
            color={LINEAR_GRADIENTS.stellair}
            title={t('fresh_air_title')}
            label={t('fresh_air_label')}
            items={[
              {
                image: `${BUNNY_CDN_URL}/stellair/fresh_air_2.jpg`,
                title: t('fresh_air_item_2_title'),
                description: t('fresh_air_item_2_description'),
              },
              {
                image: `${BUNNY_CDN_URL}/stellair/fresh_air_1.jpg`,
                title: t('fresh_air_item_1_title'),
                description: t('fresh_air_item_1_description'),
              },
              {
                image: `${BUNNY_CDN_URL}/stellair/fresh_air_3.jpg`,
                title: t('fresh_air_item_3_title'),
                description: t('fresh_air_item_3_description'),
              },
              {
                image: `${BUNNY_CDN_URL}/stellair/fresh_air_2.jpg`,
                title: t('fresh_air_item_2_title'),
                description: t('fresh_air_item_2_description'),
              },
              {
                image: `${BUNNY_CDN_URL}/stellair/fresh_air_1.jpg`,
                title: t('fresh_air_item_1_title'),
                description: t('fresh_air_item_1_description'),
              },
              {
                image: `${BUNNY_CDN_URL}/stellair/fresh_air_3.jpg`,
                title: t('fresh_air_item_3_title'),
                description: t('fresh_air_item_3_description'),
              },
            ]}
          />
        </Container>
      </Box>
      <Box
        background="background.primary"
        pt={{ base: rem(50), md: rem(80), xl: rem(152) }}
        position="relative"
        overflow="hidden"
        top={rem(1)}
      >
        <Glow />
        <DiffuseCooling light color={LINEAR_GRADIENTS.stellair} />
      </Box>
      <NaitecApplication />
      <Box mt={{ base: rem(50), md: rem(80), '2xl': rem(167) }}>
        <AllYouNeed
          color={LINEAR_GRADIENTS.stellair}
          items={[
            {
              icon: <Virus />,
              title: t('all_you_need_item_1_title'),
              description: t('all_you_need_item_1_description'),
              interactiveIcon: <PlusExpand />,
              iconColor: '#6093AF',
              iconColorHover: 'background.stellair_hover',
              expandContent: (
                <AllYouNeedModalContent
                  title={t('all_you_need_item_1_title')}
                  description={t('all_you_need_item_1_long_description')}
                  icon={<Virus />}
                  image={`${BUNNY_CDN_URL}/common/self-cleaning.jpg`}
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
              iconColor: '#6093AF',
              iconColorHover: 'background.stellair_hover',
              expandContent: (
                <AllYouNeedModalContent
                  title={t('all_you_need_item_3_title')}
                  description={t('all_you_need_item_3_long_description')}
                  icon={<Verified />}
                  image={`${BUNNY_CDN_URL}/common/warranty.jpg`}
                />
              ),
            },
            {
              icon: <LisaVoice />,
              title: t('all_you_need_item_4_title'),
              description: t('all_you_need_item_4_description'),
              interactiveIcon: <Redirect />,
              iconColor: '#6093AF',
              iconColorHover: 'background.stellair_hover',
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
        <CoolantR32 color={LINEAR_GRADIENTS.stellair} />
      </Box>
      <Box my={{ base: rem(69), md: rem(90), '2xl': rem(152) }}>
        <CleanAir color={LINEAR_GRADIENTS.stellair} />
      </Box>
      <Box>
        <TechnicalParameters
          label="Naitec Stellair"
          params={[
            {
              chladiaciVykon: '3,7',
              vykurovaciVykon: '3,8',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: '18',
              hlucnostVonkajsejJednotky: '52',
              seer: '6,2',
              scop: '4',
              hmotnostVnutornejJednotky: '11,5',
              hmotnostVonkajsejJednotky: '22,5',
              rozmeryVnutornejJednotky: '960x305x219mm',
              rozmeryVonkajsejJednotky: '705x530x280mm',
              ionizator: true,
              nasavanieVzduchuZExterieru: true,
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: true,
              dlhodobeVykurovanie: '-15°C',
              aktivneCistenie: true,
              zaruka: `5 ${t('common:years_rokov')}`,
              chladivo: 'R32',
            },
          ]}
          color={LINEAR_GRADIENTS.stellair}
        />
      </Box>
      <StellairSensitive
        hoverColor="background.stellair_hover"
        color="background.stellair"
        gradientColor={LINEAR_GRADIENTS.stellair}
        sensitive
        sensitivePro
      />
    </Box>
  );
};
