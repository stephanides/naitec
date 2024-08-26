import { useState, useRef, useEffect } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { NeueHaasGroteskDisplay } from '../Typography';

type VideoData = {
  url: string;
  duration: number; // Duration in seconds
};

const BUTTONS = ['fast_cooling', 'diffuse_cooling', 'heating'];

export const VideoSwitcher = ({
  videos,
  color,
}: {
  videos: VideoData[];
  color: string;
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { t } = useTranslation('common');

  useEffect(() => {
    // Play the active video and reset the others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeVideoIndex) {
          video.currentTime = 0; // Reset time when switching videos
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; // Reset time when paused
        }
      }
    });

    // Animate the background color based on video duration
    const duration = videos[activeVideoIndex].duration * 1000; // Convert seconds to milliseconds
    const timeoutId = setTimeout(() => {
      // Automatically switch to the next video after the current one finishes
      setActiveVideoIndex(
        (prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : 0) // Loop back to the first video
      );
    }, duration);

    // Clear the timeout when the component is unmounted or activeVideoIndex changes
    return () => clearTimeout(timeoutId);
  }, [activeVideoIndex, videos]);

  const handleVideoChange = (index: number) => {
    setActiveVideoIndex(index);
  };

  return (
    <VStack spacing={4} align="center" position="relative">
      {/* Video Container */}
      <Box overflow="hidden" width="100%">
        <Flex width="100%" justifyContent="center">
          <Flex
            overflow="hidden"
            width={{
              base: rem(500),
              xs: rem(700),
              md: rem(900),
              lg: rem(1000),
              xl: rem(1200),
              '2xl': rem(1460),
              '3xl': rem(1920),
            }}
            minW={{
              base: rem(500),
              xs: rem(700),
              md: rem(900),
              lg: rem(1000),
              xl: rem(1200),
              '2xl': rem(1460),
              '3xl': rem(1920),
            }}
            justifyContent="center"
            zIndex={1}
            aspectRatio="16 / 9"
            position="relative"
          >
            {videos.map((video, index) => (
              <Box
                as="video"
                key={index}
                ref={(el: HTMLVideoElement) => {
                  videoRefs.current[index] = el;
                }}
                src={video.url}
                playsInline // This is important for iOS
                webkit-playsinline="true"
                muted
                controls={false}
                sx={{
                  position: 'absolute',
                  top: 0,
                  maxWidth: 'none',
                  left: 0,
                  width: '100%',
                  height: 'auto',
                  opacity: index === activeVideoIndex ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                  zIndex: index === activeVideoIndex ? 2 : 1,
                  userSelect: 'none',
                }}
              />
            ))}
          </Flex>
        </Flex>
      </Box>

      {/* Controls */}
      <Flex
        columnGap={{ base: rem(12), xs: rem(18) }}
        position="absolute"
        bottom={{
          base: rem(-40),
          xs: rem(20),
          md: rem(60),
          lg: rem(92),
          xl: rem(100),
          '2xl': rem(100),
          '3xl': rem(130),
        }}
        px={{ base: rem(40), xs: 0 }}
        left={0}
        width="100%"
        justifyContent="center"
        zIndex={2}
        rowGap={{ base: rem(12), xs: rem(18) }}
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        {BUTTONS.map((label, index) => (
          <Box
            position="relative"
            key={index}
            cursor="pointer"
            backgroundColor="#C2C2C2"
            py={{ base: rem(8), md: rem(14) }}
            px={{ base: rem(12), md: rem(34) }}
            borderRadius={rem(60)}
            overflow="hidden"
            transition="all .3s ease-in-out"
            _hover={{ lg: { backgroundColor: color } }}
          >
            <NeueHaasGroteskDisplay
              onClick={() => handleVideoChange(index)}
              color="text.inverted"
              fontSize={{ base: rem(12), md: rem(18) }}
              fontWeight={600}
              position="relative"
              zIndex={2}
            >
              {t(label)}
            </NeueHaasGroteskDisplay>
            {index === activeVideoIndex && (
              <Box
                position="absolute"
                bottom={0}
                left={0}
                zIndex={1}
                width="0%"
                height="100%"
                background={color}
                animation={`progress ${videos[activeVideoIndex].duration}s linear`}
              />
            )}
          </Box>
        ))}
      </Flex>
    </VStack>
  );
};
