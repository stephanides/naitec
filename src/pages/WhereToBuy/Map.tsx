import { useState, useEffect, useCallback, useRef } from 'react';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
  MarkerClusterer,
  InfoWindow,
} from '@react-google-maps/api';
import { Box, Checkbox, Flex } from '@chakra-ui/react';
import { Store } from '@/src/shared/types';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import { StoreDetail } from './StoreDetail';
import { Search } from '@/src/shared/design';
import {
  NeueHaasGroteskDisplay,
  NeueHaasGroteskText,
} from '@/src/shared/components';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 48.810513,
  lng: 19.276645,
};

const FILTER = [
  { label: 'filter_air_condition', value: 'air_conditioners' },
  { label: 'filter_accessories', value: 'accessories' },
  { label: 'filter_household', value: 'household' },
];

const sortStoresByAttributes = (stores: Store[]): Store[] => {
  // Helper function to calculate the points for each store
  const calculatePoints = (store: Store): number => {
    const attributes = store.attributes;
    let points = 0;

    // Add points based on the attributes
    if (attributes.email) points += 1;
    if (attributes.phone) points += 1;
    if (attributes.website) points += 1;
    if (attributes.air_conditioner) points += 1;
    if (attributes.accessories) points += 1;
    if (attributes.household) points += 1;
    if (attributes.content) points += 1;

    return points;
  };

  // Sort the stores by their calculated points in descending order
  return stores.sort((storeA, storeB) => {
    const pointsA = calculatePoints(storeA);
    const pointsB = calculatePoints(storeB);

    // Sort in descending order (higher points first)
    return pointsB - pointsA;
  });
};

// const customMarkerIcon = {
//   url: 'https://naitec.b-cdn.net/marker.png', // Replace with your image URL
//   scaledSize: new google.maps.Size(100, 100), // Specify the size of the icon
//   origin: new google.maps.Point(0, 0), // Origin of the image
//   anchor: new google.maps.Point(50, 50), // Anchor of the image (adjusted for a larger icon)
// };

const clusterStyles = [
  {
    url: 'https://naitec.b-cdn.net/marker.png',
    height: 100,
    width: 100,
    textColor: '#ffffff',
    textSize: 16,
    backgroundColor: '#4F9CC2', // Not directly used, but could be part of the custom design
  },
  {
    url: 'https://naitec.b-cdn.net/marker.png',
    height: 100,
    width: 100,
    textColor: '#ffffff',
    textSize: 16,
    backgroundColor: '#4F9CC2',
  },
  {
    url: 'phttps://naitec.b-cdn.net/marker.png',
    height: 100,
    width: 100,
    textColor: '#ffffff',
    textSize: 16,
    backgroundColor: '#4F9CC2',
  },
];

