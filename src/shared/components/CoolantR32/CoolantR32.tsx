import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Container } from '../Container';
import Image from 'next/image';
import { Label } from '../Label';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { rem } from 'polished';
import { LINEAR_GRADIENTS } from '../../design';

type CoolantR32Props = {
  color: string;
};

export const CoolantR32 = ({ color }: CoolantR32Props) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Container>
        <Flex alignItems="center">
          <Box width={{ base: '50%' }}>
            <Image
              src="/images/common/globe.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              alt="Globe"
            />
          </Box>
          <Box width={{ base: '50%' }}>
            <Label
              text={t('coolant_r32_label')}
              color="text.link"
              borderColor="text.link"
            />
            <NeueHaasGroteskDisplay
              fontSize={rem(64)}
              lineHeight={rem(64)}
              fontWeight={600}
              color="text.link"
              mt={rem(25)}
              sx={{
                strong: {
                  backgroundImage: color,
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
              dangerouslySetInnerHTML={{ __html: t('coolant_r32_title') }}
            />
            <NeueHaasGroteskText
              mt={rem(20)}
              lineHeight="130%"
              fontSize={rem(22)}
              color="text.light"
              fontWeight={500}
              sx={{ strong: { color: 'text.link' } }}
              dangerouslySetInnerHTML={{ __html: t('coolant_r32_description') }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
