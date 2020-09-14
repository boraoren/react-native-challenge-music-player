import React from 'react';
import { Text, View } from 'react-native';
import ScreenHeaderMenu from './menu';

const ScreenHeader = () => {
    return(
        <View>
            <Text>
                <ScreenHeaderMenu/>
            </Text>
        </View>
    )
}

export default ScreenHeader;