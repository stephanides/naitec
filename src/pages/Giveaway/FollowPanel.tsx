import { NeueHaasGroteskDisplay } from '@/src/shared/components';
import { Facebook, Instagram } from '@/src/shared/design';
import { Box, Flex } from '@chakra-ui/react';

import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { SOCIAL_NETWORKS } from '@/src/shared/constants';

export const getSocials = (country: string) => {
  if (country === 'sk') {
    return SOCIAL_NETWORKS.sk;
  }
  return SOCIAL_NETWORKS.sk;
};

export const FollowPanel = ({ country }: { country: string }) => {
  const { t } = useTranslation('sutazsk');
  const socials = getSocials(country);
  return (
    <Flex
      width="100%"
      mt={rem(100)}
      gap={rem(20)}
      justifyContent="center"
      alignItems="center"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      {/* Instagram */}
      <a
        href={socials.instagram}
        target="_blank"
        style={{ display: 'block', width: '100%' }}
      >
        <Box
          position="relative"
          width="100%"
          maxW="505px"
          py={rem(28)}
          pl={rem(34)}
          pr={{ base: rem(20), md: rem(100) }}
          borderRadius="18px"
          background="white"
          opacity={0.8}
          zIndex={1}
          margin="0 auto"
          sx={{
            '&::before': {
              content: "''",
              position: 'absolute',
              inset: 0,
              padding: '2.5px',
              borderRadius: '18.75px',
              background:
                'linear-gradient(90deg, #4451DC, #C51F95 33%, #F03943 66%, #FEBD47)',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              zIndex: -1,
            },
          }}
        >
          <Flex columnGap={rem(30)} alignItems="center">
            <Box width={rem(40)}>
              <Instagram />
            </Box>
            <Box>
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(18), md: rem(22) }}
                lineHeight={rem(24)}
                fontWeight={700}
                color="#393939"
              >
                {t('follow_us_instagram')}
              </NeueHaasGroteskDisplay>
              <NeueHaasGroteskDisplay
                fontSize={rem(18)}
                fontWeight={500}
                color="#393939"
                opacity={0.57}
              >
                {t('follow_us_instagram_account')}
              </NeueHaasGroteskDisplay>
            </Box>
          </Flex>
        </Box>
      </a>
      {/* Facebook */}
      <a
        href={socials.facebook}
        target="_blank"
        style={{ display: 'block', width: '100%' }}
      >
        <Box
          position="relative"
          width="100%"
          maxW="505px"
          py={rem(24)}
          pl={rem(34)}
          pr={{ base: rem(20), md: rem(100) }}
          borderRadius="18.75px"
          background="white"
          opacity={0.8}
          border="2.5px solid #14A2FA"
          margin="0 auto"
        >
          <Flex columnGap={rem(30)} alignItems="center">
            <Box width={rem(22)}>
              <Facebook />
            </Box>
            <Box>
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(18), md: rem(22) }}
                lineHeight={rem(24)}
                fontWeight={700}
                color="#393939"
              >
                {t('follow_us_facebook')}
              </NeueHaasGroteskDisplay>
              <NeueHaasGroteskDisplay
                fontSize={rem(18)}
                fontWeight={500}
                color="#393939"
                opacity={0.57}
              >
                {t('follow_us_facebook_account')}
              </NeueHaasGroteskDisplay>
            </Box>
          </Flex>
        </Box>
      </a>
    </Flex>
  );
};
