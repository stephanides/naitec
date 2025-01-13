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
import { BUNNY_CDN_URL, INTERNAL_ROUTES } from '@/src/shared/constants';
import { Element } from 'react-scroll';

export const Sensitive = () => {
  const { t } = useTranslation(['sensitive', 'common']);
  return (
    <Box>
      <Box>
        <Flex
          width="100%"
          justifyContent="center"
          animation={'fadeUp .5s ease-out'}
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
        >
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
          <Flex width="100%" justifyContent="center">
            <NeueHaasGroteskDisplay
              background={LINEAR_GRADIENTS.sensitive}
              backgroundPosition="left center"
              backgroundSize="600% 200%"
              zIndex={1}
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
              Sensitive
            </NeueHaasGroteskDisplay>
          </Flex>
          <Flex
            position="relative"
            mt={{
              base: rem(20),
              xs: rem(20),
              md: rem(20),
              lg: rem(46),
              xl: rem(40),
              '3xl': rem(40),
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
            aspectRatio="75 / 25"
          >
            <Box
              as="video"
              src={`${BUNNY_CDN_URL}/sensitive/sensitive_4.mp4`}
              playsInline
              webkit-playsinline="true"
              muted
              autoPlay
              controls={false}
              sx={{
                position: 'absolute',
                top: 0,
                maxWidth: 'none',
                left: 0,
                width: '100%',
                height: 'auto',
                userSelect: 'none',
              }}
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
                  image: `${BUNNY_CDN_URL}/sensitive/sensitive-why-1.jpg`,
                  title: t('why_info_item_1_title'),
                  description: t('why_info_item_1_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive/sensitive-why-2.jpg`,
                  title: t('why_info_item_2_title'),
                  description: t('why_info_item_2_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive/sensitive-why-3.jpg`,
                  title: t('why_info_item_3_title'),
                  description: t('why_info_item_3_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive/sensitive-why-4.jpg`,
                  title: t('why_info_item_4_title'),
                  description: t('why_info_item_4_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive/sensitive-why-5.jpg`,
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
        videos={[
          { url: `${BUNNY_CDN_URL}/videos/sensitive/2.mp4`, duration: 14 },
          { url: `${BUNNY_CDN_URL}/videos/sensitive/1.mp4`, duration: 12 },
          { url: `${BUNNY_CDN_URL}/videos/sensitive/3.mp4`, duration: 10 },
        ]}
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
              iconColor: '#8E5EAC',
              iconColorHover: '#634179',
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
              chladiaciVykon: '3,6',
              vykurovaciVykon: '3,8',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: '18',
              hlucnostVonkajsejJednotky: '52',
              seer: '6,7',
              scop: '4',
              hmotnostVnutornejJednotky: '9,5',
              hmotnostVonkajsejJednotky: '22,5',
              rozmeryVnutornejJednotky: '845x299x207',
              rozmeryVonkajsejJednotky: '705x530x280',
              ionizator: true,
              nasavanieVzduchuZExterieru: false,
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: true,
              dlhodobeVykurovanie: '-15°C',
              aktivneCistenie: true,
              zaruka: `5 ${t('common:years_rokov')}`,
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
