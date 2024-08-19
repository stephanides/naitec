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
import Link from 'next/link';
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
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Box
        position="relative"
        width="100%"
        maxWidth={`${originalWidth}px`} // Use original width as max-width
        paddingTop={`calc(100% / ${aspectRatio})`} // Maintains aspect ratio
        overflow="hidden"
      >
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </Box>
      <NeueHaasGroteskDisplay
        fontSize={rem(48)}
        fontWeight={600}
        color="text.inverted"
        my={rem(40)}
        textAlign="center"
      >
        {title}
      </NeueHaasGroteskDisplay>
      <Link href={href}>
        <SecondaryButton
          icon={<ArrowRight />}
          borderColor={color}
          color={color}
        >
          {t('button_find_out_more')}
        </SecondaryButton>
      </Link>
    </Flex>
  );
};

type StellairSensitiveProps = {
  color?: string;
  gradientColor?: string;
};

export const StellairSensitive = ({
  color = 'background.naitec_blue',
  gradientColor = LINEAR_GRADIENTS.stellair,
}: StellairSensitiveProps) => {
  const { t } = useTranslation('common');
  return (
    <Box backgroundColor="background.primary" py={rem(200)}>
      <Container>
        <Box>
          <Flex
            alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
          >
            <NeueHaasGroteskDisplay
              color="text.strong"
              fontSize={rem(64)}
              lineHeight={rem(64)}
              fontWeight={600}
              textAlign="center"
              sx={{
                strong: {
                  backgroundImage: gradientColor,
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
              dangerouslySetInnerHTML={{ __html: t('naitec_airconditioning') }}
            />
            <PrimaryButton
              borderColor={color}
              backgroundColor={color}
              icon={<ArrowRight />}
            >
              {t('button_explore_all')}
            </PrimaryButton>
          </Flex>
        </Box>
        <Flex flexWrap="wrap" justifyContent="space-evenly" mt={rem(80)}>
          <Box flex="1 1 auto" maxWidth="533px">
            <Item
              image="/images/stellair/stellair_minimal.png"
              title="Naitec Stellair"
              href={INTERNAL_ROUTES.STELLAIR}
              originalWidth={533}
              originalHeight={149}
              color={color}
            />
          </Box>
          <Box flex="1 1 auto" maxWidth="470px">
            <Item
              image="/images/sensitive/sensitive_minimal.png"
              title="Naitec Sensitive"
              href={INTERNAL_ROUTES.SENSITIVE}
              originalWidth={470}
              originalHeight={157}
              color={color}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
