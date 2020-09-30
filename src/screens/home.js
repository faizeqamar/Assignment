// import React from 'react';
// import {StyleSheet, Text, View, Header} from 'react-native';

// export default function home() {
//   return (
//     <View style={styles.viewStyle}>
//       <Text style={styles.textStyle}>Welcome to Home</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 40,
//     alignSelf: 'center',
//     fontWeight: 'bold',
//   },
//   viewStyle: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
// });

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
} from 'react-native';
export default function splash({navigation}) {
  const pressHandler = () => {
    navigation.push('reviewDetails');
  };
  return (
    <SafeAreaView>
      <View>
        <View style={styles.imageView}>
          <Image
            style={styles.imgStyle}
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.textView}>
          <View style={styles.viewMargin}>
            <Text style={styles.fixToText}>Trouver les restaurants</Text>
            <Text style={styles.fixToText}>et e-commerçants</Text>
            <Text style={styles.fixToText}>partenaires de CRP</Text>
          </View>

          <View style={styles.viewMargin}>
            <Text style={styles.smallText}>
              Veuillez autoriser CRP à accéder{' '}
            </Text>
            <Text style={styles.smallText}>à votre emplacement.</Text>
          </View>
        </View>
        <View style={styles.btnView}>
          <View style={styles.jAuthoriseStyle}>
            <Button color="#000" title="J'autorise" />
          </View>
          <View style={styles.refuserStyle}>
            <Button title="Refuser" color="#555" onPress={pressHandler} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  smallText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    fontSize: 12,
  },
  imgStyle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  jAuthoriseStyle: {
    backgroundColor: '#FBB81D',
    shadowOpacity: 10,
    shadowColor: '#555',
    width: '80%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  refuserStyle: {
    backgroundColor: '#fff',
    shadowOpacity: 10,
    shadowColor: '#555',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  viewMargin: {
    marginTop: 20,
    width: '100%',
  },
  textView: {
    width: '100%',
    height: '30%',
  },
  imageView: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
  },
  btnView: {
    width: '100%',
    height: '30%',
  },
});
