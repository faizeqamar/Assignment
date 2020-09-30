import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function call() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>You Only Live Once...</Text>
      <Text style={styles.textStyle}> Lick The Bowl!</Text>
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
