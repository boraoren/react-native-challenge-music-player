import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ScreenHeader from '../components/screen/header';
import Singer from '../components/singer';

const Screen1 = () => {
    return(
        <SafeAreaView>
            <ScreenHeader/>
            <Singer/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000'
    }
})

export default Screen1;