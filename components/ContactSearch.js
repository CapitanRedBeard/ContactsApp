import React from 'react';
import { View, TextInput, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'

export default function ContactSearch(props) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="ios-search"
        size={12}
        style={styles.searchIcon}
        color={Colors.tintColor}
      />
      <TextInput
        value={props.value}
        onChangeText={props.handleTextChange}
        style={styles.searchBar}
        placeholder="Enter Ticker..."
        selectionColor={Colors.textValue}
        placeholderTextColor={Colors.textValueSecondary}
        underlineColorAndroid='transparent'/>
    </View>
  );
}

const styles = StyleSheet.create({

  searchContainer: {
    backgroundColor: Colors.backgroundColor,
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
    backgroundColor: Colors.backgroundColorSecondary,
    fontSize: 14,
    color: Colors.textValue,
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
