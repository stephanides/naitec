import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { rem } from 'polished';
import { FormikHelpers, useFormik } from 'formik';
import { ArrowRight, PrimaryButton } from '@/src/shared/design';
import { CheckMark } from '@/src/shared/design';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export type ContactFormValues = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
  agreements: boolean;
};

async function submitContact(orderData: ContactFormValues) {
  try {
    const response = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit order');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error submitting order:', error);
    throw error;
  }
}

export const ContactForm = () => {
  const { t } = useTranslation(['contact', 'common']);
  const toast = useToast();
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      message: '',
      agreements: false,
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Povinné pole'),
      surname: yup.string(),
      phone: yup.string().required('Povinné pole'),
      email: yup.string().required('Povinné pole'),
      message: yup.string().required('Povinné pole'),
    }),

    onSubmit: async (
      values: ContactFormValues,
      { setSubmitting }: FormikHelpers<ContactFormValues>
    ) => {
      try {
        setSubmitting(true);
        await submitContact({ ...values });
        setSubmitting(false);
        formik.resetForm();
        toast({
          title: t('contact_sent'),
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'bottom-right',
          variant: 'customSuccess',
        });
        // formik.resetForm();
      } catch (err) {
        toast({
          title: t('send_error'),
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Flex columnGap={rem(20)} flexDir={{ base: 'column', xs: 'row' }}>
          <FormControl
            mt={rem(18)}
            isInvalid={formik.touched.name && !!formik.errors.name}
          >
            <Box position="relative">
              <Input
                variant="normal"
                type="text"
                name="name"
                placeholder={`${t('name')}*`}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <Box position="absolute" right={rem(20)} top="calc(50% - 8px)">
                <CheckMark />
              </Box>
            </Box>
            <FormErrorMessage>
              {formik.touched.name && formik.errors.name}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            mt={rem(18)}
            isInvalid={formik.touched.surname && !!formik.errors.surname}
          >
            <Box position="relative">
              <Input
                variant="normal"
                type="text"
                name="surname"
                placeholder={`${t('surname')}*`}
                onChange={formik.handleChange}
                value={formik.values.surname}
              />
              <Box position="absolute" right={rem(20)} top="calc(50% - 8px)">
                <CheckMark />
              </Box>
            </Box>
            <FormErrorMessage>
              {formik.touched.surname && formik.errors.surname}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex columnGap={rem(20)} flexDir={{ base: 'column', xs: 'row' }}>
          <FormControl
            mt={rem(18)}
            isInvalid={formik.touched.phone && !!formik.errors.phone}
          >
            <Box position="relative">
              <Input
                variant="normal"
                type="text"
                name="phone"
                placeholder={`${t('phone')}*`}
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              <Box position="absolute" right={rem(20)} top="calc(50% - 8px)">
                <CheckMark />
              </Box>
            </Box>
            <FormErrorMessage>
              {formik.touched.phone && formik.errors.phone}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            mt={rem(18)}
            isInvalid={formik.touched.email && !!formik.errors.email}
          >
            <Box position="relative">
              <Input
                variant="normal"
                type="text"
                name="email"
                placeholder={`${t('email')}*`}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <Box position="absolute" right={rem(20)} top="calc(50% - 8px)">
                <CheckMark />
              </Box>
            </Box>
            <FormErrorMessage>
              {formik.touched.email && formik.errors.email}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <FormControl
          isInvalid={formik.touched.message && !!formik.errors.message}
        >
          <Box position="relative">
            <Textarea
              variant="custom"
              mt={rem(16)}
              name="message"
              placeholder={t('message')}
              rows={10}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <Box position="absolute" right={rem(20)} top="36px">
              <CheckMark />
            </Box>
          </Box>
          <FormErrorMessage>
            {formik.touched.message && formik.errors.message}
          </FormErrorMessage>
        </FormControl>

        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          mt={rem(22)}
          flexDir={{ base: 'column', lg: 'row' }}
          rowGap={{ base: rem(20), lg: 0 }}
        >
          <Box>
            <Checkbox
              variant="custom"
              isChecked={formik.values.agreements}
              onChange={formik.handleChange}
              name="agreements"
            >
              {t('agreements')}
            </Checkbox>
            <Text
              mt={rem(10)}
              fontSize={{ base: rem(10), md: rem(12) }}
              color="rgba(0,0,0,0.60)"
              maxW={rem(544)}
              sx={{
                a: {
                  textDecoration: 'underline !important',
                  color: '#1C6BBA',
                },
              }}
            >
              *{t('agreements_text')}{' '}
              <Link href="/ochrana-osobnych-udajov">{t('privacy_policy')}</Link>
              .
            </Text>
          </Box>
          <PrimaryButton
            type="submit"
            background="background.naitec_blue"
            borderColor="text.inverted"
            isDisabled={!formik.values.agreements || formik.isSubmitting}
            icon={<ArrowRight />}
            width="100%"
            height={{ base: '53px', xs: 'auto' }}
          >
            {t('common:send')}
          </PrimaryButton>
        </Flex>
      </form>
    </Box>
  );
};
