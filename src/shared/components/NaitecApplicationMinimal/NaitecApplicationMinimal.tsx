import { Box, Flex } from '@chakra-ui/react';
import { Label } from '../Label';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { Container } from '../Container';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { AppStore, GooglePlay, LINEAR_GRADIENTS } from '../../design';
import Image from 'next/image';
import { EXTERNAL_ROUTES } from '../../constants';

export const NaitecApplicationMinimal = () => {
  const { t } = useTranslation('common');
  return (
    <Box
      backgroundColor="background.primary"
      pt={{ base: rem(60), md: rem(100), '2xl': rem(152) }}
      pb={{ base: 0, '2xl': rem(152) }}
      position="relative"
      overflow="hidden"
      borderRadius={rem(20)}
      mx={rem(20)}
    >
      <Flex
        columnGap={rem(60)}
        px={{ base: rem(40), md: rem(120) }}
        flexDir={{ base: 'column', '2xl': 'row' }}
      >
        <Box width={{ base: '100%', '2xl': '50%' }}>
          <Flex justifyContent={{ base: 'center', '2xl': 'flex-start' }}>
            <Label
              text={t('naitec_app')}
              color="text.inverted"
              borderColor="border.white"
            />
          </Flex>
          <Box mt={rem(25)}>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(30), md: rem(64) }}
              fontWeight={600}
              lineHeight={{ base: rem(36), md: rem(72) }}
              color="text.inverted"
              textAlign={{ base: 'center', '2xl': 'start' }}
              sx={{
                span: {
                  backgroundImage: LINEAR_GRADIENTS.stellair,
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
              dangerouslySetInnerHTML={{ __html: t('naitec_app_title') }}
            />
            <NeueHaasGroteskText
              fontSize={{ base: rem(16), md: rem(22) }}
              fontWeight={600}
              color="text.secondary"
              mt={{ base: rem(20), md: rem(40) }}
              sx={{ strong: { color: '#EBEBEB' } }}
              textAlign={{ base: 'center', '2xl': 'start' }}
              dangerouslySetInnerHTML={{
                __html: t('naitec_app_short_description'),
              }}
            />
          </Box>
          <Flex
            mt={rem(60)}
            columnGap={rem(25)}
            display={{ base: 'none', '2xl': 'flex' }}
          >
            <a href={EXTERNAL_ROUTES.ANDROID} target="_blank" rel="noreferrer">
              <Box width={{ base: rem(135), md: rem(170) }}>
                <GooglePlay />
              </Box>
            </a>
            <a href={EXTERNAL_ROUTES.IOS} target="_blank" rel="noreferrer">
              <Box width={{ base: rem(135), md: rem(170) }}>
                <AppStore />
              </Box>
            </a>
          </Flex>
        </Box>
        <Flex
          width={{ base: '100%', '2xl': '50%' }}
          position="relative"
          height={{ base: rem(300), md: '50vw', '2xl': 'auto' }}
          justifyContent="center"
        >
          <Box
            position="absolute"
            width="100%"
            top={{ base: rem(40), '2xl': rem(-60) }}
            maxW={rem(800)}
          >
            <Image
              src="/images/common/iphone-mockup.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                position: 'relative',
              }}
              alt="Iphone"
            />
          </Box>
          <Box
            position="absolute"
            top={rem(60)}
            left={0}
            width="100%"
            aspectRatio="1566/660"
            background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
            borderRadius="30%"
            filter="blur(100px)"
          />

          <Flex
            mt={rem(60)}
            columnGap={rem(25)}
            display={{ base: 'flex', '2xl': 'none' }}
            position="absolute"
            bottom={rem(30)}
            zIndex={3}
          >
            <a href={EXTERNAL_ROUTES.ANDROID} target="_blank" rel="noreferrer">
              <Box width={{ base: rem(135), md: rem(170) }}>
                <GooglePlay />
              </Box>
            </a>
            <a href={EXTERNAL_ROUTES.IOS} target="_blank" rel="noreferrer">
              <Box width={{ base: rem(135), md: rem(170) }}>
                <AppStore />
              </Box>
            </a>
          </Flex>
        </Flex>
      </Flex>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        left={0}
        display={{ base: 'block', '2xl': 'none' }}
        height={rem(100)}
        background="linear-gradient(180deg, rgba(255, 255, 255, 0) 33%, rgba(17, 27, 33, 1) 100%)"
        zIndex={2}
      />
    </Box>
  );
};
