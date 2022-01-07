import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { DestinationContextProvider, OriginContextProvider } from './src/contexts/contexts'
import RootNavigator from './src/navigations/RootNavigator'


const App = () => {
  return (
    <DestinationContextProvider>

      <OriginContextProvider>
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  )
}

export default App

const styles = StyleSheet.create({
  flex: 1
})
