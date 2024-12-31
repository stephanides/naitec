import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { Label } from '../Label';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { Container } from '../Container';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type EffectiveHeatingProps = {
  color: string;
  image1: string;
  image2: string;
  blurOnBottom?: boolean;
  title: string;
  description: string;
  label: string;
};

export const EffectiveHeating = ({
  color,
  image1,
  image2,
  blurOnBottom = false,
  label,
  title,
  description,
}: EffectiveHeatingProps) => {
  const { t } = useTranslation();
  const { ref: headingView, inView: headingInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: contentView, inView: contentInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <Box
      position="relative"
      overflowX="hidden"
      pt={{ base: rem(40), md: rem(80), lg: rem(100) }}
      ref={headingView}
    >
      <Container>
        <Box
          opacity={headingInView ? 1 : 0}
          transform={headingInView ? 'translateX(0)' : 'translateX(100px)'}
          transition="all 1s ease-out"
        >
          <Label text={label} color="white" borderColor="white" />
        </Box>
        <Box
          opacity={headingInView ? 1 : 0}
          transform={headingInView ? 'translateX(0)' : 'translateX(100px)'}
          transition="all 1s ease-out"
          transitionDelay=".3s"
        >
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(30), md: rem(64) }}
            mt={rem(25)}
            fontWeight={600}
            color="text.inverted"
            lineHeight="112%"
            sx={{
              strong: {
                backgroundImage: color,
                backgroundClip: 'text',
                color: 'transparent',
              },
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <NeueHaasGroteskText
            fontWeight={500}
            fontSize={{ base: rem(16), md: rem(22) }}
            mt={{ base: rem(20), md: rem(40) }}
            maxW={rem(930)}
            letterSpacing="calc(16px * -0.02)"
            color="text.secondary"
            sx={{ strong: { color: 'text.inverted', fontWeight: 500 } }}
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Box>
        <Flex
          columnGap={rem(20)}
          mt={{ base: rem(40), md: rem(80) }}
          ref={contentView}
        >
          <Box
            width="50%"
            borderRadius={rem(20)}
            overflow="hidden"
            opacity={contentInView ? 1 : 0}
            transform={contentInView ? 'translateY(0)' : 'translateY(100px)'}
            transition="all 1s ease-out"
            transitionDelay=".3s"
          >
            <Image
              src={image1}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Effective heating"
            />
          </Box>
          <Box
            width="50%"
            borderRadius={rem(20)}
            overflow="hidden"
            opacity={contentInView ? 1 : 0}
            transform={contentInView ? 'translateY(0)' : 'translateY(100px)'}
            transition="all 1s ease-out"
            transitionDelay=".8s"
          >
            <Image
              src={image2}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Effective heating 2"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
