import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { categories } from '@constants/categories';


export const PriceItem = ({ data }) => {
    const { title, content, status, category } = data;

    const getCatName = () => {
        const num = categories.find(item => item.title === category);
        return num.translate;
    }
    
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{content}</Text>
            <Text>{status}</Text>
            <Text>{getCatName()}</Text>
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
