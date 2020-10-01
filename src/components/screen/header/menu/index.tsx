import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScreenHeaderMenu = () => {
    return(
        <View style={styles.menu}>
           <Text style={[styles.menuLine,{marginLeft: 35}]}>__</Text>
           <Text style={[styles.menuLine,{marginLeft: 50}]}>__</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        paddingTop: 25,
    },
    menuLine: {
        fontSize: 35,
        fontWeight: 'bold',
        lineHeight: 10,
    }
})

export default ScreenHeaderMenu;