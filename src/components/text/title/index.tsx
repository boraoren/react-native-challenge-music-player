import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface TextTitleProps {
    value: string;
    color: string;
    size: number;
}

const TextTitle: React.FC<TextTitleProps> = (props) => {

    const { value } = props;

    return(
        <Text style={styles(props).text}>{value}</Text>
    )
}

const styles = (props: TextTitleProps) => 
    StyleSheet.create({
        text: {
            fontFamily: 'Gilroy',
            fontSize: props.size,
            textAlign: 'center',
            color: props.color,
        }
    })

export default TextTitle;