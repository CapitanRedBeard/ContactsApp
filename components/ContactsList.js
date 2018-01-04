import React from 'react';
import {
  View,
  SectionList,
  RefreshControl
} from 'react-native';

import Color from '../components/Color'

class ContactsList extends React.Component {
  _keyExtractor = (item, index) => item.id;


  _renderSectionHeader = ({section}) => {
    return <LabelText style={styles.label}>{section.title}</LabelText>
  }

  _onRefresh = () => {
    this.props.fetchTickers()
  }

  _renderItem = ({item}) => (
    <TickerCard ticker={item} onPressItem={this.onPressItem}/>
  );

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
                tintColor={Color.tintColor}
                titleColor={Color.tintColor}
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
    backgroundColor: Color.backgroundColor,
  },
  label: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default ContactsList
