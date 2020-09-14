import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Screen1 = () => {
    return(
        <SafeAreaView>
            <Text style={styles.text}>
                Screen 1
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000'
    }
})

export default Screen1;