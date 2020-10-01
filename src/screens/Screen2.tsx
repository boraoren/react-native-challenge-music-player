import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ScreenHeader, { HeaderIcon } from '../components/screen/header';

const Screen2 = () => {
    return(
        <SafeAreaView>
            <ScreenHeader 
                backgroundColor={'white'}
                withIcon={HeaderIcon.HEARTH}/>
        </SafeAreaView>
    )
}

export default Screen2;