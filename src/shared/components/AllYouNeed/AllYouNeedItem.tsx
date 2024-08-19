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
      p={rem(50)}
      pb={rem(70)}
      role="group"
      position="relative"
      overflow="hidden"
      height="100%"
      cursor="pointer"
    >
      <Box>{icon}</Box>
      <NeueHaasGroteskDisplay
        fontSize={rem(32)}
        fontWeight={600}
        mt={rem(30)}
        color="text.link"
      >
        {title}
      </NeueHaasGroteskDisplay>
      <NeueHaasGroteskText
        color="text.light"
        mt={rem(20)}
        fontSize={rem(18)}
        fontWeight={500}
        lineHeight="130%"
      >
        {description}
      </NeueHaasGroteskText>
      {interactiveIcon && link && (
        <Link href={link}>
          <Flex
            position="absolute"
            right={rem(22)}
            bottom={rem(22)}
            width={rem(45)}
            h={rem(45)}
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
            right={rem(22)}
            bottom={rem(22)}
            width={rem(45)}
            h={rem(45)}
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
                width={rem(65)}
                height={rem(65)}
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
                <Close />
              </Flex>
              {expandContent}
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
};
