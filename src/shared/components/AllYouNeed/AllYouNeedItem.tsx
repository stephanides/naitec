import {
  Box,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { rem } from 'polished';
import { ReactNode } from 'react';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import Link from 'next/link';
import { Close } from '../../design';

export type AllYouNeedItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  expandContent?: ReactNode;
  link?: string;
  interactiveIcon?: ReactNode;
  iconColor?: string;
};

export const AllYouNeedItem = ({
  icon,
  title,
  description,
  expandContent,
  link,
  interactiveIcon,
  iconColor,
}: AllYouNeedItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      background="#E9E9E9"
      borderRadius={rem(20)}
      p={{ base: rem(25), md: rem(50) }}
      pb={{ base: rem(56), md: rem(70) }}
      role="group"
      position="relative"
      overflow="hidden"
      height="100%"
      cursor="pointer"
    >
      <Box>{icon}</Box>
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(20), md: rem(32) }}
        fontWeight={600}
        mt={{ base: rem(20), md: rem(30) }}
        color="text.link"
      >
        {title}
      </NeueHaasGroteskDisplay>
      <NeueHaasGroteskText
        color="text.light"
        mt={{ base: rem(15), md: rem(20) }}
        fontSize={{ base: rem(14), md: rem(18) }}
        fontWeight={500}
        lineHeight="130%"
      >
        {description}
      </NeueHaasGroteskText>
      {interactiveIcon && link && (
        <Link href={link}>
          <Flex
            position="absolute"
            right={{ base: rem(8), md: rem(22) }}
            bottom={{ base: rem(8), md: rem(22) }}
            width={{ base: rem(40), md: rem(45) }}
            h={{ base: rem(40), md: rem(45) }}
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            backgroundColor={iconColor}
            transition="all .3s ease-in-out"
            sx={{
              svg: { transition: 'all .3s ease-in-out' },
              _hover: { svg: { transform: 'scale(1.2)' } },
            }}
          >
            {interactiveIcon}
          </Flex>
        </Link>
      )}
      {interactiveIcon && expandContent && (
        <>
          <Flex
            position="absolute"
            onClick={onOpen}
            right={{ base: rem(8), md: rem(22) }}
            bottom={{ base: rem(8), md: rem(22) }}
            width={{ base: rem(40), md: rem(45) }}
            h={{ base: rem(40), md: rem(45) }}
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            backgroundColor={iconColor}
            transition="all .3s ease-in-out"
            sx={{
              svg: { transition: 'all .3s ease-in-out' },
              _hover: { svg: { transform: 'scale(1.2)' } },
            }}
          >
            {interactiveIcon}
          </Flex>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              width="100%"
              maxW="90vw"
              position="relative"
              borderRadius={rem(20)}
            >
              <Flex
                position="absolute"
                cursor="pointer"
                onClick={onClose}
                top={rem(40)}
                right={rem(40)}
                width={{ base: rem(35), lg: rem(65) }}
                height={{ base: rem(35), lg: rem(65) }}
                justifyContent="center"
                alignItems="center"
                borderRadius="50%"
                backgroundColor={iconColor}
                transition="all .3s ease-in-out"
                sx={{
                  svg: { transition: 'all .3s ease-in-out' },
                  _hover: { svg: { transform: 'scale(1.2)' } },
                }}
              >
                <Box width={{ base: rem(16), lg: rem(31) }}>
                  <Close />
                </Box>
              </Flex>
              {expandContent}
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
};
