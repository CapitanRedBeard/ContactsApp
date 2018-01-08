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
    tabBarLabel: 'Contacts',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons
        name="ios-contact"
        size={28}
        style={{color: tintColor}}
      />
    ),
  };

  componentWillMount() {
    this.props.fetchContacts()
  }

  render() {
    const { contacts, fetchContacts } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.header} key="header" >Contacts</Text>
        <ContactSearch />
        <ContactsList contacts={contacts} onRefresh={fetchContacts}/>
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
  header: {
    padding: 10,
    marginTop: 20,
    fontSize: 24,
    fontWeight: "600",
  }
});

export default connect(
  state => ({
    contacts: state.contacts
  }),
  {
    fetchContacts
  }
)(ContactsScreen)
