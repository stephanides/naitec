import { Box, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperNavigation } from '../SwiperNavigation';
import { AllYouNeedItem, AllYouNeedItemProps } from './AllYouNeedItem';
import { useTranslation } from 'next-i18next';
import { NeueHaasGroteskDisplay } from '../Typography';
import { rem } from 'polished';
import { Container } from '../Container';

type AllYouNeedProps = {
  color: string;
  items: AllYouNeedItemProps[];
};

export const AllYouNeed = ({ color, items }: AllYouNeedProps) => {
  const { t } = useTranslation('common');
  return (
    <Box overflowX="hidden">
      <Container>
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(30), md: rem(64) }}
          fontWeight={600}
          color="text.link"
          lineHeight="112%"
          sx={{
            strong: {
              backgroundImage: color,
              backgroundClip: 'text',
              color: 'transparent',
            },
          }}
          dangerouslySetInnerHTML={{ __html: t('all_you_need') }}
        />
        <Box
          width="100%"
          sx={{
            '.swiper': { overflow: 'visible' },
            '.swiper-slide': { height: 'auto' },
          }}
          mt={{ base: rem(25), md: rem(45) }}
        >
          <Swiper
            className="similar-swiper"
            spaceBetween={20}
            slidesPerView={1.1}
            navigation={{
              prevEl: `.swiper-button-prev-all-you-need`,
              nextEl: `.swiper-button-next-all-you-need`,
            }}
            modules={[Navigation]}
            breakpoints={{
              992: {
                slidesPerView: 1.5,
              },
              1200: {
                slidesPerView: 1.7,
              },
              1440: {
                slidesPerView: 2.1,
              },
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <AllYouNeedItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  interactiveIcon={item.interactiveIcon}
                  iconColor={item.iconColor}
                  iconColorHover={item.iconColorHover}
                  expandContent={item.expandContent}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Flex
          justify="flex-end"
          my={{ base: rem(25), md: rem(65) }}
          px={rem(25)}
        >
          <SwiperNavigation
            prevClassName="swiper-button-prev-all-you-need"
            nextClassName="swiper-button-next-all-you-need"
          />
        </Flex>
      </Container>
    </Box>
  );
};
