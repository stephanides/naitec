import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { Container } from '../Container';
import Image from 'next/image';
import { Label } from '../Label';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { rem } from 'polished';

type CoolantR32Props = {
  color: string;
};

export const CoolantR32 = ({ color }: CoolantR32Props) => {
  const { t } = useTranslation();
  return (
    <Box mt={rem(40)}>
      <Container>
        <Flex alignItems="center" flexDir={{ base: 'column', md: 'row' }}>
          <Box width={{ base: '100%', md: '50%' }}>
            <Image
              src="/images/common/globe.png"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto', userSelect: 'none' }}
              alt="Globe"
            />
          </Box>
          <Flex
            width={{ base: '100%', md: '50%' }}
            flexDir="column"
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Label
              text={t('coolant_r32_label')}
              color="text.link"
              borderColor="text.link"
            />
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(30), md: rem(64) }}
              lineHeight={{ base: rem(30), md: rem(64) }}
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
              fontSize={{ base: rem(14), md: rem(22) }}
              textAlign={{ base: 'center', md: 'left' }}
              color="text.light"
              fontWeight={500}
              sx={{ strong: { color: 'text.link', fontWeight: 500 } }}
              dangerouslySetInnerHTML={{ __html: t('coolant_r32_description') }}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
