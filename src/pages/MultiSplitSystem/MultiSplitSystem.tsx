import {
  CollapsibleItem,
  Container,
  Label,
  NeueHaasGroteskDisplay,
  NeueHaasGroteskText,
  ProductGallery,
  StellairSensitive,
  TechnicalParameters,
} from '@/src/shared/components';
import { BUNNY_CDN_URL } from '@/src/shared/constants';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';

export const MultiSplitSystem = () => {
  const { t } = useTranslation('multisplit');

  return (
    <Box>
      <Container>
        <Flex
          columnGap={{ base: rem(80), '3xl': rem(128) }}
          flexDir={{ base: 'column', xl: 'row' }}
        >
          <Box width={{ base: '100%', xl: '60%' }}>
            <ProductGallery
              images={[
                {
                  src: `${BUNNY_CDN_URL}/multi-split-system/multi-split-system.jpg`,
                  alt: 'Multi split system',
                },
                {
                  src: `${BUNNY_CDN_URL}/multi-split-system/multi-split-system-2.jpg`,
                  alt: 'Multi split system 2',
                },
                {
                  src: `${BUNNY_CDN_URL}/multi-split-system/multi-split-system-3.jpg`,
                  alt: 'Multi split system 3',
                },
                {
                  src: `${BUNNY_CDN_URL}/multi-split-system/multi-split-system-4.jpg`,
                  alt: 'Multi split system 4',
                },
                {
                  src: `${BUNNY_CDN_URL}/multi-split-system/multi-split-system-5.jpg`,
                  alt: 'Multi split system 5',
                },
              ]}
            />
          </Box>
          <Box width={{ base: '100%', xl: '40%' }} pt={rem(40)}>
            <Box>
              <Label
                text={t('common:new')}
                color="text.naitec_blue"
                borderColor="text.naitec_blue"
              />
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(32), xs: rem(48) }}
                color="text.link"
                fontWeight={600}
                my={rem(12)}
              >
                {t('title')}
              </NeueHaasGroteskDisplay>
              <NeueHaasGroteskText
                sx={{ strong: { color: 'text.link', fontWeight: 500 } }}
                color="text.light"
                fontWeight={500}
                fontSize={{ base: rem(16), xs: rem(20) }}
                lineHeight="130%"
                dangerouslySetInnerHTML={{ __html: t('description1') }}
              />
            </Box>
            <Box mt={{ base: rem(44), xl: rem(72) }}>
              <CollapsibleItem
                title={t('common:description')}
                text={
                  <Box>
                    <NeueHaasGroteskText
                      fontSize={rem(17)}
                      color="text.light"
                      mb={rem(17)}
                    >
                      {t('description2')}
                    </NeueHaasGroteskText>
                    <NeueHaasGroteskText
                      fontSize={rem(17)}
                      color="text.light"
                      mb={rem(17)}
                    >
                      {t('description3')}
                    </NeueHaasGroteskText>
                    <NeueHaasGroteskText
                      fontSize={rem(17)}
                      color="text.light"
                      mb={rem(17)}
                    >
                      {t('description4')}
                    </NeueHaasGroteskText>
                  </Box>
                }
              />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box mt={rem(125)}>
        <TechnicalParameters
          label={`Naitec ${t('title')}`}
          hoverColor="background.stellair_hover"
          buttonColor="text.onyx_grey"
          selectVariant="naitec"
          selectLabels={[
            `(5kw - 2 ${t('common:units_1')})`,
            `(8kw - 3 ${t('common:units_1')})`,
            `(12kw - 4/5 ${t('common:units_2')})`,
          ]}
          params={[
            {
              chladiaciVykon: '5,3',
              vykurovaciVykon: '5,6',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: t('common:based_on_model'),
              hlucnostVonkajsejJednotky: '54',
              seer: '6,14',
              scop: '4.04',
              hmotnostVnutornejJednotky: t('common:based_on_model'),
              hmotnostVonkajsejJednotky: '30',
              rozmeryVnutornejJednotky: t('common:based_on_model'),
              rozmeryVonkajsejJednotky: '785x300x555',
              ionizator: true,
              nasavanieVzduchuZExterieru: 'Stellair',
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: 'Stellair, Sensitive',
              dlhodobeVykurovanie: '-24°C',
              aktivneCistenie: true,
              zaruka: t('common:based_on_model'),
              chladivo: 'R32',
            },
            {
              chladiaciVykon: '7,9',
              vykurovaciVykon: '8,2',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: t('common:based_on_model'),
              hlucnostVonkajsejJednotky: '57',
              seer: '6,14',
              scop: '4.16',
              hmotnostVnutornejJednotky: t('common:based_on_model'),
              hmotnostVonkajsejJednotky: '44,5',
              rozmeryVnutornejJednotky: t('common:based_on_model'),
              rozmeryVonkajsejJednotky: '900x350x700',
              ionizator: true,
              nasavanieVzduchuZExterieru: 'Stellair',
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: 'Stellair, Sensitive',
              dlhodobeVykurovanie: '-24°C',
              aktivneCistenie: true,
              zaruka: t('common:based_on_model'),
              chladivo: 'R32',
            },
            {
              chladiaciVykon: '12',
              vykurovaciVykon: '13',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: t('common:based_on_model'),
              hlucnostVonkajsejJednotky: '61',
              seer: '6,14',
              scop: '4.04',
              hmotnostVnutornejJednotky: t('common:based_on_model'),
              hmotnostVonkajsejJednotky: '75',
              rozmeryVnutornejJednotky: t('common:based_on_model'),
              rozmeryVonkajsejJednotky: '985x395x808',
              ionizator: true,
              nasavanieVzduchuZExterieru: 'Stellair',
              wifiModul: true,
              sterilizacia: true,
              dierkovanaLamela: 'Stellair, Sensitive',
              dlhodobeVykurovanie: '-24°C',
              aktivneCistenie: true,
              zaruka: t('common:based_on_model'),
              chladivo: 'R32',
            },
          ]}
        />
      </Box>
      <Box>
        <StellairSensitive stellair sensitivePro />
      </Box>
    </Box>
  );
};
