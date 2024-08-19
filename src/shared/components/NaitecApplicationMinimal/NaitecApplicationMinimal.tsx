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
      py={rem(152)}
      position="relative"
      overflow="hidden"
      borderRadius={rem(20)}
      mx={rem(20)}
    >
      <Flex columnGap={rem(60)} px={rem(120)}>
        <Box width="50%">
          <Label
            text={t('naitec_app')}
            color="text.inverted"
            borderColor="border.white"
          />
          <Box mt={rem(25)}>
            <NeueHaasGroteskDisplay
              fontSize={rem(64)}
              fontWeight={600}
              lineHeight={rem(72)}
              color="text.inverted"
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
              fontSize={rem(22)}
              fontWeight={600}
              color="text.secondary"
              mt={rem(40)}
              sx={{ strong: { color: '#EBEBEB' } }}
              dangerouslySetInnerHTML={{
                __html: t('naitec_app_short_description'),
              }}
            />
          </Box>
          <Flex mt={rem(60)} columnGap={rem(25)}>
            <a href={EXTERNAL_ROUTES.ANDROID} target="_blank" rel="noreferrer">
              <GooglePlay />
            </a>
            <a href={EXTERNAL_ROUTES.IOS} target="_blank" rel="noreferrer">
              <AppStore />
            </a>
          </Flex>
        </Box>
        <Box width="50%" position="relative">
          <Box position="absolute" width="100%">
            <Image
              src="/images/common/iphone-mockup.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                top: rem(-60),
              }}
              alt="Metalinox"
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
        </Box>
      </Flex>
    </Box>
  );
};
