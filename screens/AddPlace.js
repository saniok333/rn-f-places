import { StyleSheet } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (placeData) => {
    navigation.navigate('AllPlaces', {
      place: placeData,
    });
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
