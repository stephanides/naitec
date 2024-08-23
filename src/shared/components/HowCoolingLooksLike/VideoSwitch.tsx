import { useState, useRef, useEffect } from 'react';
import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';

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
      <Box position="relative" width="100%" aspectRatio="16 / 9" zIndex={1}>
        {videos.map((video, index) => (
          <Box
            as="video"
            key={index}
            ref={(el: HTMLVideoElement) => {
              videoRefs.current[index] = el;
            }}
            src={video.url}
            muted
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              opacity: index === activeVideoIndex ? 1 : 0,
              transition: 'opacity .3s ease-in-out',
              zIndex: index === activeVideoIndex ? 2 : 1,
            }}
          />
        ))}
      </Box>

      {/* Controls */}
      <Flex
        columnGap={rem(18)}
        position="absolute"
        bottom={rem(250)}
        left={0}
        width="100%"
        justifyContent="center"
        zIndex={2}
      >
        {BUTTONS.map((label, index) => (
          <Box
            position="relative"
            key={index}
            cursor="pointer"
            backgroundColor="#C2C2C2"
            py={rem(14)}
            px={rem(34)}
            borderRadius={rem(60)}
            overflow="hidden"
          >
            <Text
              onClick={() => handleVideoChange(index)}
              color="text.inverted"
              fontSize={rem(18)}
              fontWeight={600}
              position="relative"
              zIndex={2}
            >
              {t(label)}
            </Text>
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
