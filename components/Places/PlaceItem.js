import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const PlaceItem = ({ place, onSelect }) => {
  const { imageUri, title, address } = place;
  return (
    <Pressable onPress={onSelect}>
      <Image source={imageUri} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
