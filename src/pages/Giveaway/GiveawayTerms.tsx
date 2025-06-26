import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { GiveawayCollapsibleItem } from './GiveawayCollapsibleItem';
import { NeueHaasGroteskText } from '@/src/shared/components';
import { rem } from 'polished';
import { getSocials } from './FollowPanel';

export const GiveawayTerms = ({ country }: { country: string }) => {
  const { t } = useTranslation('sutazsk');
  const socials = getSocials(country);
  return (
    <Flex justifyContent="center">
      <Box
        mt={rem(60)}
        width="100%"
        maxW={rem(1000)}
        sx={{
          strong: { color: '#393939', fontWeight: '400 !important' },
          li: {
            color: '#878787',
            fontSize: rem(17),

            fontFamily: '"neue-haas-grotesk-text",sans-serif',
          },
        }}
      >
        <GiveawayCollapsibleItem
          title={t('terms_item_1_title')}
          text={
            <Box>
              <NeueHaasGroteskText color="#878787" fontSize={rem(17)}>
                {t('terms_item_1_text_1')}
              </NeueHaasGroteskText>
              <Box
                mt={rem(24)}
                sx={{
                  ol: {
                    ml: rem(20),
                  },
                }}
              >
                <ol>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_1_text_2', {
                        instagram_link: socials.instagram,
                      }),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_1_text_3', {
                        facebook_link: socials.facebook,
                      }),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_1_text_4'),
                    }}
                  />
                </ol>
              </Box>
              <NeueHaasGroteskText
                color="#878787"
                mt={rem(24)}
                fontSize={rem(17)}
                dangerouslySetInnerHTML={{
                  __html: t('terms_item_1_text_5'),
                }}
              />
            </Box>
          }
        />
        <GiveawayCollapsibleItem
          title={t('terms_item_2_title')}
          text={
            <Box>
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_2_text_1') }}
              />
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                mt={rem(24)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_2_text_2') }}
              />
              <Box
                mt={rem(24)}
                sx={{
                  ul: {
                    ml: rem(20),
                  },
                }}
              >
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_2_text_3'),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_2_text_4'),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_2_text_5'),
                    }}
                  />
                </ul>
              </Box>
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                mt={rem(24)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_2_text_6') }}
              />
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                mt={rem(24)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_2_text_7') }}
              />
            </Box>
          }
        />
        <GiveawayCollapsibleItem
          title={t('terms_item_3_title')}
          text={
            <Box>
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_3_text_1') }}
              />
              <Box
                mt={rem(24)}
                sx={{
                  ul: {
                    ml: rem(20),
                  },
                }}
              >
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_3_text_2'),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_3_text_3'),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_3_text_4', {
                        instagram_link: socials.instagram,
                      }),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_3_text_5', {
                        facebook_link: socials.facebook,
                      }),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_3_text_6'),
                    }}
                  />
                </ul>
              </Box>
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                mt={rem(24)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_3_text_7') }}
              />
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                mt={rem(24)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_3_text_8') }}
              />
            </Box>
          }
        />
        <GiveawayCollapsibleItem
          title={t('terms_item_4_title')}
          text={
            <Box>
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_4_text_1') }}
              />
              <Box
                mt={rem(24)}
                sx={{
                  ul: {
                    ml: rem(20),
                  },
                }}
              >
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_4_text_2'),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_4_text_3'),
                    }}
                  />
                  <li
                    dangerouslySetInnerHTML={{
                      __html: t('terms_item_4_text_4'),
                    }}
                  />
                </ul>
              </Box>
              <NeueHaasGroteskText
                color="#878787"
                fontSize={rem(17)}
                mt={rem(24)}
                dangerouslySetInnerHTML={{ __html: t('terms_item_4_text_5') }}
              />
            </Box>
          }
        />
      </Box>
    </Flex>
  );
};
