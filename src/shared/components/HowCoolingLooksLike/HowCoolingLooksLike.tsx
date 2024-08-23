import { Box, Flex } from '@chakra-ui/react';
import { Container } from '../Container';
import { NeueHaasGroteskDisplay } from '../Typography';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { VideoSwitcher } from './VideoSwitch';

type HowCoolingLooksLikeProps = {
  color: string;
  buttonColor: string;
};

export const HowCoolingLooksLike = ({
  color,
  buttonColor,
}: HowCoolingLooksLikeProps) => {
  const { t } = useTranslation('common');
  return (
    <Box>
      <Box position="relative">
        <Flex
          justifyContent="center"
          position="absolute"
          zIndex={2}
          top={{ base: rem(50), md: rem(80), xl: rem(143) }}
          left={0}
          right={0}
        >
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(30), xs: rem(48), xl: rem(64) }}
            fontWeight={600}
            color="text.link"
            lineHeight="112%"
            textAlign="center"
            maxW={rem(523)}
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
        <VideoSwitcher
          color={buttonColor}
          videos={[
            { url: '/videos/stellair/1.mp4', duration: 12 },
            { url: '/videos/stellair/2.mp4', duration: 16 },
            { url: '/videos/stellair/3.mp4', duration: 12 },
          ]}
        />
      </Box>
    </Box>
  );
};
