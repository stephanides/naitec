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
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <Box
      width="100%"
      position="relative"
      sx={{
        '.swiper': {
          overflow: 'visible',
          img: {
            transition: 'all .3s ease-out',
          },
        },
        '.swiper-slide-active': {
          img: {
            transform: 'scale(1.05)',
          },
        },
        '@media (min-width: 768px)': {
          '.swiper-slide-active': {
            img: {
              transform: 'scale(1.05)', // Slightly smaller scale for larger screens
            },
          },
        },
        '@media (min-width: 1920px)': {
          '.swiper-slide-active': {
            img: {
              transform: 'scale(1.03)', // Slightly smaller scale for larger screens
            },
          },
        },
        '@media (min-width: 3200px)': {
          '.swiper-slide-active': {
            img: {
              transform: 'scale(1.03)', // Even smaller scale for very large screens
            },
          },
        },
      }}
    >
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        mb={rem(80)}
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
        spaceBetween={40}
        slidesPerView={1.4}
        modules={[Navigation]}
        loop
        centeredSlides
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesOffsetAfter={0}
        freeMode={true}
        navigation={{
          prevEl: `.swiper-button-prev-fresh-air`,
          nextEl: `.swiper-button-next-fresh-air`,
        }}
        breakpoints={{
          768: {
            spaceBetween: 60,
          },
          1440: {
            slidesPerView: 1.6,
            spaceBetween: 80,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            onClick={() => {
              setActiveIndex(index);
              swiperInstance.slideToLoop(index); // Ensure swiper slides to the clicked item
            }}
          >
            <FreshAirSwiperItem
              image={item.image}
              title={item.title}
              description={item.description}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex
        justify="flex-end"
        my={{ base: rem(25), md: rem(65) }}
        px={rem(25)}
        position={{ base: 'relative', lg: 'absolute' }}
        bottom={{ base: 0, lg: rem(20) }}
        right={0}
        zIndex={4}
      >
        <SwiperNavigation
          prevClassName="swiper-button-prev-fresh-air"
          nextClassName="swiper-button-next-fresh-air"
        />
      </Flex>
    </Box>
  );
};
