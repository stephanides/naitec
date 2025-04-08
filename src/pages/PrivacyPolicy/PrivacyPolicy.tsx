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

export const PrivacyPolicy = () => {
  const { t } = useTranslation(['privacypolicy', 'common']);

  return (
    <Box pb={rem(80)}>
      <Container>
        <Title fontSize={rem(24)} mt={rem(40)} textAlign="center">
          {t('title')}
        </Title>
        <Paragraph textAlign="center">{t('date')}</Paragraph>
        <Title fontSize={rem(24)} mt={rem(40)} textAlign="center">
          {t('subtitle')}
        </Title>
        <Title>{t('section_1_title')}</Title>
        <Paragraph>{t('section_1_description_1')}</Paragraph>
        <Paragraph>{t('section_1_description_2')}</Paragraph>
        <Title mt={rem(16)}>{t('section_2_title')}</Title>
        <Paragraph>{t('section_2_description_1')}</Paragraph>
        <Title mt={rem(16)}>{t('section_3_title')}</Title>
        <Paragraph>{t('section_3_text_1')}</Paragraph>
        <Paragraph mt={0}>{t('section_3_text_2')}</Paragraph>
        <Paragraph mt={0}>{t('section_3_text_3')}</Paragraph>
        <Paragraph mt={0}>{t('section_3_text_4')}</Paragraph>
        <Paragraph mt={0}>{t('section_3_text_5')}</Paragraph>
        <Paragraph mt={0}>{t('section_3_text_6')}</Paragraph>
        <Paragraph mt={0}>{t('section_3_text_7')}</Paragraph>
        <Paragraph mt={0}>{t('section_3_text_8')}</Paragraph>
        <Paragraph
          mt={0}
          dangerouslySetInnerHTML={{ __html: t('section_3_text_9') }}
        />
        <Paragraph mt={0}>{t('section_3_text_10')}</Paragraph>
        <Paragraph
          mt={0}
          dangerouslySetInnerHTML={{ __html: t('section_3_text_11') }}
        />
        <Title mt={rem(16)}>{t('section_4_title')}</Title>
        <Paragraph>{t('section_4_text')}</Paragraph>
        <Title mt={rem(16)}>{t('section_5_title')}</Title>
        <ul>
          <LI mt={rem(16)}>{t('section_5_item_1')}</LI>
          <LI>{t('section_5_item_2')}</LI>
          <LI>{t('section_5_item_3')}</LI>
          <LI>{t('section_5_item_4')}</LI>
          <LI>{t('section_5_item_5')}</LI>
          <LI>{t('section_5_item_6')}</LI>
          <LI>{t('section_5_item_7')}</LI>
          <LI>{t('section_5_item_8')}</LI>
          <LI>{t('section_5_item_9')}</LI>
        </ul>
        <Title mt={rem(16)}>{t('section_6_title')}</Title>
        <ul>
          <LI mt={rem(16)}>{t('section_6_item_1')}</LI>
          <LI>{t('section_6_item_2')}</LI>
          <LI>{t('section_6_item_3')}</LI>
          <LI>{t('section_6_item_4')}</LI>
          <LI>{t('section_6_item_5')}</LI>
        </ul>
        <Title mt={rem(16)}>{t('section_7_title')}</Title>
        <ul>
          <LI mt={rem(16)}>{t('section_7_item_1')}</LI>
          <LI>{t('section_7_item_2')}</LI>
          <LI>{t('section_7_item_3')}</LI>
          <LI>{t('section_7_item_4')}</LI>
          <LI>{t('section_7_item_5')}</LI>
          <LI>{t('section_7_item_6')}</LI>
          <LI>{t('section_7_item_7')}</LI>
          <LI>{t('section_7_item_8')}</LI>
          <LI>{t('section_7_item_9')}</LI>
          <LI>{t('section_7_item_10')}</LI>
          <LI>{t('section_7_item_11')}</LI>
          <LI>{t('section_7_item_12')}</LI>
          <LI>{t('section_7_item_13')}</LI>
          <LI>{t('section_7_item_14')}</LI>
          <LI>{t('section_7_item_15')}</LI>
          <LI>{t('section_7_item_16')}</LI>
          <LI>{t('section_7_item_17')}</LI>
          <LI>{t('section_7_item_18')}</LI>
        </ul>
        <Title mt={rem(16)}>{t('section_8_title')}</Title>
        <ul>
          <LI mt={rem(16)}>{t('section_8_item_1')}</LI>
        </ul>
        <Title mt={rem(16)}>{t('section_9_title')}</Title>
        <Paragraph>{t('section_9_description_1')}</Paragraph>
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_9_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_9_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_9_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_9_item_4') }} />
        </ul>
        <Paragraph>{t('section_9_description_2')}</Paragraph>
        <Paragraph>{t('section_9_description_3')}</Paragraph>
        <Title mt={rem(16)}>{t('section_10_title')}</Title>
        <Paragraph>{t('section_10_description_1')}</Paragraph>
        <Paragraph>{t('section_10_description_2')}</Paragraph>
        <Paragraph>{t('section_10_description_3')}</Paragraph>
        <Paragraph>{t('section_10_description_4')}</Paragraph>
        <Title mt={rem(16)}>{t('section_11_title')}</Title>
        <Paragraph>{t('section_11_description_1')}</Paragraph>
        <Paragraph>{t('section_11_description_2')}</Paragraph>
        <Title mt={rem(16)}>{t('section_12_title')}</Title>
        <Paragraph>{t('section_12_description_1')}</Paragraph>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_12_description_2') }}
        />
        <Title mt={rem(16)}>{t('section_13_title')}</Title>
        <Paragraph>{t('section_13_description_1')}</Paragraph>
        <Paragraph>{t('section_13_description_2')}</Paragraph>
        <Title mt={rem(16)}>{t('section_14_title')}</Title>
        <Paragraph>{t('section_14_description_1')}</Paragraph>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_14_description_2') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_14_description_3') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_14_description_4') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_14_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_14_item_2') }} />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_14_description_5') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_14_item_3') }}
          />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_14_description_6') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_14_item_4') }}
          />
        </ul>
        <Title mt={rem(16)}>{t('section_15_title')}</Title>
        <Paragraph>{t('section_15_description_1')}</Paragraph>
        <Paragraph>{t('section_15_description_2')}</Paragraph>
        <Paragraph>{t('section_15_description_3')}</Paragraph>
        <Paragraph>{t('section_15_description_4')}</Paragraph>
        <Paragraph>{t('section_15_description_5')}</Paragraph>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_15_description_6') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_15_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_15_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_15_item_3') }} />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_15_description_7') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_15_item_4') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_15_item_5') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_15_item_6') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_15_item_7') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_15_item_8') }} />
        </ul>
        <Title mt={rem(16)}>{t('section_16_title')}</Title>
        <Paragraph>{t('section_16_description_1')}</Paragraph>
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_16_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_16_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_16_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_16_item_4') }} />
        </ul>
        <Title mt={rem(16)}>{t('section_17_title')}</Title>
        <Paragraph>{t('section_17_description_1')}</Paragraph>
        <Paragraph>{t('section_17_description_2')}</Paragraph>
        <Paragraph>{t('section_17_description_3')}</Paragraph>
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_17_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_17_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_17_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_17_item_4') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_17_item_5') }} />
        </ul>
        <Title mt={rem(16)}>{t('section_18_title')}</Title>
        <Paragraph>{t('section_18_description_1')}</Paragraph>
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_18_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_18_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_18_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_18_item_4') }} />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_18_description_2') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_18_item_5') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_18_item_6') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_18_item_7') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_18_item_8') }} />
        </ul>
        <Title mt={rem(16)}>{t('section_19_title')}</Title>
        <Paragraph>{t('section_19_description_1')}</Paragraph>
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_19_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_19_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_19_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_19_item_4') }} />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_19_description_2') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_19_item_5') }}
          />
        </ul>
        <Title mt={rem(16)}>{t('section_20_title')}</Title>
        <Paragraph>{t('section_20_description_1')}</Paragraph>
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_20_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_20_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_20_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_20_item_4') }} />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_20_description_2') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_20_item_5') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_20_item_6') }} />
        </ul>
        <Title mt={rem(16)}>{t('section_21_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_1') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_2') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_3') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_4') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_5') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_6') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_7') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_21_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_21_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_21_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_21_item_4') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_21_item_5') }} />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_21_description_8') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_21_item_6') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_21_item_7') }} />
        </ul>
        <Title mt={rem(16)}>{t('section_22_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_22_description_1') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_22_description_2') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_22_description_3') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_22_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_22_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_22_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_22_item_4') }} />
        </ul>
        <Title mt={rem(16)}>{t('section_23_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_23_description_1') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_23_description_2') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_23_description_3') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_23_description_4') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_23_item_1') }}
          />
          <LI dangerouslySetInnerHTML={{ __html: t('section_23_item_2') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_23_item_3') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_23_item_4') }} />
          <LI dangerouslySetInnerHTML={{ __html: t('section_23_item_5') }} />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_23_description_5') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_23_item_6') }}
          />
        </ul>
        <Title mt={rem(16)}>{t('section_24_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_24_description_1') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_24_description_2') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_24_item_1') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_24_item_2') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_24_item_3') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_24_item_4') }}
          />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_24_description_3') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_24_item_5') }}
          />
        </ul>
        <Title mt={rem(16)}>{t('section_25_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_25_description_1') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_25_description_2') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_25_description_3') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_25_description_4') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_25_description_5') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_1') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_2') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_3') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_4') }}
          />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_25_description_6') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_5') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_6') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_7') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_8') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_9') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_10') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_25_item_11') }}
          />
        </ul>
        <Title mt={rem(16)}>{t('section_26_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_26_description_1') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_26_description_2') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_1') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_2') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_3') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_4') }}
          />
        </ul>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_26_description_3') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_5') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_6') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_7') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_8') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_9') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_10') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_11') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_12') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_26_item_13') }}
          />
        </ul>
        <Title mt={rem(16)}>{t('section_27_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_27_description_1') }}
        />
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_27_description_2') }}
        />
        <Title mt={rem(16)}>{t('section_28_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_28_description_1') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_28_item_1') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_28_item_2') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_28_item_3') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_28_item_4') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_28_item_5') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_28_item_6') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_28_item_7') }}
          />
        </ul>
        <Title mt={rem(16)}>{t('section_29_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_29_description_1') }}
        />
        <Paragraph
          mt={0}
          dangerouslySetInnerHTML={{ __html: t('section_29_description_2') }}
        />
        <Paragraph
          mt={0}
          dangerouslySetInnerHTML={{ __html: t('section_29_description_3') }}
        />
        <Paragraph
          mt={0}
          dangerouslySetInnerHTML={{ __html: t('section_29_description_4') }}
        />
        <Paragraph
          mt={0}
          dangerouslySetInnerHTML={{ __html: t('section_29_description_5') }}
        />
        <Paragraph
          mt={0}
          dangerouslySetInnerHTML={{ __html: t('section_29_description_6') }}
        />
        <Title mt={rem(16)}>{t('section_30_title')}</Title>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: t('section_30_description_1') }}
        />
        <ul>
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_1') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_2') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_3') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_4') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_5') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_6') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_7') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_8') }}
          />
          <LI
            mt={rem(16)}
            dangerouslySetInnerHTML={{ __html: t('section_30_item_9') }}
          />
        </ul>
      </Container>
    </Box>
  );
};
