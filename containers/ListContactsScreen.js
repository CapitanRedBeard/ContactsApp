import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from "react-redux"
import { Ionicons } from '@expo/vector-icons';

import { fetchContacts } from '../actions/contacts';
import ContactsList from '../components/ContactsList';
import ContactSearch from '../components/ContactSearch';
import Colors from '../constants/Colors'

class ContactsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons
        name="ios-contact"
        size={28}
        style={styles.icon}
      />
    ),
  };

  componentWillMount() {
    this.props.fetchContacts()
  }

  render() {
    const { contacts } = this.props

    return (
      <View style={styles.container}>
        <ContactSearch />
        <ContactsList contacts={contacts} isLoading={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Colors.backgroundColor,
  },
  label: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default connect(
  state => ({
    contacts: state.contacts
  }),
  {
    fetchContacts
  }
)(ContactsScreen)
