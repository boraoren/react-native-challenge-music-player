import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenHeaderMenu from './menu';

export enum HeaderIcon {
    HEARTH,
}

interface ScreenHeaderProps {
    backgroundColor: string;
    withIcon?: HeaderIcon;
}

const hearth = () => <Text style={styles().withIcon}>&hearts;</Text>

const checkHeaderIcon = (headerIcon?: HeaderIcon) => {
    switch(headerIcon){
        case HeaderIcon.HEARTH:
            return hearth();
        default:
            break;
    }
}

const ScreenHeader: React.FC<ScreenHeaderProps> = (
    props: ScreenHeaderProps
) => {
    return (
        <View style={styles(props).screenHeader}>
            <ScreenHeaderMenu />
            {checkHeaderIcon(props.withIcon)}
        </View>
    )
}

const styles = (props?: ScreenHeaderProps) =>
    StyleSheet.create({
        screenHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: props?.backgroundColor,
        },
        withIcon: {
            fontSize: 30,
            marginTop: 14,
            marginRight: 35,
        }
    })


export default ScreenHeader;