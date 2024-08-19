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

export const Onyx = () => {
  const { t } = useTranslation(['onyx', 'common']);
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
        >
          <NeueHaasGroteskDisplay
            background={LINEAR_GRADIENTS.onyx}
            fontSize={rem(192)}
            fontWeight={600}
            textTransform="uppercase"
            textAlign="center"
            backgroundClip="text"
            color="transparent"
            position="absolute"
            top={0}
          >
            Onyx
          </NeueHaasGroteskDisplay>
          <Flex
            position="relative"
            pt={rem(60)}
            maxW={rem(1600)}
            width="100%"
            minH={rem(480)}
            justify="center"
            overflow="hidden"
          >
            <img
              src="/images/onyx/onyx-main.png"
              style={{ width: '130%', height: 'auto', maxWidth: 'none' }}
              alt="Onyx"
            />
          </Flex>
        </Flex>
        <ProductHeadingButtons color="text.onyx" />
      </Box>
      <Flex mt={rem(200)} flexDir="column" alignItems="center">
        <NeueHaasGroteskDisplay
          fontSize={rem(36)}
          color="text.link"
          fontWeight={600}
        >
          {t('heading')}
        </NeueHaasGroteskDisplay>
        <NeueHaasGroteskDisplay
          maxW={rem(925)}
          fontSize={rem(32)}
          color="#8F8F8F"
          textAlign="center"
          fontWeight={600}
          mt={rem(12)}
        >
          {t('subheading')}
        </NeueHaasGroteskDisplay>
      </Flex>
      <Element id="content" name="content">
        <Box overflowX="hidden" mb={rem(160)} pt={rem(176)}>
          <Container>
            <WhyInfoSwiper
              title="Onyx"
              color={LINEAR_GRADIENTS.onyx}
              items={[
                {
                  image: '/images/onyx/onyx-why-1.jpg',
                  title: t('why_info_item_1_title'),
                  description: t('why_info_item_1_description'),
                },
                {
                  image: '/images/onyx/onyx-why-2.jpg',
                  title: t('why_info_item_2_title'),
                  description: t('why_info_item_2_description'),
                },
                {
                  image: '/images/onyx/onyx-why-3.jpg',
                  title: t('why_info_item_3_title'),
                  description: t('why_info_item_3_description'),
                },
                {
                  image: '/images/onyx/onyx-why-4.jpg',
                  title: t('why_info_item_4_title'),
                  description: t('why_info_item_4_description'),
                },
                {
                  image: '/images/onyx/onyx-why-5.jpg',
                  title: t('why_info_item_5_title'),
                  description: t('why_info_item_5_description'),
                },
              ]}
            />
          </Container>
        </Box>
      </Element>
      <Box
        py={rem(150)}
        backgroundColor="background.primary"
        position="relative"
        overflow="hidden"
        top={rem(1)}
      >
        <EffectiveHeating
          color={LINEAR_GRADIENTS.onyx}
          image1="/images/onyx/effective-heating-1.png"
          image2="/images/onyx/effective-heating-2.png"
        />
        <Glow />
      </Box>
      <NaitecApplication />
      <Box pt={rem(170)}>
        <AllYouNeed
          color={LINEAR_GRADIENTS.onyx}
          items={[
            {
              icon: <Virus />,
              title: t('all_you_need_item_1_title'),
              description: t('all_you_need_item_1_description'),
              interactiveIcon: <PlusExpand />,
              iconColor: '#5A5A5A',
              expandContent: (
                <AllYouNeedModalContent
                  title={t('all_you_need_item_1_title')}
                  description={t('all_you_need_item_1_description')}
                  icon={<Virus />}
                  image="/images/common/virus.png"
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
              iconColor: '#5A5A5A',
              expandContent: (
                <AllYouNeedModalContent
                  title={t('all_you_need_item_3_title')}
                  description={t('all_you_need_item_3_description')}
                  icon={<Virus />}
                  image="/images/common/virus.png"
                />
              ),
            },
            {
              icon: <LisaVoice />,
              title: t('all_you_need_item_4_title'),
              description: t('all_you_need_item_4_description'),
              interactiveIcon: <Redirect />,
              iconColor: '#5A5A5A',
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
        <CoolantR32 color={LINEAR_GRADIENTS.onyx} />
      </Box>
      <Box my={rem(152)}>
        <CleanAir color={LINEAR_GRADIENTS.onyx} />
      </Box>
      <Box>
        <TechnicalParameters
          label="Naitec Onyx"
          chladiaciVykon="3,5"
          vykurovaciVykon="3,8"
          energetickaTrieda="A++"
          hlucnostVnutornejJednotky="22"
          hlucnostVonkajsejJednotky="52"
          seer="6,19"
          scop="4,03"
          hmotnostVnutornejJednotky="8,5"
          hmotnostVonkajsejJednotky="22,5"
          rozmeryVnutornejJednotky="792x292x201"
          rozmeryVonkajsejJednotky="705x530x280"
          ionizator={true}
          nasavanieVzduchuZExterieru={false}
          wifiModul={true}
          sterilizacia={true}
          dierkovanaLamela={false}
          dlhodobeVykurovanie="do -25°C"
          aktivneCistenie={true}
          zaruka={`3 ${t('common:years_roky')}`}
          chladivo="R32"
          color={LINEAR_GRADIENTS.onyx}
        />
      </Box>
      <StellairSensitive
        color="text.onyx_grey"
        gradientColor={LINEAR_GRADIENTS.onyx}
      />
    </Box>
  );
};
