import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { rem } from 'polished';
import { FormikHelpers, useFormik } from 'formik';
import {
  ArrowRight,
  LINEAR_GRADIENTS,
  PrimaryButton,
} from '@/src/shared/design';
import { CheckMark } from '@/src/shared/design';
import Link from 'next-translate-routes/link';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { INTERNAL_ROUTES } from '@/src/shared/constants';
import {
  Label,
  NeueHaasGroteskDisplay,
  NeueHaasGroteskText,
} from '@/src/shared/components';
import { getSocials } from './FollowPanel';

export type GiveawayContactFormValues = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  country: boolean;
  instagram: boolean;
  facebook: boolean;
  agreements: boolean;
};

export type GiveawayContactSubmitValues = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  country: string;
  instagram: boolean;
  facebook: boolean;
  agreements: boolean;
};

async function submitContact({
  recaptcha,
  ...orderData
}: { recaptcha: string | null } & GiveawayContactSubmitValues) {
  try {
    const response = await fetch('/api/submit-giveaway', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...orderData, recaptcha }),
    });

    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Email already exists');
      }
      throw new Error('Failed to submit giveaway');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error submitting giveaway:', error);
    throw error;
  }
}

export const GiveawayContactForm = ({ country }: { country: string }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { t } = useTranslation(['sutazsk', 'common']);
  const toast = useToast();
  const socials = getSocials(country);
  const formik = useFormik<GiveawayContactFormValues>({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      country: false,
      instagram: false,
      facebook: false,
      agreements: false,
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Povinné pole'),
      surname: yup.string().required('Povinné pole'),
      phone: yup.string(),
      email: yup.string().required('Povinné pole'),
      country: yup
        .boolean()
        .oneOf([true], 'Musí byť zaškrtnuté')
        .required('Povinné pole'),
      instagram: yup
        .boolean()
        .oneOf([true], 'Musí byť zaškrtnuté')
        .required('Povinné pole'),

      facebook: yup
        .boolean()
        .oneOf([true], 'Musí byť zaškrtnuté')
        .required('Povinné pole'),
    }),

    onSubmit: async (
      values: GiveawayContactFormValues,
      { setSubmitting }: FormikHelpers<GiveawayContactFormValues>
    ) => {
      try {
        let recaptchaResponse: string | null = '';
        if (recaptchaRef.current) {
          recaptchaResponse = await recaptchaRef.current.executeAsync();
        }
        setSubmitting(true);
        await submitContact({
          ...values,
          recaptcha: recaptchaResponse,
          country,
        });
        setSubmitting(false);
        formik.resetForm();
        toast({
          title: t('contact_sent'),
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top-right',
          variant: 'customSuccess',
        });

        // formik.resetForm();
      } catch (err) {
        //@ts-ignore
        if (err?.message === 'Email already exists') {
          toast({
            title: t('send_error_email_exists'),
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          });
        } else {
          toast({
            title: t('send_error'),
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          });
        }
      }
    },
  });

  return (
    <Box
      mt={rem(96)}
      bg="rgba(237, 237, 237, 0.68)"
      border="2px solid"
      borderColor="rgba(202, 202, 202, 0.43)"
      borderRadius={rem(20)}
      py={rem(85)}
      px={{ base: rem(20), lg: rem(100) }}
    >
      <Flex
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Label
          text={t('form_label')}
          color="text.link"
          borderColor="text.link"
        />
        <Flex
          maxW={{ base: rem(450), lg: rem(696) }}
          justifyContent="center"
          mt={rem(12)}
        >
          <NeueHaasGroteskDisplay
            maxW={{ base: rem(295), xs: rem(660) }}
            fontSize={{ base: rem(30), md: rem(48), lg: rem(64) }}
            color="text.link"
            textAlign="center"
            lineHeight="112%"
            fontWeight={600}
            sx={{ strong: { color: 'text.naitec_blue' } }}
            dangerouslySetInnerHTML={{ __html: t('form_title') }}
          />
        </Flex>
        <NeueHaasGroteskText
          sx={{ strong: { color: 'text.link', fontWeight: 500 } }}
          color="text.light"
          fontWeight={500}
          fontSize={{ base: rem(16), xs: rem(20) }}
          lineHeight="130%"
          mt={rem(23)}
          textAlign="center"
          maxW={rem(850)}
          as="span"
        >
          <span dangerouslySetInnerHTML={{ __html: t('form_description_1') }} />
          <a href="/">
            <Text
              fontWeight="bold"
              as="span"
              position="relative"
              bgGradient="linear(to-r, #4451DC, #C51F95 33%, #F03943 66%, #FEBD47)"
              bgClip="text"
              sx={{
                WebkitTextFillColor: 'transparent',
                '&::after': {
                  content: "''",
                  position: 'absolute',
                  bottom: 0,
                  left: '2px',
                  height: '2px',
                  width: '100%',
                  background:
                    'linear-gradient(90deg, #4451DC, #C51F95 33%, #F03943 66%, #FEBD47)',
                },
              }}
              dangerouslySetInnerHTML={{
                __html: t('form_description_2', {
                  instagram_link: socials.instagram,
                }),
              }}
            />
          </a>
          <span dangerouslySetInnerHTML={{ __html: t('form_description_3') }} />
          <a href="/">
            <Text
              fontWeight="bold"
              as="span"
              position="relative"
              color="#14A2FA"
              sx={{
                '&::after': {
                  content: "''",
                  position: 'absolute',
                  bottom: 0,
                  left: '2px',
                  height: '2px',
                  width: '100%',
                  background: '#14A2FA',
                },
              }}
              dangerouslySetInnerHTML={{
                __html: t('form_description_4', {
                  facebook_link: socials.facebook,
                }),
              }}
            />
          </a>
          <span dangerouslySetInnerHTML={{ __html: t('form_description_5') }} />
        </NeueHaasGroteskText>
      </Flex>
      <form onSubmit={formik.handleSubmit}>
        <Flex
          columnGap={rem(20)}
          flexDir={{ base: 'column', xs: 'row' }}
          mt={rem(40)}
        >
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
          <FormControl
            mt={rem(18)}
            isInvalid={formik.touched.phone && !!formik.errors.phone}
          >
            <Box position="relative">
              <Input
                variant="normal"
                type="text"
                name="phone"
                placeholder={`${t('phone')}`}
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
        </Flex>
        <FormControl
          mt={rem(18)}
          isInvalid={formik.touched.country && !!formik.errors.country}
        >
          <Box position="relative">
            <Box
              position="relative"
              width="100%"
              borderRadius="10px"
              background="white"
              border="1px solid #C1C1C1"
              bg={!formik.values.country ? 'white' : 'background.naitec_blue'}
            >
              <Checkbox
                variant="social"
                isChecked={formik.values.country}
                onChange={formik.handleChange}
                name="country"
                w="100%"
              >
                <NeueHaasGroteskText
                  color={formik.values.country ? 'white' : 'black'}
                  dangerouslySetInnerHTML={{ __html: t('country') }}
                />
              </Checkbox>
            </Box>
          </Box>
          <FormErrorMessage>
            {formik.touched.country && formik.errors.country}
          </FormErrorMessage>
        </FormControl>
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          mt={rem(20)}
          gap={rem(20)}
        >
          <FormControl
            isInvalid={formik.touched.instagram && !!formik.errors.instagram}
          >
            <Box
              position="relative"
              width="100%"
              borderRadius="10px"
              // background="white"
              opacity={0.8}
              zIndex={1}
              overflow="hidden"
              background={
                !formik.values.instagram
                  ? 'white'
                  : 'linear-gradient(90deg, #4451DC, #C51F95 33%, #F03943 66%, #FEBD47)'
              }
              sx={{
                '&::before': {
                  content: "''",
                  position: 'absolute',
                  inset: 0,
                  padding: '2.5px',
                  borderRadius: '10px',
                  background: formik.values.instagram
                    ? 'white'
                    : 'linear-gradient(90deg, #4451DC, #C51F95 33%, #F03943 66%, #FEBD47)',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  zIndex: -1,
                },
              }}
            >
              <Checkbox
                variant="social"
                isChecked={formik.values.instagram}
                onChange={formik.handleChange}
                name="instagram"
                w="100%"
                h={{ base: rem(54), lg: rem(70) }}
              >
                <NeueHaasGroteskText
                  dangerouslySetInnerHTML={{ __html: t('insta_checkbox') }}
                  pos="relative"
                  top={rem(0)}
                  color={formik.values.instagram ? 'white' : 'black'}
                  sx={{
                    strong: {
                      background: formik.values.instagram
                        ? 'white'
                        : LINEAR_GRADIENTS.insta,
                      backgroundClip: 'text',
                    },
                  }}
                />
              </Checkbox>
            </Box>
            <FormErrorMessage>
              {formik.touched.instagram && formik.errors.instagram}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={formik.touched.facebook && !!formik.errors.facebook}
          >
            <Box
              position="relative"
              width="100%"
              borderRadius="10px"
              background={formik.values.facebook ? '#14A2FA' : 'white'}
              border={
                formik.values.facebook
                  ? '2.5px solid white'
                  : '2.5px solid #14A2FA'
              }
            >
              <Checkbox
                variant="social"
                isChecked={formik.values.facebook}
                onChange={formik.handleChange}
                name="facebook"
                w="100%"
              >
                <NeueHaasGroteskText
                  color={formik.values.facebook ? 'white' : 'black'}
                  dangerouslySetInnerHTML={{ __html: t('facebook_checkbox') }}
                />
              </Checkbox>
            </Box>
            <FormErrorMessage>
              {formik.touched.facebook && formik.errors.facebook}
            </FormErrorMessage>
          </FormControl>
        </Grid>
        <NeueHaasGroteskText
          fontSize={rem(14)}
          opacity={0.4}
          mt={rem(20)}
          maxW={rem(804)}
        >
          {t('agreements_info')}
        </NeueHaasGroteskText>
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
              <Link href={INTERNAL_ROUTES.PRIVACY_POLICY}>
                {t('privacy_policy')}
              </Link>
              .
            </Text>
          </Box>
          <PrimaryButton
            type="submit"
            background="background.naitec_blue"
            borderColor="text.inverted"
            isDisabled={!formik.values.agreements || formik.isSubmitting}
            icon={<ArrowRight />}
            width={{ base: '100%', xl: 'auto' }}
            height={{ base: '53px', xs: 'auto' }}
          >
            {t('common:send')}
          </PrimaryButton>
        </Flex>
      </form>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
        size="invisible"
      />
    </Box>
  );
};