export const StoreLocator = ({ stores }: { stores: Store[] }) => {
  const { t } = useTranslation(['wheretobuy', 'common']);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY as string,
    libraries: ['places'], // Load the places library for Autocomplete
  });
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [center, setCenter] = useState(defaultCenter);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [visibleStores, setVisibleStores] = useState<any[]>(stores); // Stores visible in the current map view
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const mapRef = useRef<google.maps.Map | null>(null); // Ref to store the map instance

  const handleMarkerClick = (store: Store) => {
    setSelectedStore(store); // Store the clicked marker's information
  };

  // Function to update visible stores based on the map bounds
  const updateVisibleStores = useCallback(() => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds(); // Get current map bounds
      if (bounds) {
        const filteredStores = stores.filter((store) => {
          // Filter based on selected filters

          const matchesFilter =
            selectedFilter.length > 0
              ? selectedFilter.every(
                  // @ts-ignore
                  (filter) => store.attributes[filter]
                )
              : true;

          const storeLocation = new google.maps.LatLng(
            Number(store.attributes.lat),
            Number(store.attributes.lng)
          );

          // Check if the store is within the map bounds and matches the filters
          return bounds.contains(storeLocation) && matchesFilter;
        });
        const sortedStores = sortStoresByAttributes(filteredStores);
        setVisibleStores(sortedStores); // Update visible stores
      }
    }
  }, [stores, selectedFilter]);

  // Handle checkbox changes
  const handleFilterChange = (value: string) => {
    setSelectedFilter((prevSelected) => {
      // If the filter is already selected, remove it
      if (prevSelected.includes(value)) {
        return prevSelected.filter((filter) => filter !== value);
      }
      // If the filter is not selected, add it
      return [...prevSelected, value];
    });
  };

  const onIdle = useCallback(() => {
    updateVisibleStores(); // Update visible stores when the map stops moving
  }, [updateVisibleStores]);

  useEffect(() => {
    if (stores.length > 0) {
      updateVisibleStores();
    }
  }, [stores, updateVisibleStores]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.warn('Geolocation failed or was denied by the user');
        }
      );
    }
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map; // Save map instance to the ref
  }, []);

  const onPlaceChanged = useCallback(() => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const location = place.geometry?.location;
      mapRef.current?.setZoom(12);
      if (location) {
        setCenter({
          lat: location.lat(),
          lng: location.lng(),
        });
      }
    } else {
      console.warn('Autocomplete is not loaded yet!');
    }
  }, [autocomplete]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <Flex
      height={{ base: 'auto', lg: rem(200) }}
      minH="calc(100vh - 100px)"
      flexDirection={{ base: 'column-reverse', lg: 'row' }}
      justifyContent="flex-end"
    >
      <Box
        width={{ base: '100%', lg: rem(400), xl: rem(500) }}
        minW={{ base: '100%', lg: rem(400), xl: rem(500) }}
        background="white"
        borderTopLeftRadius={rem(20)}
        borderBottomLeftRadius={rem(20)}
        borderTopRightRadius={{ base: rem(20), xl: 0 }}
        borderBottomRightRadius={{ base: rem(20), xl: 0 }}
        height="100%"
        overflowY="auto"
        position="relative"
        top={{ base: rem(-14), lg: 0 }}
        maxHeight={{ base: rem(720), xl: '100%' }}
      >
        <Box
          position="sticky"
          top={0}
          background="white"
          p={rem(20)}
          pb={rem(5)}
          zIndex={2}
        >
          <Autocomplete
            onLoad={setAutocomplete}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              type="text"
              placeholder={t('search_placeholder')}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ABABAB',
                borderRadius: rem(8),
              }}
            />
          </Autocomplete>
          <Box
            width={rem(18)}
            position="absolute"
            top={rem(32)}
            right={rem(32)}
          >
            <Search />
          </Box>
          <Flex py={rem(16)} flexWrap="wrap" rowGap={rem(16)}>
            {FILTER.map((filter) => (
              <Box key={filter.value} mr={rem(10)}>
                <Checkbox
                  isChecked={selectedFilter.includes(filter.value)}
                  onChange={() => handleFilterChange(filter.value)}
                >
                  {t(`common:${filter.label}`)}
                </Checkbox>
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Display visible stores in the list */}
        <Box p={rem(20)} pt={0} position="relative" zIndex={1}>
          {visibleStores.map((store) => (
            <StoreDetail key={store.id} store={store} />
          ))}
        </Box>
      </Box>
      {/* Google Map with markers */}
      <Box
        width="100%"
        height={{ base: '60vh', lg: '100%' }}
        borderTopRightRadius={rem(20)}
        borderBottomRightRadius={rem(20)}
        borderTopLeftRadius={{ base: rem(20), xl: 0 }}
        borderBottomLeftRadius={{ base: rem(20), xl: 0 }}
        overflow="hidden"
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={6}
          center={center}
          onLoad={onLoad} // Correctly handle the map instance
          onIdle={onIdle} // Update visible stores when map stops moving
        >
          <MarkerClusterer
            options={{
              styles: clusterStyles, // Apply custom styles
              gridSize: 60, // Adjust grid size to control when markers cluster
              maxZoom: 15, // Adjust zoom level for clusters
            }}
          >
            {(clusterer) => (
              <>
                {visibleStores.map((store: Store) => (
                  <Marker
                    key={store.id}
                    position={{
                      lat: Number(store.attributes.lat),
                      lng: Number(store.attributes.lng),
                    }}
                    onClick={() => handleMarkerClick(store)} // Handle marker click
                    icon={{
                      url: 'https://naitec.b-cdn.net/marker.png', // Replace with your image URL
                      scaledSize: new google.maps.Size(60, 60), // Specify the size of the icon
                      origin: new google.maps.Point(0, 0), // Origin of the image
                      anchor: new google.maps.Point(50, 50),
                    }} // Anchor of the image (adjusted for a larger icon)}
                    clusterer={clusterer} // Use MarkerClusterer to cluster markers
                  >
                    {selectedStore?.id === store.id && (
                      <InfoWindow
                        onCloseClick={() => setSelectedStore(null)} // Close InfoWindow
                        position={{
                          lat: Number(store.attributes.lat),
                          lng: Number(store.attributes.lng),
                        }}
                      >
                        <div>
                          <NeueHaasGroteskDisplay
                            fontSize={rem(16)}
                            fontWeight={600}
                          >
                            {store.attributes.title}
                          </NeueHaasGroteskDisplay>
                          <NeueHaasGroteskText fontSize={rem(12)}>
                            {store.attributes.street}
                          </NeueHaasGroteskText>
                          <a href={`mailto:${store.attributes.email}`}>
                            <NeueHaasGroteskText
                              color="text.naitec_blue"
                              textDecor="underline"
                              fontSize={rem(12)}
                              mt={rem(8)}
                            >
                              {store.attributes.email}
                            </NeueHaasGroteskText>
                          </a>
                          <a href={`tel:${store.attributes.phone}`}>
                            <NeueHaasGroteskText
                              color="text.naitec_blue"
                              textDecor="underline"
                              fontSize={rem(12)}
                              mt={rem(8)}
                            >
                              {store.attributes.phone}
                            </NeueHaasGroteskText>
                          </a>
                          {/* Display additional store details */}
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                ))}
              </>
            )}
          </MarkerClusterer>
        </GoogleMap>
      </Box>
    </Flex>
  );
};
