import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import ListContactsScreen from './containers/ListContactsScreen'
import configureStore from './configureStore'
import Colors from './constants/Colors'

const RootNavigation = TabNavigator(
  {
    ListContacts: {
      screen: ListContactsScreen,
    },
    AddContacts: {
      screen: ListContactsScreen,
    }
  },
  {
    animationEnabled: true,
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
