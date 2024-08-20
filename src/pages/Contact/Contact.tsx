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
    <Box pb={{ base: rem(60), lg: rem(100), '2xl': rem(230) }}>
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
        <Flex
          maxW={{ base: rem(450), lg: rem(696) }}
          justifyContent="center"
          mt={rem(25)}
        >
          <NeueHaasGroteskDisplay
            maxW={{ base: rem(295), xs: '100%' }}
            fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
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
        <Flex
          justifyContent="center"
          columnGap={rem(20)}
          mt={{ base: rem(16), lg: rem(48) }}
          flexDir={{ base: 'column-reverse', lg: 'row' }}
        >
          <Box
            width={{ base: rem(254), xs: rem(400) }}
            minW={{ base: rem(254), xs: rem(400) }}
            border="1px solid"
            borderColor="background.naitec_blue"
            py={{ base: rem(50), lg: rem(60) }}
            px={{ base: rem(30), lg: rem(60) }}
            mt={{ base: rem(60), lg: rem(18) }}
            background="#F7FAFB"
            borderRadius={rem(10)}
            mx={{ base: 'auto', lg: 0 }}
          >
            <NeueHaasGroteskDisplay
              fontSize={rem(48)}
              fontWeight={600}
              color="text.naitec_blue"
              display={{ base: 'none', lg: 'block' }}
            >
              {t('heading_label')}
            </NeueHaasGroteskDisplay>
            <Flex
              columnGap={rem(8)}
              alignItems="center"
              mt={rem(32)}
              flexDir={{ base: 'column', lg: 'row' }}
            >
              <Phone />
              <NeueHaasGroteskDisplay
                fontWeight={600}
                fontSize={{ base: rem(18), xs: rem(24) }}
                color="text.link"
              >
                {t('banner_phone')}
              </NeueHaasGroteskDisplay>
            </Flex>
            <a href="tel:+421 905 554 553">
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(16), xs: rem(22) }}
                color="#999999"
                mt={rem(15)}
                textDecor="underline"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                +421 905 554 553
              </NeueHaasGroteskDisplay>
            </a>
            <Flex
              columnGap={rem(8)}
              alignItems="center"
              mt={rem(40)}
              flexDir={{ base: 'column', lg: 'row' }}
            >
              <Envelope />
              <NeueHaasGroteskDisplay
                fontWeight={600}
                fontSize={{ base: rem(18), xs: rem(24) }}
                color="text.link"
              >
                {t('banner_email')}
              </NeueHaasGroteskDisplay>
            </Flex>
            <a href="mailto:info@naitec.ai">
              <NeueHaasGroteskDisplay
                fontSize={{ base: rem(16), xs: rem(22) }}
                color="#999999"
                mt={rem(15)}
                textDecor="underline"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                info@naitec.ai
              </NeueHaasGroteskDisplay>
            </a>
            <Flex
              columnGap={rem(8)}
              alignItems="center"
              mt={rem(40)}
              flexDir={{ base: 'column', lg: 'row' }}
            >
              <Invoice />
              <NeueHaasGroteskDisplay
                fontWeight={600}
                fontSize={{ base: rem(18), xs: rem(24) }}
                color="text.link"
              >
                {t('banner_invoice')}
              </NeueHaasGroteskDisplay>
            </Flex>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(16), xs: rem(22) }}
              color="#999999"
              mt={rem(15)}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              ACEA s.r.o.
            </NeueHaasGroteskDisplay>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(16), xs: rem(22) }}
              color="#999999"
              mt={rem(4)}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Hany Meličkovej 2991/24
            </NeueHaasGroteskDisplay>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(16), xs: rem(22) }}
              color="#999999"
              mt={rem(4)}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Bratislava 841 05
            </NeueHaasGroteskDisplay>
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(16), xs: rem(22) }}
              color="#999999"
              mt={rem(4)}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Slovensko
            </NeueHaasGroteskDisplay>
          </Box>
          <Box maxW={{ base: '100%', lg: rem(820) }} width="100%">
            <ContactForm />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
