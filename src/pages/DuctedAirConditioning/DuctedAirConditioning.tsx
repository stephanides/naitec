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

export const DuctedAirConditioning = () => {
  const { t } = useTranslation('ducted');

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
                  src: `${BUNNY_CDN_URL}/ducted-air-conditioning/ducted-air-conditioning.jpg`,
                  alt: 'Ducted air conditioning',
                },
                {
                  src: `${BUNNY_CDN_URL}/ducted-air-conditioning/ducted-air-conditioning-2.jpg`,
                  alt: 'Ducted air conditioning 2',
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
          params={[
            {
              chladiaciVykon: '5',
              vykurovaciVykon: '5,6',
              energetickaTrieda: 'A++',
              hlucnostVnutornejJednotky: '40',
              hlucnostVonkajsejJednotky: '53',
              seer: '6,2',
              scop: '4',
              hmotnostVnutornejJednotky: '31',
              hmotnostVonkajsejJednotky: '37',
              rozmeryVnutornejJednotky: '1000x700x245',
              rozmeryVonkajsejJednotky: '785x555x300',
              ionizator: false,
              uvcLampa: false,
              neviditelneUmiestnenie: true,
              wifiModul: t('common:additional_fee'),
              sterilizacia: false,
              preKomercnePriestory: true,
              dlhodobeVykurovanie: '-24°C',
              aktivneCistenie: true,
              zaruka: `3 ${t('common:years_roky')}`,
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
