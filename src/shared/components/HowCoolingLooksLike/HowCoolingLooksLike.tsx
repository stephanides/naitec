import { Box, Flex } from '@chakra-ui/react';
import { Container } from '../Container';
import { NeueHaasGroteskDisplay } from '../Typography';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { VideoSwitcher } from './VideoSwitch';

type HowCoolingLooksLikeProps = {
  color: string;
  buttonColor: string;
  videos: { url: string; duration: number }[];
};

export const HowCoolingLooksLike = ({
  color,
  buttonColor,
  videos,
}: HowCoolingLooksLikeProps) => {
  const { t } = useTranslation('common');
  return (
    <Box>
      <Box
        position="relative"
        pt={{ base: rem(50), md: 0 }}
        pb={{ base: rem(70), xs: 0 }}
      >
        <Flex
          justifyContent="center"
          position="absolute"
          zIndex={2}
          top={{ base: rem(40), '2xl': rem(60), '3xl': rem(120) }}
          left={0}
          right={0}
        >
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(30), xs: rem(48), xl: rem(64) }}
            fontWeight={600}
            color="text.link"
            lineHeight="112%"
            data-aos="fade-up"
            textAlign="center"
            px={rem(20)}
            maxW={rem(750)}
            sx={{
              strong: {
                backgroundImage: color,
                backgroundClip: 'text',
                color: 'transparent',
              },
            }}
            dangerouslySetInnerHTML={{
              __html: `${t('how_diffuse_cooling_looks_like')} `,
            }}
          />
        </Flex>
        <VideoSwitcher color={buttonColor} videos={videos} />
      </Box>
    </Box>
  );
};
