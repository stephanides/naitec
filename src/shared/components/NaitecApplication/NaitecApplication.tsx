import { Box, Flex } from '@chakra-ui/react';
import { Label } from '../Label';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { Container } from '../Container';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { AppStore, GooglePlay, LINEAR_GRADIENTS } from '../../design';
import Image from 'next/image';
import { Glow } from '../Glow';
import { EXTERNAL_ROUTES } from '../../constants';

type NaitecApplicationProps = {
  textColor?: string;
  blurOnBottom?: boolean;
  withoutBlur?: boolean;
};

export const NaitecApplication = ({
  textColor = LINEAR_GRADIENTS.stellair,
  blurOnBottom = true,
  withoutBlur = false,
}: NaitecApplicationProps) => {
  const { t } = useTranslation('common');
  return (
    <Box
      backgroundColor="background.primary"
      py={rem(152)}
      position="relative"
      overflow="hidden"
    >
      <Container>
        <Flex columnGap={rem(60)}>
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
                    backgroundImage: textColor,
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
                  __html: t('naitec_app_description'),
                }}
              />
            </Box>
            <Flex mt={rem(60)} columnGap={rem(25)}>
              <a
                href={EXTERNAL_ROUTES.ANDROID}
                target="_blank"
                rel="noreferrer"
              >
                <GooglePlay />
              </a>
              <a href={EXTERNAL_ROUTES.IOS} target="_blank" rel="noreferrer">
                <AppStore />
              </a>
            </Flex>
          </Box>
          <Box width="50%" position="relative">
            <Image
              src="/images/common/iphone-mockup.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Metalinox"
            />
            <Box
              position="absolute"
              top="50%"
              left={0}
              width="100%"
              aspectRatio="1566/660"
              background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
              borderRadius="30%"
              filter="blur(100px)"
            />
          </Box>
        </Flex>
      </Container>
      {withoutBlur ? (
        <></>
      ) : (
        <Box
          position="absolute"
          bottom={blurOnBottom ? 0 : 'unset'}
          top={blurOnBottom ? 'unset' : 0}
          left={0}
          width="100%"
          transform={blurOnBottom ? 'translateY(50%)' : 'translateY(-50%)'}
          aspectRatio="1566/660"
          background="radial-gradient(circle, rgba(41,171,226,0.20) 13%, rgba(17,27,33,0.17) 100%)"
          borderRadius="30%"
          filter="blur(100px)"
        />
      )}
    </Box>
  );
};
