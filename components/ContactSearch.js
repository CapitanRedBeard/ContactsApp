import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Loader(props) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="ios-search"
        size={12}
        style={styles.searchIcon}
        color={DarkTheme.tintColor}
      />
      <TextInput
        value={this.state.inputValue}
        onChangeText={this._handleTextChange}
        style={styles.searchBar}
        placeholder="Enter Ticker..."
        selectionColor={DarkTheme.textValue}
        placeholderTextColor={DarkTheme.textValueSecondary}
        underlineColorAndroid='transparent'/>
    </View>
  );
}

const styles = StyleSheet.create({

  searchContainer: {
    backgroundColor: DarkTheme.backgroundColor,
  },
  searchIcon: {
    position: "absolute",
    top: 16,
    left: 17,
    zIndex: 5,
    backgroundColor: "transparent",
  },
  searchBar: {
    paddingLeft: 26,
    paddingRight: 19,
    margin: 8,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: DarkTheme.backgroundColorSecondary,
    fontSize: 14,
    color: DarkTheme.textValue,
    height: 40,
    borderRadius: Platform.OS === 'ios' ? 15 : 20,
    ...Platform.select({
      ios: {
        height: 30,
      },
      android: {
        borderWidth: 0,
      },
    }),
  }
})
