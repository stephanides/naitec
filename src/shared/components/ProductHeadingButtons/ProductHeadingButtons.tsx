import { Flex } from '@chakra-ui/react';
import {
  ArrowDown,
  ArrowRight,
  PrimaryButton,
  SecondaryButton,
} from '../../design';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { INTERNAL_ROUTES } from '../../constants';
import { scroller } from 'react-scroll';

type ProductHeadingButtonProps = {
  color: string;
};

export const handleScrollToContent = () => {
  scroller.scrollTo('content', {
    duration: 600,
    smooth: true,
    offset: 0,
  });
};

export const ProductHeadingButtons = ({ color }: ProductHeadingButtonProps) => {
  const { t } = useTranslation('common');
  return (
    <Flex width="100%" justifyContent="center" position="relative">
      <Flex columnGap={rem(20)}>
        <Link href={INTERNAL_ROUTES.WHERE_TO_BUY}>
          <PrimaryButton
            background={color}
            borderColor={color}
            icon={<ArrowRight />}
            trasnformIcon={{
              initialState: 'translateX(0)',
              hoverState: 'translateX(10px)',
            }}
          >
            {t('common:button_search_at_partner')}
          </PrimaryButton>
        </Link>
        <SecondaryButton
          borderColor={color}
          onClick={handleScrollToContent}
          color={color}
          icon={<ArrowDown />}
          trasnformIcon={{
            initialState: 'translateY(0)',
            hoverState: 'translateY(5px)',
          }}
        >
          {t('common:button_find_out_more')}
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
