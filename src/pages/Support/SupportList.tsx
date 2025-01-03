import { NeueHaasGroteskDisplay } from '@/src/shared/components';
import { PRODUCTS, PRODUCT_TYPE, Product } from '@/src/shared/constants';
import { ChevronRight, SupportItemShape } from '@/src/shared/design';
import { Box, Flex, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next-translate-routes/link';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const getTitle = (title: string, t: any) => {
  if (title === 'fireplace') {
    return t('fireplace_diffuser');
  }

  if (title === 'cassette_air_conditioning') {
    return t('cassette_air_conditioning');
  }

  if (title === 'ducted_air_conditioning') {
    return t('ducted_air_conditioning');
  }

  if (title === 'multi_split_system') {
    return t('multi_split_system');
  }

  return title;
};

const SupportListItem = ({ title, supportImage, href }: Product) => {
  const { t } = useTranslation(['common', 'support']);
  return (
    <Link href={href}>
      <Box role="group">
        <Box
          border="3px solid"
          borderColor="border.light"
          borderRadius={rem(20)}
          overflow="hidden"
          position="relative"
        >
          <Box
            position="relative"
            zIndex={2}
            _groupHover={{ img: { transform: 'scale(1.05)' } }}
          >
            <Image
              src={supportImage}
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                transition: 'transform 0.3s ease-in-out',
              }}
              alt={title}
            />
          </Box>
          <Box position="absolute" zIndex={1} bottom={0} left={0} right={0}>
            <SupportItemShape />
          </Box>
        </Box>
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(22), xs: rem(28), md: rem(40) }}
          color="text.link"
          fontWeight={600}
          mt={{ base: rem(16), xs: rem(30) }}
          textAlign="center"
        >
          {getTitle(title, t)}
        </NeueHaasGroteskDisplay>
        <Flex
          columnGap={rem(8)}
          alignItems="center"
          mt={rem(4)}
          justifyContent="center"
        >
          <NeueHaasGroteskDisplay
            color="text.naitec_blue"
            fontSize={{ base: rem(16), xs: rem(18) }}
            fontWeight={600}
          >
            {t('support:show_manuals')}
          </NeueHaasGroteskDisplay>
          <Box
            transform="translateX(0)"
            transition="transform 0.3s ease-out"
            _groupHover={{ transform: 'translateX(4px)' }}
            position="relative"
            top={rem(2)}
            width={{ base: rem(6), xs: rem(8) }}
          >
            <ChevronRight />
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

const FilterButton = ({
  title,
  onClick,
  isActive,
}: {
  title: string;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <Box
      role="group"
      onClick={onClick}
      cursor="pointer"
      borderRadius={rem(60)}
      bg={isActive ? 'background.naitec_blue' : '#BABABA'}
      width={{ base: '25%' }}
      py={rem(14)}
      minW={{ base: rem(160), lg: rem(220) }}
      transition="all 0.3s ease-in-out"
      sx={{
        '&:hover': {
          bg: 'background.naitec_blue',
        },
      }}
    >
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(12), lg: rem(18) }}
        fontWeight={600}
        color="text.inverted"
        textAlign="center"
        lineHeight="112%"
      >
        {title}
      </NeueHaasGroteskDisplay>
    </Box>
  );
};

export const SupportList = () => {
  const { t } = useTranslation('common');
  const [activeCategory, setActiveCategory] = useState<PRODUCT_TYPE | null>(
    null
  );

  const products = PRODUCTS.filter((product) => {
    if (activeCategory) {
      return product.type === activeCategory;
    }
    return true;
  });

  return (
    <Box>
      <Flex
        columnGap={{ base: rem(10), xl: rem(20) }}
        mb={{ base: rem(20), xl: rem(30) }}
        mt={{ base: rem(32), xl: rem(50) }}
        overflowX="auto"
        pb={rem(20)}
        sx={{
          /* For Webkit-based browsers */
          '&::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
          },
          /* For Firefox */
          scrollbarWidth: 'none',
        }}
      >
        <FilterButton
          title={t('navigation_all_products')}
          onClick={() => setActiveCategory(null)}
          isActive={activeCategory === null}
        />
        <FilterButton
          title={t('navigation_air_condition')}
          onClick={() => setActiveCategory('air_conditioners')}
          isActive={activeCategory === 'air_conditioners'}
        />
        <FilterButton
          title={t('navigation_accessories')}
          onClick={() => setActiveCategory('accessories')}
          isActive={activeCategory === 'accessories'}
        />
        <FilterButton
          title={t('navigation_household')}
          onClick={() => setActiveCategory('household')}
          isActive={activeCategory === 'household'}
        />
      </Flex>
      <Grid
        gridTemplateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr' }}
        columnGap={rem(20)}
        rowGap={rem(40)}
      >
        {products.map((product, index) => (
          <SupportListItem key={index} {...product} />
        ))}
      </Grid>
    </Box>
  );
};
