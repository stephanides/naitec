import { Container } from '@/src/shared/components';
import { Box, Text, TextProps } from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { ReactNode } from 'react';

type TitleProps = {
  children?: ReactNode;
} & TextProps;

const Title = ({ children, ...rest }: TitleProps) => {
  return (
    <Text fontSize={rem(20)} color="text.primary" fontWeight={700} {...rest}>
      {children}
    </Text>
  );
};

const Paragraph = ({ children, ...rest }: TitleProps) => {
  return (
    <Text
      fontSize={rem(16)}
      color="text.primary"
      mt={rem(16)}
      sx={{ a: { color: 'blue', textDecoration: 'underline' } }}
      {...rest}
    >
      {children}
    </Text>
  );
};

const LI = ({ children, ...rest }: TitleProps) => {
  return (
    <Text
      fontSize={rem(16)}
      color="text.primary"
      ml={rem(32)}
      as="li"
      sx={{ a: { color: 'blue', textDecoration: 'underline' } }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const LegalNotice = () => {
  const { t } = useTranslation(['legalnotice', 'common']);

  return (
    <Box pb={rem(80)}>
      <Container>
        <Title fontSize={rem(24)} mt={rem(40)} textAlign="center">
          {t('title')}
        </Title>
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_1') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_2') }} />
        <Paragraph mt={0} dangerouslySetInnerHTML={{ __html: t('paragraph_3') }} />
        <Paragraph mt={0} dangerouslySetInnerHTML={{ __html: t('paragraph_4') }} />
        <Paragraph mt={0} dangerouslySetInnerHTML={{ __html: t('paragraph_5') }} />
        <Paragraph  dangerouslySetInnerHTML={{ __html: t('paragraph_6') }} />
        <Paragraph mt={0} dangerouslySetInnerHTML={{ __html: t('paragraph_7') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_8') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_9') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_10') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_11') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_12') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_13') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_14') }} />
        <Paragraph mt={0} dangerouslySetInnerHTML={{ __html: t('paragraph_15') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_16') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_17') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_18') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_19') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('paragraph_20') }} />
      </Container>
    </Box>
  );
};
