import {
  Container,
  Label,
  NeueHaasGroteskDisplay,
  StellairSensitive,
} from '@/src/shared/components';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { SupportList } from './SupportList';

export const Support = () => {
  const { t } = useTranslation(['support', 'common']);

  return (
    <Box>
      <Container>
        <Flex justifyContent="center">
          <Label text={t('label')} color="text.link" borderColor="text.link" />
        </Flex>
        <Flex justifyContent="center" mt={rem(25)}>
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
            color="text.link"
            textAlign="center"
            lineHeight="112%"
            fontWeight={600}
            sx={{ strong: { color: 'text.naitec_blue' } }}
            dangerouslySetInnerHTML={{ __html: t('title') }}
          />
        </Flex>
        <Box mt={rem(30)}>
          <SupportList />
        </Box>
      </Container>
      <Box mt={rem(125)}>
        <StellairSensitive stellair sensitivePro />
      </Box>
    </Box>
  );
};
