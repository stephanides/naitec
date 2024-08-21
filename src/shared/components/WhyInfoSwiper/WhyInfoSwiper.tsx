import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperNavigation } from '../SwiperNavigation';
import { NeueHaasGroteskDisplay } from '../Typography';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { WhyInfoSwiperItem } from './WhyInfoSwiperItem';

export type WhyInfoSwiperItemProps = {
  image: string;
  title: string;
  description: string;
  light?: boolean;
  isActive?: boolean;
};

type WhyInfoSwiperProps = {
  title: string;
  color: string;
  items: WhyInfoSwiperItemProps[];
  light?: boolean;
};

export const WhyInfoSwiper = ({
  title,
  color,
  items,
  light = false,
}: WhyInfoSwiperProps) => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <Box
      width="100%"
      sx={{
        '.swiper': { overflow: 'visible' },
        '.swiper-slide': { height: 'auto' },
      }}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={rem(50)}>
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(24), xs: rem(28), md: rem(48), '2xl': rem(64) }}
          fontWeight={600}
          color={light ? 'white' : 'text.link'}
          lineHeight="112%"
          sx={{
            strong: {
              backgroundImage: color,
              backgroundClip: 'text',
              color: 'transparent',
              whiteSpace: 'nowrap',
            },
          }}
          dangerouslySetInnerHTML={{
            __html: `${t('why_info_title')} <strong>${title} ?</strong>`,
          }}
        />
        <SwiperNavigation
          activeIndex={activeIndex}
          totalItems={totalItems}
          nextClassName="swiper-button-next-why-info"
          prevClassName="swiper-button-prev-why-info"
          light={light}
        />
      </Flex>
      <Swiper
        className="similar-swiper"
        spaceBetween={20}
        slidesPerView={1.1}
        onSwiper={(swiperInstance) => {
          setTotalItems(swiperInstance.slides.length);
        }}
        onSlideChange={(swiperInstance) => {
          setActiveIndex(swiperInstance.snapIndex);
        }}
        navigation={{
          prevEl: `.swiper-button-prev-why-info`,
          nextEl: `.swiper-button-next-why-info`,
        }}
        modules={[Navigation]}
        breakpoints={{
          992: {
            slidesPerView: 1.1,
          },
          1200: {
            slidesPerView: 1.2,
          },
          1440: {
            slidesPerView: 1.3,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <WhyInfoSwiperItem
              image={item.image}
              title={item.title}
              description={item.description}
              light={light}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
