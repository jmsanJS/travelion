import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function BookedDestinations() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BookedDestinations</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E6CA"
  }
});