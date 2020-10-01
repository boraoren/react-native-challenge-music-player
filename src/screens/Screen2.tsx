import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Music from '../components/music';
import ScreenHeader, { HeaderIcon } from '../components/screen/header';

const Screen2 = () => {
    return(
        <SafeAreaView>
            <ScreenHeader 
                backgroundColor={'white'}
                withIcon={HeaderIcon.HEARTH}/>
            <Music/>    
        </SafeAreaView>
    )
}

export default Screen2;