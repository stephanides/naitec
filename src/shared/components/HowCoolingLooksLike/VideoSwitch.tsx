import { useState, useRef, useEffect } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { NeueHaasGroteskDisplay } from '../Typography';

type VideoData = {
  url: string;
  duration: number; // Duration in seconds
};

const BUTTONS = ['diffuse_cooling', 'fast_cooling', 'heating'];

export const VideoSwitcher = ({
  videos,
  color,
}: {
  videos: VideoData[];
  color: string;
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(0);
  const [fadeOutIndex, setFadeOutIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start playing the first video when the component is in view
          if (activeVideoIndex === null) {
            setActiveVideoIndex(0);
          }
        } else {
          // Pause all videos when the component is out of view
          setActiveVideoIndex(null);
        }
      },
      {
        threshold: 0.5, // Adjust based on how much of the component should be visible before triggering
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [activeVideoIndex]);

  useEffect(() => {
    if (activeVideoIndex !== null) {
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

      // Set up automatic transition to the next video after the current one finishes
      const duration = videos[activeVideoIndex].duration * 1000; // Convert seconds to milliseconds

      // Transition logic
      const timeoutId = setTimeout(() => {
        // Start fading out the current video
        setFadeOutIndex(activeVideoIndex);

        // After fade-out completes, move to the next video
        setTimeout(() => {
          setFadeOutIndex(null);
          setActiveVideoIndex((prevIndex) =>
            prevIndex !== null ? (prevIndex + 1) % videos.length : 0
          );
        }, 500); // Delay to match fade-out duration
      }, duration - 500); // Start fade-out before the end of the video

      return () => clearTimeout(timeoutId);
    } else {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [activeVideoIndex, videos]);

  const handleVideoChange = (index: number) => {
    if (index !== activeVideoIndex) {
      setFadeOutIndex(activeVideoIndex);
      setTimeout(() => {
        setFadeOutIndex(null);
        setActiveVideoIndex(index);
      }, 500); // Delay to match fade-out duration
    }
  };

  return (
    <VStack ref={containerRef} spacing={4} align="center" position="relative">
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
              <Box key={index}>
                <Box
                  as="video"
                  ref={(el: HTMLVideoElement) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.url}
                  playsInline
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
                    opacity:
                      index === activeVideoIndex && fadeOutIndex === null
                        ? 1
                        : index === fadeOutIndex
                        ? 0
                        : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    zIndex: index === activeVideoIndex ? 2 : 1,
                    userSelect: 'none',
                  }}
                />
              </Box>
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
