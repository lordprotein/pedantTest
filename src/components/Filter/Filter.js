import React from 'react';
import { View, TextInput, CheckBox, Text, Picker, StyleSheet, Button } from 'react-native';


export const Filter = () => {
    return (
        <View>
            <TextInput placeholder='Поиск по слову' />

            <View style={styles.container}>
                <CheckBox />
                <Text>С учетом регистра</Text>
            </View>

            <Picker mode='dropdown' style={styles.picker}>
                <Picker.Item label='1' value='1' />
            </Picker>

            <Button
                title='Найти'
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row'
    },
    picker: {
        borderWidth: 2,
        borderColor: 'black',
    }
})