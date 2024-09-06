import { NeueHaasGroteskDisplay } from '@/src/shared/components';
import {
  Envelope,
  PrimaryButton,
  StoreChevron,
  StoreEnvelope,
  StoreMobile,
  Website,
} from '@/src/shared/design';
import { Store } from '@/src/shared/types';
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next-translate-routes/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { rem } from 'polished';
import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { useTranslation } from 'next-i18next';
import style from '../../shared/styles/markdown-store.module.css';

export const StoreDetail = ({ store }: { store: Store }) => {
  const { t } = useTranslation(['wheretobuy', 'common']);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  console.log(store.attributes.website);

  return (
    <Box _notLast={{ borderBottom: '1px solid', borderColor: '#E8E8E8' }}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={rem(25)}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <Box>
          {store?.attributes?.title && (
            <NeueHaasGroteskDisplay
              fontSize={rem(20)}
              fontWeight={600}
              color="text.link"
            >
              {store.attributes.title}
            </NeueHaasGroteskDisplay>
          )}
          {store?.attributes?.street && (
            <NeueHaasGroteskDisplay
              fontSize={rem(16)}
              fontWeight={40}
              mt={rem(10)}
              color="text.link"
            >
              {store.attributes.street}
            </NeueHaasGroteskDisplay>
          )}
        </Box>
        <Box
          width={{ base: rem(16), lg: rem(28) }}
          mr={rem(16)}
          transform={isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)'}
          transition="all .3s ease-out"
        >
          <StoreChevron />
        </Box>
      </Flex>
      <Box {...getCollapseProps()}>
        <Flex
          flexWrap="wrap"
          mb={rem(12)}
          justifyContent="space-between"
          flexDir={{ base: 'column', lg: 'row' }}
          rowGap={rem(10)}
        >
          {store?.attributes?.email && (
            <Box minW={{ base: '100%', lg: 'calc(50% - 6px)' }}>
              <a href={`mailto:${store.attributes.email}`}>
                <PrimaryButton
                  startWithIcon
                  width={{ base: '100%', lg: '100%' }}
                  color="text.link"
                  borderColor="text.link"
                  hoverColor="#555555"
                  px={rem(16)}
                  icon={<StoreEnvelope />}
                  small
                >
                  {store.attributes.email}
                </PrimaryButton>
              </a>
            </Box>
          )}
          {store?.attributes?.phone && (
            <Box minW={{ base: '100%', lg: 'calc(50% - 6px)' }}>
              <a href={`tel:${store.attributes.phone}`}>
                <PrimaryButton
                  startWithIcon
                  width={{ base: '100%', lg: '100%' }}
                  borderColor="text.link"
                  hoverColor="#555555"
                  color="text.link"
                  px={rem(16)}
                  icon={<StoreMobile />}
                  small
                >
                  {store.attributes.phone}
                </PrimaryButton>
              </a>
            </Box>
          )}
        </Flex>
        {store?.attributes?.website && (
          <Box mb={rem(20)}>
            <a href={store.attributes.website} target="_blank">
              <PrimaryButton
                width="100%"
                icon={<Website />}
                startWithIcon
                small
              >
                {store.attributes.website}
              </PrimaryButton>
            </a>
          </Box>
        )}
        {store?.attributes?.content && (
          <Box mt={rem(32)}>
            <Markdown
              children={store.attributes.content}
              className={style.reactMarkDown}
              remarkPlugins={[remarkGfm]}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
