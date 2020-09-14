import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Singer = () => {
    return (
        <View>
            <Text style={styles.name}>
                NLE Choppa
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        marginTop: 54,
        fontWeight: 'bold',
        fontFamily: 'Gilroy'
    }
})

export default Singer;