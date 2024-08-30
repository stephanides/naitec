import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperNavigation } from '../SwiperNavigation';
import { NeueHaasGroteskDisplay } from '../Typography';
import { rem } from 'polished';
import { useTranslation } from 'next-i18next';
import { FreshAirSwiperItem } from './FreshAirSwiperItem';
import { Label } from '../Label';

export type FreshAirSwiperItemProps = {
  image: string;
  title: string;
  description: string;
  isActive?: boolean;
};

type FreshAirSwiperProps = {
  color: string;
  title: string;
  items: FreshAirSwiperItemProps[];
  label: string;
};

export const FreshAirSwiper = ({
  color,
  items,
  title,
  label,
}: FreshAirSwiperProps) => {
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
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        mb={rem(50)}
      >
        <Label text={label} color="text.stellair" borderColor="text.stellair" />
        <Flex
          maxW={{ base: rem(450), lg: rem(696) }}
          justifyContent="center"
          mt={rem(25)}
        >
          <NeueHaasGroteskDisplay
            fontSize={{
              base: rem(24),
              xs: rem(28),
              md: rem(48),
              '2xl': rem(64),
            }}
            textAlign="center"
            fontWeight={600}
            color="text.link"
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
              __html: title,
            }}
          />
        </Flex>
      </Flex>
      <Swiper
        className="similar-swiper"
        spaceBetween={60}
        slidesPerView={1.5}
        onSwiper={(swiperInstance) => {
          setTotalItems(swiperInstance.slides.length);
        }}
        onSlideChange={(swiperInstance) => {
          setActiveIndex(swiperInstance.snapIndex);
        }}
        navigation={{
          prevEl: `.swiper-button-prev-fresh-air`,
          nextEl: `.swiper-button-next-fresh-air`,
        }}
        modules={[Navigation]}
        breakpoints={{
          992: {
            slidesPerView: 1.2,
          },
          1200: {
            slidesPerView: 1.5,
          },
          1440: {
            slidesPerView: 1.7,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <FreshAirSwiperItem
              image={item.image}
              title={item.title}
              description={item.description}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex justify="flex-end" my={{ base: rem(25), md: rem(65) }} px={rem(25)}>
        <SwiperNavigation
          prevClassName="swiper-button-prev-fresh-air"
          nextClassName="swiper-button-next-fresh-air"
        />
      </Flex>
    </Box>
  );
};
