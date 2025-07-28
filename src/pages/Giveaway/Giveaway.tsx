import { Box, Button, Flex, Grid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import {
  Container,
  Label,
  NeueHaasGroteskDisplay,
  NeueHaasGroteskText,
  StellairSensitive,
} from '@/src/shared/components';
import { GiveawayPrice } from './GiveawayPrice';
import { BUNNY_CDN_URL } from '@/src/shared/constants';
import { FollowPanel } from './FollowPanel';
import {
  ArrowRight,
  LINEAR_GRADIENTS,
  PrimaryButton,
} from '@/src/shared/design';
import { GiveawayTerms } from './GiveawayTerms';
import { GiveawayContactForm } from './GiveawayContactForm';
import Link from 'next/link';
import { useQuery } from 'react-query';
import EmailPicker from './EmailPicker';

export const getTranslationgiveawayFullByCountry = (country: string) => {
  if (country === 'sk') {
    return ['sutazsk', 'common', 'contact'];
  } else if (country === 'cz') {
    return ['sutazcz', 'common', 'contact'];
  } else if (country === 'hu') {
    return ['sutazhu', 'common', 'contact'];
  } else if (country === 'de') {
    return ['sutazde', 'common', 'contact'];
  } else if (country === 'at') {
    return ['sutazat', 'common', 'contact'];
  }
  return ['sutazsk', 'common', 'contact'];
};

const getDocumentUrlByCountry = (country: string) => {
  if (country === 'sk') {
    return '/documents/sk/naitec-status-sutaze.pdf';
  } else if (country === 'cz') {
    return '/documents/cz/naitec-status-souteze.pdf';
  } else if (country === 'hu') {
    return '/documents/hu/naitec-versenyhelyzet.pdf';
  } else if (country === 'de') {
    return '/documents/de/satzung-des-gewinnspiels.pdf';
  } else if (country === 'at') {
    return '/documents/at/satzung-des-gewinnspiels.pdf';
  }
  return '/documents/sk/naitec-status-sutaze.pdf';
};

export const Giveaway = ({ country }: { country: string }) => {
  const { t } = useTranslation(getTranslationgiveawayFullByCountry(country));

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

  // function downloadEmails() {
  //   const emails = data.data.map((item) => item.attributes.email);
  //   const content = emails.join('\n');
  //   const blob = new Blob([content], { type: 'text/plain' });
  //   const url = URL.createObjectURL(blob);

  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'emails.txt';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   URL.revokeObjectURL(url);
  // }

  return (
    <Box>
      {/* <Button onClick={downloadEmails}>Download</Button> */}
      {/* <EmailPicker emails={emails} forcedWinner={undefined} /> */}
      <Box mt={{ base: rem(40), lg: rem(32) }}>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Label text={t('label')} color="text.link" borderColor="text.link" />
          <Flex justifyContent="center" mt={rem(25)}>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
              color="text.link"
              textAlign="center"
              lineHeight="112%"
              fontWeight={600}
              sx={{ strong: { color: 'text.naitec_blue' } }}
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
          </Flex>
          <NeueHaasGroteskText
            sx={{ strong: { color: 'text.link', fontWeight: 500 } }}
            color="text.light"
            fontWeight={500}
            fontSize={{ base: rem(16), xs: rem(20) }}
            lineHeight="130%"
            mt={rem(23)}
            px={rem(16)}
            textAlign="center"
            maxW={rem(950)}
            dangerouslySetInnerHTML={{ __html: t('subtitle') }}
          />
        </Flex>
        <Container>
          <Grid
            gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
            gap={rem(20)}
            mt={rem(60)}
          >
            <GiveawayPrice
              title={t('price_1_title')}
              image={`${BUNNY_CDN_URL}/giveaway-1-place.jpg`}
              subtitle={t('price_1_subtitle')}
            />
            <GiveawayPrice
              title={t('price_2_title')}
              image={`${BUNNY_CDN_URL}/giveaway-2-place.jpg`}
              subtitle={t('price_2_subtitle')}
            />
            <GiveawayPrice
              title={t('price_3_title')}
              image={`${BUNNY_CDN_URL}/giveaway-3-place.jpg`}
              subtitle={t('price_3_subtitle')}
            />
          </Grid>
          <Flex>
            <FollowPanel country={country} />
          </Flex>
          <GiveawayContactForm country={country} />
          <Flex mt={rem(120)} flexDir="column" alignItems="center">
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(24), md: rem(36) }}
              color="#474747"
              textAlign="center"
              fontWeight={700}
            >
              {t('info_1')}
            </NeueHaasGroteskDisplay>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(20), md: rem(32) }}
              color="#8F8F8F"
              textAlign="center"
              fontWeight={700}
              mt={rem(12)}
              maxW={rem(960)}
            >
              {t('info_2')}
            </NeueHaasGroteskDisplay>
          </Flex>
          <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            mt={{ base: rem(50), md: rem(120) }}
          >
            <Label
              text={t('terms_label')}
              color="text.link"
              borderColor="text.link"
            />
            <Flex
              maxW={{ base: rem(450), lg: rem(1000) }}
              justifyContent="center"
              mt={rem(25)}
            >
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
                color="text.link"
                textAlign="center"
                lineHeight="112%"
                fontWeight={600}
                sx={{
                  strong: {
                    backgroundImage: LINEAR_GRADIENTS.stellair,
                    backgroundClip: 'text',
                    color: 'transparent',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: t('terms_title') }}
              />
            </Flex>
          </Flex>

          <GiveawayTerms country={country} />
          <Flex mt={rem(60)} justifyContent="center">
            <Link
              href={getDocumentUrlByCountry(country)}
              locale={false}
              target="_blank"
            >
              <PrimaryButton
                rightIcon={
                  <Box w={rem(17)}>
                    <ArrowRight />
                  </Box>
                }
              >
                {t('full_terms_button')}
              </PrimaryButton>
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box mt={rem(120)}>
        <StellairSensitive stellair sensitivePro />
      </Box>
    </Box>
  );
};
