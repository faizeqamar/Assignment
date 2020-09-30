import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  const [images, setimages] = useState([
    require('../assets/pizza-3.png'),
    require('../assets/pizza-2.png'),
    require('../assets/pizza-3.png'),
    require('../assets/pizza-2.png'),
    require('../assets/pizza-3.png'),
    require('../assets/pizza-2.png'),
    require('../assets/pizza-3.png'),
    require('../assets/pizza-2.png'),
  ]);
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={images}
      renderItem={({item, index}) => (
        <TouchableOpacity>
          <Card style={styles.cardDesign}>
            <Image
              source={item} // Use item to set the image source
              key={index} // Important to set a key for list items
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                margin: 8,
              }}
            />
            <Text style={styles.nameText}>Pizza Vizza</Text>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'pink',
    marginTop: 24,
    fontSize: 24,
    padding: 15,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: '#FFF',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  cardDesign: {
    shadowColor: '#000',
    elevation: 1,
    height: 70,
    width: 70,
  },
});
