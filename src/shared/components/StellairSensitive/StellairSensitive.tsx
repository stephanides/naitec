import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { Container } from '../Container';
import { useTranslation } from 'next-i18next';
import { NeueHaasGroteskDisplay } from '../Typography';
import {
  ArrowRight,
  LINEAR_GRADIENTS,
  PrimaryButton,
  SecondaryButton,
} from '../../design';
import Image from 'next/image';
import Link from 'next-translate-routes/link';
import { INTERNAL_ROUTES } from '../../constants';

const Item = ({
  image,
  title,
  href,
  originalWidth,
  originalHeight,
  color,
}: {
  image: string;
  title: string;
  href: string;
  originalWidth: number;
  originalHeight: number;
  color: string;
}) => {
  const { t } = useTranslation('common');

  // Calculate aspect ratio
  const aspectRatio = originalWidth / originalHeight;

  return (
    <Link href={href}>
      <Flex
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        role="group"
      >
        <Box
          position="relative"
          width="100%"
          maxWidth={`${originalWidth}px`} // Use original width as max-width
          paddingTop={`calc(100% / ${aspectRatio})`} // Maintains aspect ratio
          _groupHover={{
            '.image': {
              transform: 'translateY(-10px)',
            },
          }}
        >
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            style={{ transition: 'all .3s ease-out' }}
            className="image"
          />
        </Box>
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <NeueHaasGroteskDisplay
            fontSize={{ base: rem(32), md: rem(48) }}
            fontWeight={600}
            color="text.inverted"
            my={{ base: rem(20), md: rem(40) }}
            textAlign="center"
          >
            {title}
          </NeueHaasGroteskDisplay>

          <SecondaryButton
            icon={<ArrowRight />}
            borderColor={color}
            trasnformIcon={{
              initialState: 'translateX(0)',
              hoverState: 'translateX(10px)',
            }}
            _groupHover={{
              '.icon': {
                transform: 'translateX(10px)',
                path: { stroke: 'white' },
              },
              backgroundColor: color,
              borderColor: color,
              color: 'white',
            }}
            hoverColor={color}
            color={color}
          >
            {t('button_find_out_more')}
          </SecondaryButton>
        </Flex>
      </Flex>
    </Link>
  );
};

type StellairSensitiveProps = {
  color?: string;
  hoverColor?: string;
  gradientColor?: string;
  stellair?: boolean;
  sensitive?: boolean;
  sensitivePro?: boolean;
  onyx?: boolean;
  smart?: boolean;
};

export const StellairSensitive = ({
  color = 'background.naitec_blue',
  hoverColor = 'background.naitec_blue_hover',
  gradientColor = LINEAR_GRADIENTS.stellair,
  stellair,
  sensitive,
  sensitivePro,
  onyx,
  smart,
}: StellairSensitiveProps) => {
  const { t } = useTranslation('common');
  return (
    <Box
      backgroundColor="background.primary"
      py={{ base: rem(60), xs: rem(80), md: rem(120), xl: rem(200) }}
    >
      <Container>
        <Box>
          <Flex
            alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <NeueHaasGroteskDisplay
              color="text.strong"
              fontSize={{ base: rem(48), md: rem(64) }}
              lineHeight={{ base: rem(48), md: rem(64) }}
              fontWeight={600}
              textAlign="center"
              mb={{ base: rem(40), lg: 0 }}
              sx={{
                strong: {
                  backgroundImage: gradientColor,
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
              dangerouslySetInnerHTML={{ __html: t('naitec_airconditioning') }}
            />
            <Link href={INTERNAL_ROUTES.HOME}>
              <PrimaryButton
                borderColor={color}
                backgroundColor={color}
                hoverColor={hoverColor}
                icon={<ArrowRight />}
              >
                {t('button_explore_all')}
              </PrimaryButton>
            </Link>
          </Flex>
        </Box>
        <Flex
          flexWrap="wrap"
          justifyContent="space-evenly"
          mt={rem(80)}
          flexDir={{ base: 'column', xl: 'row' }}
          rowGap={{ base: rem(40), xl: 0 }}
          width="100%"
        >
          {stellair && (
            <Box
              flex="1 1 auto"
              width={{ base: '70%', md: '100%' }}
              maxWidth="533px"
              mx={{ base: 'auto', xl: 0 }}
            >
              <Item
                image="/images/stellair/stellair_minimal.png"
                title="Naitec Stellair"
                href={INTERNAL_ROUTES.STELLAIR}
                originalWidth={533}
                originalHeight={149}
                color={color}
              />
            </Box>
          )}
          {sensitive && (
            <Box
              flex="1 1 auto"
              width={{ base: '70%', md: '100%' }}
              maxWidth="470px"
              mx={{ base: 'auto', xl: 0 }}
            >
              <Item
                image="/images/sensitive/sensitive_minimal.png"
                title="Naitec Sensitive"
                href={INTERNAL_ROUTES.SENSITIVE}
                originalWidth={470}
                originalHeight={157}
                color={color}
              />
            </Box>
          )}
          {sensitivePro && (
            <Box
              flex="1 1 auto"
              width={{ base: '70%', md: '100%' }}
              maxWidth="470px"
              mx={{ base: 'auto', xl: 0 }}
            >
              <Item
                image="/images/sensitive-pro/sensitive-pro-minimal.png"
                title="Naitec Sensitive Pro"
                href={INTERNAL_ROUTES.SENSITIVE_PRO}
                originalWidth={656}
                originalHeight={236}
                color={color}
              />
            </Box>
          )}
          {onyx && (
            <Box
              flex="1 1 auto"
              width={{ base: '70%', md: '100%' }}
              maxWidth="470px"
              mx={{ base: 'auto', xl: 0 }}
            >
              <Item
                image="/images/onyx/onyx-minimal.png"
                title="Naitec Onyx"
                href={INTERNAL_ROUTES.ONYX}
                originalWidth={696}
                originalHeight={246}
                color={color}
              />
            </Box>
          )}
          {smart && (
            <Box
              flex="1 1 auto"
              width={{ base: '70%', md: '100%' }}
              maxWidth="470px"
              mx={{ base: 'auto', xl: 0 }}
            >
              <Item
                image="/images/smart/smart-minimal.png"
                title="Naitec Smart"
                href={INTERNAL_ROUTES.SMART}
                originalWidth={678}
                originalHeight={245}
                color={color}
              />
            </Box>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
