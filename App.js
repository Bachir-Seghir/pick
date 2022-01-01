import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import RootNavigator from './src/navigations/RootNavigator'


const App = () => {
  return (
    <RootNavigator />
  )
}

export default App

const styles = StyleSheet.create({
  flex: 1
})
