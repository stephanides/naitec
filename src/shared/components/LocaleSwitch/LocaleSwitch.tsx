// components/LocaleSwitcher.tsx
import Link from 'next-translate-routes/link';
import { useRouter } from 'next/router';
import {
  Czech,
  English,
  German,
  GlobeSmall,
  Hungary,
  Japan,
  LocaleSwitchChevron,
  Poland,
  Slovak,
  Italy,
} from '../../design';
import {
  Box,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useOutsideClick,
} from '@chakra-ui/react';
import { rem } from 'polished';
import { ReactNode, useRef } from 'react';
import { NeueHaasGroteskText } from '../Typography';
import { useTranslation } from 'next-i18next';

const languages = [
  { name: 'slovakia', code: 'sk', flag: <Slovak /> },
  { name: 'english', code: 'en', flag: <English /> },
  { name: 'germany', code: 'de', flag: <German /> },
  { name: 'poland', code: 'pl', flag: <Poland /> },
  { name: 'hungary', code: 'hu', flag: <Hungary /> },
  { name: 'czechia', code: 'cs', flag: <Czech /> },
  { name: 'italy', code: 'it', flag: <Italy /> },
  { name: 'japan', code: 'ja', flag: <Japan /> },
];

const LocaleLink = ({
  pathname,
  title,
  locale,
  flag,
}: {
  pathname: string;
  title: string;
  locale: string;
  flag: ReactNode;
}) => {
  const { t } = useTranslation();
  return (
    <Link href={pathname as string} locale={locale}>
      <Flex
        columnGap={rem(18)}
        px={rem(24)}
        py={rem(13)}
        borderRadius={rem(20)}
        _hover={{ background: 'text.link' }}
        role="group"
        transition="all 0.3s ease-out"
        alignItems="center"
      >
        <Box width={rem(30)}>{flag}</Box>
        <NeueHaasGroteskText
          fontSize={rem(18)}
          color="text.link"
          _groupHover={{ color: 'text.inverted' }}
          transition="all 0.3s ease-out"
        >
          {t(title)}
        </NeueHaasGroteskText>
      </Flex>
    </Link>
  );
};

export const LocaleSwitch = () => {
  const { locale, pathname } = useRouter();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const popoverRef = useRef(null);
  useOutsideClick({
    ref: popoverRef,
    handler: () => {
      if (isOpen) {
        onClose();
      }
    },
  });

  const activeLanguage =
    languages.find((language) => language.code === locale) ?? languages[0];

  return (
    <Popover placement={'bottom-end'} isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Box>
          <Flex
            background="background.dark"
            borderRadius={rem(55)}
            py={rem(14)}
            columnGap={rem(10)}
            alignItems="center"
            justifyContent="center"
            width={rem(76)}
            cursor="pointer"
            display={{ base: 'none', md: 'flex' }}
            onClick={onToggle}
          >
            <Box width={rem(16)}>{activeLanguage.flag}</Box>
            <LocaleSwitchChevron />
          </Flex>
          <Flex
            p={rem(10)}
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
          >
            <GlobeSmall />
          </Flex>
        </Box>
      </PopoverTrigger>
      <PopoverContent
        boxShadow="0px 0px 15px 0px rgb(0 0 0 / 10%)"
        background="white"
        p={rem(12)}
        borderRadius={rem(20)}
        border="none"
        width="auto"
        top={2}
        minW={rem(332)}
        rowGap={rem(12)}
        maxH={rem(374)}
        overflow="auto"
        ref={popoverRef}
      >
        {languages.map((language) => (
          <Box onClick={onToggle}>
            <LocaleLink
              key={language.code}
              pathname={pathname}
              title={language.name}
              locale={language.code}
              flag={language.flag}
            />
          </Box>
        ))}
      </PopoverContent>
    </Popover>
  );
};
