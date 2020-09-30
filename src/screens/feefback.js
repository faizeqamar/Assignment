import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function feefback() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Welcome to FeedBack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
