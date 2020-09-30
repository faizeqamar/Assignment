// // In App.js in a new project
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import React, {useState} from 'react';
// import {View, Text, Button} from 'react-native';

// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// function HomeScreen({navigation}) {
//   const [count, setCount] = useState(0);
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button
//           title="count"
//           onPress={() => {
//             setCount((c) => c + 1);
//           }}
//         />
//       ),
//     });
//   }, [navigation, setCount]);
//   let data = {
//     name: 'Faiz e Qamar',
//     email: 'faizeqamar340@gmail.com',
//     phone: '03026746787',
//   };
//   return (
//     <View style={{flex: 1, justifyContent: 'center'}}>
//       <Text style={{alignSelf: 'center'}}>Welcome to home Screen</Text>
//       <Text style={{fontSize: 30, alignSelf: 'center'}}>{count}</Text>
//       <Button
//         title="go to detail"
//         onPress={() => navigation.push('Details', data)}
//       />
//     </View>
//   );
// }
// function DetailScreen({route}) {
//   console.warn(route.params);
//   let data = route.params;
//   return (
//     <View style={{flex: 1, justifyContent: 'center'}}>
//       <Text>Welcome to Detail Screen</Text>
//       <Text>{data.email}</Text>
//     </View>
//   );
// }

// export default App;
