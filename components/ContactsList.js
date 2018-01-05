import React from 'react';
import {
  View,
  SectionList,
  RefreshControl,
  StyleSheet,
  Text
} from 'react-native';

import Colors from '../constants/Colors'

class ContactsList extends React.Component {
  _keyExtractor = (item, index) => item.id;


  _renderSectionHeader = ({section}) => {
    return <Text style={styles.label}>{section.title}</Text>
  }

  _onRefresh = () => {
    this.props.fetchTickers()
  }

  _renderItem = ({item}) => (
    <View >
      <Text>This is an item</Text>
    </View>
  );

  render() {
    const { contacts, isLoading } = this.props
    console.log("Contacts are: ", contacts)
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
          isLoading ?
          <SectionList
            sections={sections}
            keyExtractor={this._keyExtractor}
            renderSectionHeader={this._renderSectionHeader}
            renderItem={this._renderItem}
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
  label: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default ContactsList
