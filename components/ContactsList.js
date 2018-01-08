import React from 'react';
import {
  View,
  SectionList,
  RefreshControl,
  StyleSheet,
  Text
} from 'react-native';

import Colors from '../constants/Colors'
import ContactsListItem from './ContactsListItem'

class ContactsList extends React.Component {
  _keyExtractor = (item, index) => item.number;


  _renderSectionHeader = ({section}) => {
    return <Text style={styles.sectionLabel}>{section.title}</Text>
  }

  _onRefresh = () => {
    this.props.fetchTickers()
  }

  _sortContactsIntoSections = contacts => {
    const sections = []
    contacts.forEach(contact => {
      const firstLetter = contact.name && contact.name.charAt(0).toUpperCase()
      const sectionIndex = sections.findIndex(section => section.title === firstLetter)
      if(sectionIndex !== -1) {
        sections[sectionIndex].data.push(contact)
      }else{
        sections.push({
          title: firstLetter,
          data: [contact]
        })
      }
    })

    sections.sort((a, b) => {
      var sectionTitleA = a.title
      var sectionTitleB = b.title
      if (sectionTitleA <= sectionTitleB) {
        return -1
      }
      if (sectionTitleA > sectionTitleB) {
        return 1
      }
    })


    return sections
  }

  render() {
    const { contacts, onRefresh } = this.props
    const sections = this._sortContactsIntoSections(contacts)

    return (
      <View style={styles.container}>
        {
          contacts ?
          <SectionList
            sections={sections}
            keyExtractor={this._keyExtractor}
            renderSectionHeader={this._renderSectionHeader}
            renderItem={({item}) => ContactsListItem(item)}
            initialNumToRender={20}
            refreshControl={
              <RefreshControl
                onRefresh={onRefresh}
                refreshing={false}
                title="Refresh Contacts"
                tintColor={Colors.tintColor}
                titleColor={Colors.tintColor}
              />
            }
          /> : <Loader/>
        }
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
  sectionLabel: {
    backgroundColor: Colors.backgroundColorSecondary,
    color: Colors.textValueSecondary,
    fontWeight: "600",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
});

export default ContactsList
