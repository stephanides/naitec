import { Flex } from '@chakra-ui/react';
import {
  ArrowRight,
  PlusBig,
  PrimaryButton,
  SecondaryButton,
} from '../../design';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import Link from 'next-translate-routes/link';
import { INTERNAL_ROUTES } from '../../constants';

type ProductHeadingButtonProps = {
  productHref: string;
};

export const ProductHeadingButtonsHome = ({
  productHref,
}: ProductHeadingButtonProps) => {
  const { t } = useTranslation('common');
  return (
    <Flex width="100%" justifyContent="center" position="relative">
      <Flex columnGap={{ base: rem(8), md: rem(20) }}>
        <Link href={INTERNAL_ROUTES.WHERE_TO_BUY}>
          <PrimaryButton
            background="text.link"
            hoverColor="text.link_hover"
            borderColor="text.link"
            icon={<ArrowRight />}
            trasnformIcon={{
              initialState: 'translateX(0)',
              hoverState: 'translateX(10px)',
            }}
          >
            {t('common:button_search_at_partner')}
          </PrimaryButton>
        </Link>
        <Link href={productHref}>
          <SecondaryButton
            borderColor="text.link"
            hoverColor="text.link"
            color="text.link"
            icon={<PlusBig />}
            trasnformIcon={{
              initialState: 'rotateZ(0)',
              hoverState: 'rotateZ(90deg)',
            }}
          >
            {t('common:button_find_out_more')}
          </SecondaryButton>
        </Link>
      </Flex>
    </Flex>
  );
};
