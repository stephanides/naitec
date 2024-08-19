import {
  NeueHaasGroteskDisplay,
  NeueHaasGroteskText,
} from '@/src/shared/components';
import { DOCUMENT_TYPE } from '@/src/shared/constants';
import { DocumentIcon, NewTab, VideoIcon } from '@/src/shared/design';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
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
        px={rem(60)}
        py={rem(30)}
        backgroundColor="#DDDDDD"
        borderBottom="1px solid"
        borderColor="#D0D0D0"
      >
        <NeueHaasGroteskDisplay
          fontSize={rem(28)}
          fontWeight={600}
          color="#565656"
        >
          {t(title)}
        </NeueHaasGroteskDisplay>
      </Box>
      <Box backgroundColor="#EAEAEA" pb={rem(30)}>
        {items.map((item, index) => (
          <Link href={item.href} key={index}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              py={rem(30)}
              px={rem(60)}
              _notLast={{ borderBottom: '1px solid #D0D0D0' }}
            >
              <Flex columnGap={rem(5)} alignItems="center">
                <Box>
                  {item.type === 'document' ? <DocumentIcon /> : <VideoIcon />}
                </Box>
                <NeueHaasGroteskText
                  fontSize={rem(20)}
                  color="text.link"
                  fontWeight={500}
                  textDecor="underline"
                >
                  {item.title}
                </NeueHaasGroteskText>
                <Box>
                  <NewTab />
                </Box>
              </Flex>
              <Flex>
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
        ))}
      </Box>
    </Box>
  );
};
