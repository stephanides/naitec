import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Container } from '../Container';
import Image from 'next/image';
import { Label } from '../Label';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { rem } from 'polished';
import { LINEAR_GRADIENTS } from '../../design';

type CleanAirProps = {
  color: string;
  imageOnLeft?: boolean;
  light?: boolean;
};

export const CleanAir = ({
  color,
  imageOnLeft = false,
  light = false,
}: CleanAirProps) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Container>
        <Flex
          alignItems="center"
          columnGap={rem(52)}
          flexDir={imageOnLeft ? 'row-reverse' : 'row'}
        >
          <Box width={{ base: '50%' }}>
            <Label
              text={t('clean_air_label')}
              color={light ? 'text.inverted' : 'text.link'}
              borderColor={light ? 'text.inverted' : 'text.link'}
            />
            <NeueHaasGroteskDisplay
              fontSize={rem(64)}
              lineHeight={rem(64)}
              fontWeight={600}
              color={light ? 'text.inverted' : 'text.link'}
              mt={rem(25)}
              sx={{
                strong: {
                  backgroundImage: color,
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
              dangerouslySetInnerHTML={{ __html: t('clean_air_title') }}
            />
            <NeueHaasGroteskText
              mt={rem(20)}
              lineHeight="130%"
              fontSize={rem(22)}
              color={light ? 'text.secondary' : 'text.light'}
              fontWeight={500}
              sx={{ strong: { color: light ? 'text.strong' : 'text.link' } }}
              dangerouslySetInnerHTML={{ __html: t('clean_air_description') }}
            />
          </Box>
          <Box width={{ base: '50%' }}>
            <Image
              src="/images/common/clean-air.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: rem(20) }}
              alt="Globe"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
