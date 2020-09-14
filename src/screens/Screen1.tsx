import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ScreenHeader from '../components/screen/header';

const Screen1 = () => {
    return(
        <SafeAreaView>
            <Text style={styles.text}>
                <ScreenHeader/>
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