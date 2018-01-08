import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors'

export default function ContactsListItem({number, name, context}) {
  return (
    <View style={styles.container}>
      <View key="mainInfoContainer" style={styles.mainInfoContainer}>
        <Text key="name" style={styles.name} >{name}</Text>
        <Text key="number" style={styles.number} >{number}</Text>
      </View>
      <View key="contextContainer" style={styles.contextContainer}>
        <Text key="context" style={styles.context} >{context}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.backgroundColorSecondary
  },
  mainInfoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contextContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    color: Colors.textValue
  },
  number: {
    fontWeight: "400",
    fontSize: 16,
    color: Colors.textValueSecondary,
  },
  context: {
    fontWeight: "400",
    fontSize: 16,
    color: Colors.textValue
  }

})
