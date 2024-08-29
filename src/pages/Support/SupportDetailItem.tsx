import {
  NeueHaasGroteskDisplay,
  NeueHaasGroteskText,
} from '@/src/shared/components';
import { DOCUMENT_TYPE } from '@/src/shared/constants';
import { DocumentIcon, NewTab, VideoIcon } from '@/src/shared/design';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next-translate-routes/link';
import { rem } from 'polished';

type SupportDetailItemProps = {
  title: string;
  items: {
    title: string;
    href: string;
    type: DOCUMENT_TYPE;
    date: string;
    size?: string;
  }[];
};

export const SupportDetailItem = ({ title, items }: SupportDetailItemProps) => {
  const { t } = useTranslation(['support', 'common']);
  return (
    <Box borderRadius={rem(20)} overflow="hidden" mt={rem(50)}>
      <Box
        px={{ base: rem(30), lg: rem(60) }}
        py={{ base: rem(20), lg: rem(30) }}
        backgroundColor="#DDDDDD"
        borderBottom="1px solid"
        borderColor="#D0D0D0"
      >
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(16), xs: rem(20), lg: rem(28) }}
          fontWeight={600}
          color="#565656"
        >
          {t(title)}
        </NeueHaasGroteskDisplay>
      </Box>
      <Box backgroundColor="#EAEAEA" pb={rem(30)}>
        {items.map((item, index) => (
          <Box _notLast={{ borderBottom: '1px solid #D0D0D0' }} key={index}>
            <Link href={item.href} target="_blank">
              <Flex
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', lg: 'center' }}
                px={{ base: rem(30), lg: rem(60) }}
                py={{ base: rem(20), lg: rem(30) }}
                _notLast={{ borderBottom: '1px solid #D0D0D0' }}
                flexDir={{ base: 'column', lg: 'row' }}
                rowGap={rem(8)}
              >
                <Flex columnGap={rem(5)} alignItems="center">
                  <Box>
                    {item.type === 'document' ? (
                      <DocumentIcon />
                    ) : (
                      <VideoIcon />
                    )}
                  </Box>
                  <NeueHaasGroteskText
                    fontSize={{ base: rem(16), md: rem(20) }}
                    color="text.link"
                    textDecor="underline"
                  >
                    {item.title}
                  </NeueHaasGroteskText>
                  <Box>
                    <NewTab />
                  </Box>
                </Flex>
                <Flex ml={{ base: rem(32), lg: 0 }}>
                  <NeueHaasGroteskText fontSize={rem(16)} color="#616161">
                    {item.date}&nbsp;
                  </NeueHaasGroteskText>
                  {item.size && (
                    <NeueHaasGroteskText fontSize={rem(16)} color="#616161">
                      {' '}
                      | {item.size}
                    </NeueHaasGroteskText>
                  )}
                </Flex>
              </Flex>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
