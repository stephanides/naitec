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
import { BUNNY_CDN_URL, INTERNAL_ROUTES } from '@/src/shared/constants';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export const SensitivePro = () => {
  const { t } = useTranslation(['sensitivepro', 'common']);
  const { ref: headingView, inView: headingInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

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
          <Flex width="100%" justifyContent="center">
            <NeueHaasGroteskDisplay
              background={LINEAR_GRADIENTS.sensitive_pro}
              backgroundPosition="left center"
              backgroundSize="600% 200%"
              zIndex={1}
              fontSize={{
                base: rem(42),
                xs: rem(60),
                md: rem(90),
                lg: rem(100),
                xl: rem(124),
                '3xl': rem(150),
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
              Sensitive Pro
            </NeueHaasGroteskDisplay>
          </Flex>
          <Flex
            position="relative"
            mt={{
              base: rem(8),
              xs: rem(8),
              md: rem(24),
              lg: rem(12),
              xl: rem(24),
              '3xl': rem(4),
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
            aspectRatio="75 / 23"
            overflow="hidden"
          >
            <Box
              as="video"
              src={`${BUNNY_CDN_URL}/sensitive-pro/sensitive_pro_1.mp4`}
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
          hoverColor="background.sensitive_pro_hover"
          color="background.sensitive_pro"
        />
      </Box>
      <Flex
        mt={{ base: rem(54), md: rem(100) }}
        flexDir="column"
        alignItems="center"
        px={{ base: rem(16), xl: 0 }}
        ref={headingView}
      >
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(20), md: rem(36) }}
          color="text.link"
          opacity={headingInView ? 1 : 0}
          transform={headingInView ? 'translateY(0)' : 'translateY(100%)'}
          transition="all 1s ease-out"
          fontWeight={600}
        >
          {t('heading')}
        </NeueHaasGroteskDisplay>
        <NeueHaasGroteskDisplay
          maxW={rem(925)}
          fontSize={{ base: rem(18), md: rem(32) }}
          color="#8F8F8F"
          textAlign="center"
          opacity={headingInView ? 1 : 0}
          transform={headingInView ? 'translateY(0)' : 'translateY(100%)'}
          transition="all 1.3s ease-out"
          fontWeight={600}
          mt={rem(12)}
          sx={{ strong: { fontWeight: 700, color: 'text.link' } }}
          dangerouslySetInnerHTML={{ __html: t('subheading') }}
        />
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
                  image: `${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-why-1.jpg`,
                  title: t('why_info_item_1_title'),
                  description: t('why_info_item_1_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-why-2.jpg`,
                  title: t('why_info_item_2_title'),
                  description: t('why_info_item_2_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-why-3.jpg`,
                  title: t('why_info_item_3_title'),
                  description: t('why_info_item_3_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-why-4.jpg`,
                  title: t('why_info_item_4_title'),
                  description: t('why_info_item_4_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-why-5.jpg`,
                  title: t('why_info_item_5_title'),
                  description: t('why_info_item_5_description'),
                },
                {
                  image: `${BUNNY_CDN_URL}/sensitive-pro/sensitive-pro-why-6.jpg`,
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
        videos={[
          { url: `${BUNNY_CDN_URL}/videos/sensitive-pro/2.mp4`, duration: 11 },
          { url: `${BUNNY_CDN_URL}/videos/sensitive-pro/1.mp4`, duration: 12 },
          { url: `${BUNNY_CDN_URL}/videos/sensitive-pro/3.mp4`, duration: 12 },
        ]}
      />

      <Box
        background="background.primary"
        pt={{ base: rem(60), lg: rem(144) }}
        pb={{ base: rem(60), lg: rem(165) }}
        position="relative"
        overflow="hidden"
      >
        <Glow />
        <DiffuseCooling
          light
          color={LINEAR_GRADIENTS.sensitive_pro}
          productName="Sensitive Pro"
        />
        <NaitecApplication
          textColor={LINEAR_GRADIENTS.sensitive_pro}
          blurOnBottom={true}
          withoutBlur
        />
        <Box position="relative">
          <Box position={'relative'} zIndex={2}>
            <EffectiveHeating
              color={LINEAR_GRADIENTS.sensitive_pro}
              image1={`${BUNNY_CDN_URL}/sensitive-pro/effective-heating-1.jpg`}
              image2={`${BUNNY_CDN_URL}/sensitive-pro/effective-heating-2.jpg`}
              blurOnBottom={true}
              label={t('effective_heating_label')}
              title={t('effective_heating_title')}
              productName="Sensitive Pro"
              description={t('effective_heating_description_1')}
              description2={t('effective_heating_description_2')}
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
              iconColor: '#D54C4C',
              iconColorHover: 'background.sensitive_pro_hover',
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
              hlucnostVnutornejJednotky: '18',
              hlucnostVonkajsejJednotky: '52',
              seer: '8,7',
              scop: '4,7',
              hmotnostVnutornejJednotky: '8,5',
              hmotnostVonkajsejJednotky: '24,5',
              rozmeryVnutornejJednotky: '827x299x201mm',
              rozmeryVonkajsejJednotky: '705x530x280mm',
              ionizator: false,
              uvcLampa: true,
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
