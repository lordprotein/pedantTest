import React from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select';

export const Filter = (props) => {
    // const isActiveFindContent = handleText.value ? true : false;

    return (
        <View style={styles.container}>

            {filterField(props)}

            <Button
                title='Найти'
            />
        </View>
    );
}


const filterField = (props) => {
    const { currentSettings, findForTitles, handleSelectionList, checkbox } = props;

    return currentSettings.map((elem, key) => {
        const { type, label, list } = elem;

        switch (type) {
            case 'inputText': {
                return (
                    <TextInput
                        placeholder={label}
                        onChangeText={findForTitles}
                        key={key}
                    />
                );
            }

            case 'selectionList': {
                return (
                    <View>
                        <Text>{label}</Text>

                        <RNPickerSelect
                            mode='dropdown'
                            onValueChange={handleSelectionList}
                            style={styles.picker}
                            items={list.map(elem => {
                                return { ...elem, key: elem.id }
                            })}
                            key={key}
                        />
                    </View>
                );
            }

            case 'checkbox': {
                return (
                    <View style={styles.container} key={key}>
                        <Text>{label}</Text>

                        <CheckBox
                            value={checkbox.value}
                            onValueChange={checkbox.handle}
                        />
                    </View>
                );
            }
            case 'checkboxList': {

            }

            default: return;
        }
    })
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row',
        marginVertical: 30
    },
    picker: {
        borderWidth: 2,
        borderColor: 'black',
    }
})