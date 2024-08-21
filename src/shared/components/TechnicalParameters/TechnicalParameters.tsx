import { Box, Flex, Grid, Select } from '@chakra-ui/react';
import { Container } from '../Container';
import { Label } from '../Label';
import { rem } from 'polished';
import { NeueHaasGroteskDisplay, NeueHaasGroteskText } from '../Typography';
import { useTranslation } from 'next-i18next';
import { useCollapse } from 'react-collapsed';
import {
  Minus,
  ParamCheckmark,
  ParamClose,
  Plus,
  PrimaryButton,
} from '../../design';
import { useState } from 'react';

type TechnicalParametersProps = {
  label: string;
  color: string;
  buttonColor?: string;
  selectColor?: string;
  params: {
    chladiaciVykon: string;
    vykurovaciVykon: string;
    energetickaTrieda: string;
    hlucnostVnutornejJednotky: string;
    hlucnostVonkajsejJednotky: string;
    seer: string;
    scop: string;
    hmotnostVnutornejJednotky: string;
    hmotnostVonkajsejJednotky: string;
    rozmeryVnutornejJednotky: string;
    rozmeryVonkajsejJednotky: string;
    ionizator: boolean;
    nasavanieVzduchuZExterieru: boolean;
    wifiModul: boolean;
    sterilizacia: boolean;
    dierkovanaLamela: boolean;
    dlhodobeVykurovanie: string;
    aktivneCistenie: boolean;
    zaruka: string;
    chladivo: string;
  }[];
};

const Item = ({
  label,
  value,
  withBorder = true,
  withBorderRight = true,
}: {
  label: string;
  value: string | boolean;
  withBorder?: boolean;
  withBorderRight?: boolean;
}) => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      columnGap={rem(20)}
      borderRight={{
        base: 'none',
        xl: withBorderRight ? '2px solid #DADADA' : 'none',
      }}
      borderBottom={withBorder ? '2px solid #DADADA' : 'none'}
      px={rem(16)}
      py={rem(20)}
    >
      <NeueHaasGroteskDisplay
        fontSize={{ base: rem(12), xs: rem(14), md: rem(18) }}
        color="text.params"
        fontWeight={600}
      >
        {label}
      </NeueHaasGroteskDisplay>
      {typeof value === 'string' && (
        <NeueHaasGroteskDisplay
          fontSize={{ base: rem(12), xs: rem(14), md: rem(18) }}
          color="text.params"
          fontWeight={600}
        >
          {value}
        </NeueHaasGroteskDisplay>
      )}
      {typeof value === 'boolean' && (
        <Box>{value ? <ParamCheckmark /> : <ParamClose />}</Box>
      )}
    </Flex>
  );
};

