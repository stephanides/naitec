import {
  Container,
  Label,
  NeueHaasGroteskDisplay,
} from '@/src/shared/components';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { rem } from 'polished';
import { ContactForm } from './ContactForm';
import { Envelope, Invoice, Phone } from '@/src/shared/design';

export const Contact = () => {
  const { t } = useTranslation(['contact', 'common']);
  return (
    <Box pb={rem(230)}>
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Label
          text={t('heading_label')}
          color="text.stellair"
          borderColor="text.stellair"
        />
        <Flex maxW={rem(696)} justifyContent="center" mt={rem(25)}>
          <NeueHaasGroteskDisplay
            fontSize={rem(64)}
            color="text.link"
            textAlign="center"
            lineHeight="112%"
            fontWeight={600}
            sx={{ strong: { color: 'text.naitec_blue' } }}
            dangerouslySetInnerHTML={{ __html: t('heading') }}
          />
        </Flex>
      </Flex>
      <Container>
        <Flex justifyContent="center" columnGap={rem(20)} mt={rem(48)}>
          <Box
            width={rem(400)}
            minW={rem(400)}
            border="1px solid"
            borderColor="background.naitec_blue"
            p={rem(60)}
            mt={rem(18)}
            background="#F7FAFB"
            borderRadius={rem(10)}
          >
            <NeueHaasGroteskDisplay
              fontSize={rem(48)}
              fontWeight={600}
              color="text.naitec_blue"
            >
              {t('heading_label')}
            </NeueHaasGroteskDisplay>
            <Flex columnGap={rem(8)} alignItems="center" mt={rem(32)}>
              <Phone />
              <NeueHaasGroteskDisplay
                fontWeight={600}
                fontSize={rem(24)}
                color="text.link"
              >
                {t('banner_phone')}
              </NeueHaasGroteskDisplay>
            </Flex>
            <a href="tel:+421 905 554 553">
              <NeueHaasGroteskDisplay
                fontSize={rem(22)}
                color="#999999"
                mt={rem(15)}
                textDecor="underline"
              >
                +421 905 554 553
              </NeueHaasGroteskDisplay>
            </a>
            <Flex columnGap={rem(8)} alignItems="center" mt={rem(40)}>
              <Envelope />
              <NeueHaasGroteskDisplay
                fontWeight={600}
                fontSize={rem(24)}
                color="text.link"
              >
                {t('banner_email')}
              </NeueHaasGroteskDisplay>
            </Flex>
            <a href="mailto:info@naitec.ai">
              <NeueHaasGroteskDisplay
                fontSize={rem(22)}
                color="#999999"
                mt={rem(15)}
                textDecor="underline"
              >
                info@naitec.ai
              </NeueHaasGroteskDisplay>
            </a>
            <Flex columnGap={rem(8)} alignItems="center" mt={rem(40)}>
              <Invoice />
              <NeueHaasGroteskDisplay
                fontWeight={600}
                fontSize={rem(24)}
                color="text.link"
              >
                {t('banner_invoice')}
              </NeueHaasGroteskDisplay>
            </Flex>
            <NeueHaasGroteskDisplay
              fontSize={rem(22)}
              color="#999999"
              mt={rem(15)}
            >
              ACEA s.r.o.
            </NeueHaasGroteskDisplay>
            <NeueHaasGroteskDisplay
              fontSize={rem(22)}
              color="#999999"
              mt={rem(4)}
            >
              Hany Meličkovej 2991/24
            </NeueHaasGroteskDisplay>
            <NeueHaasGroteskDisplay
              fontSize={rem(22)}
              color="#999999"
              mt={rem(4)}
            >
              Bratislava 841 05
            </NeueHaasGroteskDisplay>
            <NeueHaasGroteskDisplay
              fontSize={rem(22)}
              color="#999999"
              mt={rem(4)}
            >
              Slovensko
            </NeueHaasGroteskDisplay>
          </Box>
          <Box maxW={rem(820)} width="100%">
            <ContactForm />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
