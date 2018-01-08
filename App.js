import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import ListContactsScreen from './containers/ListContactsScreen'
import AddContactScreen from './containers/AddContactScreen'
import configureStore from './configureStore'
import Colors from './constants/Colors'

const RootNavigation = TabNavigator(
  {
    ListContacts: {
      screen: ListContactsScreen,
    },
    AddContact: {
      screen: AddContactScreen,
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={configureStore()}>
          <RootNavigation />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
});
