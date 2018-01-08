import React from 'react';
import { View, TextInput, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'

export default function ContactSearch(props) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="ios-search"
        size={18}
        style={styles.searchIcon}
        color={Colors.tintColor}
      />
      <TextInput
        value={props.value}
        onChangeText={props.handleTextChange}
        style={styles.searchBar}
        placeholder="Enter Name or Number..."
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
    top: 18,
    left: 20,
    zIndex: 5,
    backgroundColor: "transparent",
  },
  searchBar: {
    paddingLeft: 34,
    paddingRight: 19,
    margin: 8,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Colors.backgroundColorSecondary,
    fontSize: 14,
    color: Colors.textValue,
    height: 40,
    borderWidth: 0,
  }
})
