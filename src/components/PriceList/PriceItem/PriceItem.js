import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export const PriceItem = ({ data }) => {
    const { title, content, status } = data;

    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{content}</Text>
            <Text>{status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 2,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderColor: 'black',
        borderWidth: 1,
    }
});
