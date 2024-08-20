import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import { rem } from 'polished';
import { useState } from 'react';
import { Navigation, Thumbs, FreeMode, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

type ProductGalleryProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box display={{ base: 'none', xl: 'block' }}>
        <Flex width="100%" position="relative">
          {images.length > 1 && (
            <Box width={rem(100)} minW={rem(100)}>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView="auto"
                autoHeight
                direction="vertical"
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="gallery-swiper-thumbs"
                style={{ height: '100%' }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image.src}
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                        transition: 'all .3s ease-out',
                        userSelect: 'none',
                        borderRadius: rem(20),
                        cursor: 'pointer',
                      }}
                      alt={image.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          )}
          <Box width="calc(100% - 120px)" position="relative" ml={rem(20)}>
            <Flex
              columnGap={rem(10)}
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              sx={{
                '.swiper-button-disabled': {
                  opacity: 0.5,
                },
              }}
            ></Flex>
            <Swiper
              spaceBetween={20}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={{
                prevEl: `.swiper-button-prev-gallery`,
                nextEl: `.swiper-button-next-gallery`,
              }}
              creativeEffect={{
                prev: {
                  translate: [0, 0, -400],
                  opacity: 0,
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
              loop
              effect="creative"
              modules={[FreeMode, Navigation, Thumbs, EffectCreative]}
              className="gallery-swiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image.src}
                    width="0"
                    height="0"
                    sizes="100vw"
                    onClick={() => setOpen(true)}
                    style={{
                      width: '100%',
                      height: 'auto',
                      transition: 'all .3s ease-out',
                      userSelect: 'none',
                      cursor: 'pointer',
                      borderRadius: rem(20),
                    }}
                    alt={image.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Flex>
        <Lightbox open={open} close={() => setOpen(false)} slides={images} />
      </Box>
      <Box display={{ base: 'block', xl: 'none' }}>
        <Swiper
          className="similar-swiper"
          spaceBetween={20}
          slidesPerView={1.2}

          // breakpoints={{
          //   992: {
          //     slidesPerView: 1.1,
          //   },
          //   1200: {
          //     slidesPerView: 1.2,
          //   },
          //   1440: {
          //     slidesPerView: 1.3,
          //   },
          // }}
        >
          {images.map((item, index) => (
            <SwiperSlide>
              <Image
                src={item.src}
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease-in-out',
                }}
                alt={item.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
