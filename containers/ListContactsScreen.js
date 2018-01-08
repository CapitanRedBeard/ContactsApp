import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from "react-redux"
import { Ionicons } from '@expo/vector-icons';
import Fuse from 'fuse.js'

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

  state = {
    searchValue: ''
  }

  _filterContacts = (contacts, searchValue) => {
    const options = {
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
        "number",
        "context"
      ]
    };

    if(!searchValue) {
      return contacts
    }
    var fuse = new Fuse(contacts, options); // "list" is the item array
    return fuse.search(searchValue);
  }

  handleTextChange = (searchValue) => {
    this.setState({searchValue})
  }

  componentWillMount() {
    this.props.fetchContacts()
  }

  render() {
    const { contacts, fetchContacts } = this.props
    const { searchValue } = this.state


    return (
      <View style={styles.container}>
        <Text style={styles.header} key="header" >Contacts</Text>
        <ContactSearch handleTextChange={this.handleTextChange}/>
        <ContactsList contacts={this._filterContacts(contacts, searchValue)} onRefresh={fetchContacts}/>
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
