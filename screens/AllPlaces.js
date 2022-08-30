import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces } from '../util/database';

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      (async () => {
        const places = await fetchPlaces();
        setLoadedPlaces(places);
      })();
      // setLoadedPlaces((currLoadedPlaces) => [
      //   ...currLoadedPlaces,
      //   route.params.place,
      // ]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
