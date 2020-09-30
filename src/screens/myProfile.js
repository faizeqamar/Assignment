import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Icon, Input} from 'react-native-elements';
import SearchBar from 'react-native-search-bar';
import {TextInput} from 'react-native-gesture-handler';

export default function Wel() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View>
      <Header
        leftComponent={{icon: 'build', color: '#fff'}}
        centerComponent={{text: 'MY Profile', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <View style={styles.viewText}>
        <Text style={styles.textStyle}>Commander des repas</Text>
        <Text style={styles.textStyle}>aupres de nos partenaires</Text>
        <View style={styles.viewTextInput}>
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
            <View style={styles.searchView}>
              <Icon
                style={styles.searchIcon}
                name="ios-search"
                size={20}
                color="#000"
              />
            </View>
          </View>
        </View>
        <View style={styles.categoryNameView}>
          <Text>Catagories</Text>

          <Text>Voir tout</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  viewText: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    marginTop: 20,
  },
  Header: {
    height: 80,
    width: '100%',
    backgroundColor: '#555',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#555',
    borderWidth: 1,
    padding: 10,
  },
  viewTextInput: {
    height: '30%',
    marginTop: 20,
    width: '80%',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#c0c0c0',
    borderWidth: 1.5,
    borderRadius: 5,
  },
  searchIcon: {
    padding: 10,
    alignSelf: 'center',
  },
  searchRightIcon: {},
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
  searchView: {
    backgroundColor: '#FBB81D',
    width: '21%',
  },
  categoryNameView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