export const TechnicalParameters = ({
  label,
  color,
  buttonColor = 'text.naitec_blue',
  selectColor = 'text.smart_dark',
  params,
}: TechnicalParametersProps) => {
  const { t } = useTranslation();
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const [activeParam, setActiveParam] = useState(0);
  return (
    <Box position="relative" top={rem(1)}>
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', md: 'center' }}
          flexDir={{ base: 'column', xl: 'row' }}
        >
          <Box ml={{ base: 0, md: rem(100) }}>
            <Label text={label} color="text.link" borderColor="text.link" />
            <NeueHaasGroteskDisplay
              fontSize={{ base: rem(30), md: rem(64) }}
              lineHeight={{ base: rem(30), md: rem(64) }}
              fontWeight={600}
              color="text.link"
              mt={rem(25)}
              sx={{
                strong: {
                  backgroundImage: color,
                  backgroundClip: 'text',
                  color: 'transparent',
                },
              }}
              dangerouslySetInnerHTML={{
                __html: t('techinal_parameters_title'),
              }}
            />
            <NeueHaasGroteskText
              mt={rem(20)}
              lineHeight="130%"
              fontSize={{ base: rem(16), md: rem(22) }}
              color="text.light"
              fontWeight={500}
              maxW={rem(700)}
              sx={{ strong: { color: 'text.link' } }}
              dangerouslySetInnerHTML={{
                __html: t('techinal_parameters_description'),
              }}
            />
          </Box>
          {params.length > 1 && (
            <Box>
              <Select
                // placeholder={`${t('choose_performance')} (${
                //   params[activeParam].chladiaciVykon
                // }kw)`}
                width="100%"
                mt={rem(18)}
                variant="smart"
                name="service"
                onChange={(event) => setActiveParam(Number(event.target.value))}
                value={activeParam}
              >
                {params.map((param, index) => (
                  <option value={index}>{`${t('choose_performance')} (${
                    param.chladiaciVykon
                  }kw)`}</option>
                ))}
              </Select>
            </Box>
          )}
        </Flex>
      </Container>
      <Box width="100%" mt={rem(40)} position="relative">
        <Box zIndex={2} pos="relative">
          <Container>
            <Grid
              backgroundColor="#EAEAEA"
              borderRadius={rem(20)}
              gridTemplateColumns="1fr 1fr"
              p={rem(44)}
              display={{ base: 'none', xl: 'grid' }}
            >
              <Box>
                <Item
                  label={t('technical_parameters_cooling_performance')}
                  value={params[activeParam].chladiaciVykon}
                />
                <Item
                  label={t('technical_parameters_heating_performance')}
                  value={params[activeParam].vykurovaciVykon}
                />
                <Item
                  label={t('technical_parameters_energy_class')}
                  value={params[activeParam].energetickaTrieda}
                />
                <Item
                  label={t('technical_parameters_indoor_unit_noise')}
                  value={params[activeParam].hlucnostVnutornejJednotky}
                />
                <Item
                  label={t('technical_parameters_outdoor_unit_noise')}
                  value={params[activeParam].hlucnostVonkajsejJednotky}
                />
                <Item
                  label={t('technical_parameters_seer')}
                  value={params[activeParam].seer}
                />
                <Item
                  label={t('technical_parameters_scop')}
                  value={params[activeParam].scop}
                />
                <Item
                  label={t('technical_parameters_indoor_unit_weight')}
                  value={params[activeParam].hmotnostVnutornejJednotky}
                />
                <Item
                  label={t('technical_parameters_outdoor_unit_weight')}
                  value={params[activeParam].hmotnostVonkajsejJednotky}
                />
                <Item
                  withBorder={false}
                  label={t('technical_parameters_indoor_unit_dimensions')}
                  value={params[activeParam].rozmeryVnutornejJednotky}
                />
              </Box>
              <Box>
                <Item
                  label={t('technical_parameters_outdoor_unit_dimensions')}
                  value={params[activeParam].rozmeryVonkajsejJednotky}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_ionizer')}
                  value={params[activeParam].ionizator}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_air_taker_from_the_outside')}
                  value={params[activeParam].nasavanieVzduchuZExterieru}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_wifi_module')}
                  value={params[activeParam].wifiModul}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_sterilization')}
                  value={params[activeParam].sterilizacia}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_perforated_lamella')}
                  value={params[activeParam].dierkovanaLamela}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_long_term_heating')}
                  value={params[activeParam].dlhodobeVykurovanie}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_active_cleaning')}
                  value={params[activeParam].aktivneCistenie}
                  withBorderRight={false}
                />
                <Item
                  label={t('technical_parameters_warranty')}
                  value={params[activeParam].zaruka}
                  withBorderRight={false}
                />
                <Item
                  withBorder={false}
                  label={t('technical_parameters_coolant')}
                  value={params[activeParam].chladivo}
                  withBorderRight={false}
                />
              </Box>
            </Grid>
            <Box>
              <Box
                display={{ base: 'block', xl: 'none' }}
                backgroundColor="#EAEAEA"
                borderRadius={rem(20)}
                p={{ base: rem(16), md: rem(30) }}
              >
                <Box>
                  <Item
                    label={t('technical_parameters_cooling_performance')}
                    value={params[activeParam].chladiaciVykon}
                  />
                  <Item
                    label={t('technical_parameters_heating_performance')}
                    value={params[activeParam].vykurovaciVykon}
                  />
                  <Item
                    label={t('technical_parameters_energy_class')}
                    value={params[activeParam].energetickaTrieda}
                  />
                  <Item
                    label={t('technical_parameters_indoor_unit_noise')}
                    value={params[activeParam].hlucnostVnutornejJednotky}
                  />
                  <Item
                    label={t('technical_parameters_outdoor_unit_noise')}
                    value={params[activeParam].hlucnostVonkajsejJednotky}
                  />
                  <Item
                    label={t('technical_parameters_seer')}
                    value={params[activeParam].seer}
                  />
                  <Item
                    label={t('technical_parameters_scop')}
                    value={params[activeParam].scop}
                  />
                  <Item
                    label={t('technical_parameters_indoor_unit_weight')}
                    value={params[activeParam].hmotnostVnutornejJednotky}
                  />
                  <Item
                    label={t('technical_parameters_outdoor_unit_weight')}
                    value={params[activeParam].hmotnostVonkajsejJednotky}
                  />
                  <Item
                    withBorder={false}
                    label={t('technical_parameters_indoor_unit_dimensions')}
                    value={params[activeParam].rozmeryVnutornejJednotky}
                  />
                </Box>
                <Box {...getCollapseProps()}>
                  <Item
                    label={t('technical_parameters_outdoor_unit_dimensions')}
                    value={params[activeParam].rozmeryVonkajsejJednotky}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_ionizer')}
                    value={params[activeParam].ionizator}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_air_taker_from_the_outside')}
                    value={params[activeParam].nasavanieVzduchuZExterieru}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_wifi_module')}
                    value={params[activeParam].wifiModul}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_sterilization')}
                    value={params[activeParam].sterilizacia}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_perforated_lamella')}
                    value={params[activeParam].dierkovanaLamela}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_long_term_heating')}
                    value={params[activeParam].dlhodobeVykurovanie}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_active_cleaning')}
                    value={params[activeParam].aktivneCistenie}
                    withBorderRight={false}
                  />
                  <Item
                    label={t('technical_parameters_warranty')}
                    value={params[activeParam].zaruka}
                    withBorderRight={false}
                  />
                  <Item
                    withBorder={false}
                    label={t('technical_parameters_coolant')}
                    value={params[activeParam].chladivo}
                    withBorderRight={false}
                  />
                </Box>
              </Box>
              <Flex
                justifyContent="center"
                mt={rem(20)}
                display={{ base: 'flex', xl: 'none' }}
              >
                <PrimaryButton
                  {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                  })}
                  backgroundColor={buttonColor}
                  borderColor={buttonColor}
                  icon={
                    isExpanded ? (
                      <Minus color="white" />
                    ) : (
                      <Plus color="white" />
                    )
                  }
                >
                  {isExpanded ? t('show_less') : t('show_more')}
                </PrimaryButton>
              </Flex>
            </Box>
          </Container>
        </Box>
        <Box
          position="absolute"
          left={0}
          bottom={0}
          right={0}
          height="50%"
          backgroundColor="background.primary"
          zIndex={1}
        />
      </Box>
    </Box>
  );
};
