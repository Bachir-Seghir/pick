import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapComponent from '../components/MapComponent'
import { colors, parameters } from '../global/styles'
const RequestScreen = () => {
    return (
        <View style={styles.container}>
            <MapComponent />
        </View>
    )
}

export default RequestScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: parameters.statusBarHeight
    }
})
