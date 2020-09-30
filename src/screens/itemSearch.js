import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Icon, Input, Card} from 'react-native-elements';
import SearchBar from 'react-native-search-bar';
import {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Cate from '../screens/categoriList';
import Resturant from '../screens/resturant';
export default function Wel() {
  return (
    <View style={styles.contener}>
      <View>
        <Header
          leftComponent={{icon: 'build', color: '#fff'}}
          centerComponent={{text: 'Assignment', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
      </View>
      <SafeAreaView style={styles.contener}>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionText}>Commander des repas</Text>
          <Text style={styles.descriptionText}>aupres de nos partenaires</Text>
        </View>
        <View style={styles.searchView}>
          <View style={styles.searchSection}>
            <Icon
              style={styles.searchIcon}
              name="ios-search"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="User Nickname"
              onChangeText={(searchString) => {
                this.setState({searchString});
              }}
            />
            <View style={styles.rightSearchIcon}>
              <Icon
                style={styles.searchIcon}
                name="ios-search"
                size={20}
                color="#000"
              />
            </View>
          </View>
        </View>
        <View style={styles.labelView}>
          <Text style={styles.labelTextLeft}>Categories</Text>
          <Text style={styles.labelTextRight}>Voir tout</Text>
        </View>

        <View style={styles.categoryView}>
          <Cate />
        </View>
        <View style={styles.resturantLabelView}>
          <Text style={styles.labelTextLeft}>Resturant</Text>
          <Text style={styles.labelTextRight}>Voir tout</Text>
        </View>
        <View style={styles.resturantView}>
          <Resturant />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: '#fff',
  },
  descriptionView: {
    justifyContent: 'center',
    height: '15%',
    width: '100%',
    alignItems: 'center',
  },
  descriptionText: {
    alignSelf: 'center',
    fontSize: 20,
  },
  searchView: {
    height: '20%',
    justifyContent: 'center',
  },
  searchSection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#c0c0c0',
    borderWidth: 1.5,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
    height: 55,
  },
  searchIcon: {
    padding: 10,
    alignSelf: 'center',
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    width: '70%',
    alignSelf: 'center',
  },
  rightSearchIcon: {
    backgroundColor: '#FBB81D',
    width: '21%',
  },
  categoryView: {
    height: '20%',
  },
  labelView: {
    height: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelTextRight: {
    color: '#555',
    marginRight: 20,
  },
  labelTextLeft: {
    marginLeft: 20,
    fontSize: 14,
  },
  resturantLabelView: {
    height: '5%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  resturantView: {
    height: '35%',
  },
});
