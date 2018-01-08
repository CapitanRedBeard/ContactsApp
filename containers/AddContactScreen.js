import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux"
import { Ionicons } from '@expo/vector-icons';

import { fetchContacts } from '../actions/contacts';
import ContactsList from '../components/ContactsList';
import Input from '../components/Input';
import Colors from '../constants/Colors'
import Errors from '../constants/Errors'
import { normalizePhone, formatPhone } from '../helpers/format'
import { postContactAPI } from '../api/contactsAPI'

class ContactsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Add Contact',
    tabBarIcon: ({ tintColor }) => (
      <Ionicons
        name="ios-person-add"
        size={28}
        style={{color: tintColor}}
      />
    ),
  };

  state = {
    nameValue: '',
    numberValue: '',
    contextValue: '',
    nameError: null,
    numberError: null,
  }

  handleTextChange = key => (searchValue) => {
    this.setState({
      [key]: searchValue
    })
  }

  componentWillMount() {
    this.props.fetchContacts()
  }

  _handleSubmit = async () => {

    const { nameValue, numberValue, contextValue } = this.state


    const nameError = !nameValue ? Errors.nameRequired : null
    let numberError = !numberValue ? Errors.numberRequired : null


    console.log("On Submit", nameValue, numberValue, contextValue, nameError, numberError)

    if(!numberError) {
      numberError = numberValue.length < 11 ? Errors.numberE164Required : null
    }

    if(!numberError && !nameError) {
      console.log("Posting with", nameValue, numberValue, contextValue)
      await postContactAPI(nameValue, numberValue, contextValue)
      this.setState({nameValue: "", numberValue: "", contextValue: "", nameError: null, numberError: null})
    }else {
      this.setState({nameError: null, numberError: null})
    }
  }

  render() {
    const { contacts, fetchContacts } = this.props
    const { nameValue, numberValue, contextValue, nameError, numberError } = this.state


    return (
      <View style={styles.container}>
        <Text style={styles.header} key="header" >Add Contact</Text>
        <Input
          handleTextChange={(value) => this.handleTextChange("nameValue")(value)}
          placeholder="Name"
          value={nameValue}
          iconName="ios-person"
        />
        { nameError && <Text style={styles.header} key="nameError" >Add Contact</Text>}

        <Input
          handleTextChange={(value) => this.handleTextChange("numberValue")(value)}
          placeholder="Number"
          value={numberValue}
          iconName="ios-call"
        />
        { numberError && <Text style={styles.header} key="nameError" >Add Contact</Text>}

        <Input
          handleTextChange={(value) => this.handleTextChange("contextValue")(value)}
          placeholder="Context"
          value={contextValue}
          iconName="ios-bookmark"
        />

        <TouchableOpacity style={styles.submitButton} onPress={this._handleSubmit}>
          <Text style={styles.submitButtonValue} >Add Contact</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    // padding: 10,
    margin: 20,
    marginTop: 40,
    fontSize: 24,
    fontWeight: "600",
  },
  submitButton: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.tintColor,
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButtonValue: {
    color: Colors.tintColor,
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
