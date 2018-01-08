import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'

export default function ContactsListItem(props) {
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
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    
  }
})
