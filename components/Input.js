import React from 'react';
import { View, TextInput, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'

export default function ContactSearch({handleTextChange, value, placeholder, iconName}) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name={iconName}
        size={18}
        style={styles.searchIcon}
        color={Colors.tintColor}
      />
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        style={styles.searchBar}
        placeholder={placeholder}
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
    left: 32,
    zIndex: 5,
    backgroundColor: "transparent",
  },
  searchBar: {
    paddingLeft: 34,
    paddingRight: 19,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Colors.backgroundColorSecondary,
    fontSize: 14,
    color: Colors.textValue,
    height: 40,
    borderWidth: 0,
  }
})
