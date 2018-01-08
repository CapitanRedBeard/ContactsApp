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

  render() {
    const { contacts, isLoading } = this.props

    const sections = [
      {
        title: `A`,
        data: contacts
      }
    ]
    // const favoriteTickers = tickers.filter(ticker => Boolean(favorites[ticker.symbol]))
    // const otherTickers = tickers.filter(ticker => !Boolean(favorites[ticker.symbol]))
    // const sections = []
    // if(favoriteTickers.length) {
    //   sections.push({title: `Favorite Currencies`,  data: favoriteTickers})
    // }
    // sections.push({title: `Other Currencies`,  data: otherTickers})

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
                onRefresh={this._onRefresh}
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
