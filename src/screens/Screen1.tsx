import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ScreenHeader, { HeaderIcon } from '../components/screen/header';
import Singer from '../components/singer';

const Screen1 = () => {
    return(
        <SafeAreaView style={styles.screen1}>
            <ScreenHeader
                backgroundColor={'#E7E84E'}/>
            <Singer/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen1: {
        flex: 1,
    }
})

export default Screen1;