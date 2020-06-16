import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select';
import { Button } from '@ant-design/react-native';


export const Filter = (props) => {
    const { handleSubmit } = props;

    return (
        <View style={styles.container}>

            {filterField(props)}

            <Button
                type='ghost'
                onPress={handleSubmit}
            >
                Найти
            </Button>
        </View>
    );
}


const filterField = (props) => {
    const { currentSettings, findForTitles, handleSelectionList, handleCheckbox, isDisplayCheckboxList, setDisplayCheckboxList, handleCheckboxList } = props;

    return currentSettings.map((elem, key) => {
        const { type, label, list, value } = elem;

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
                    <View key={key}>
                        <Text>{label}</Text>

                        <RNPickerSelect
                            mode='dropdown'
                            onValueChange={handleSelectionList}
                            style={styles.picker}
                            items={list.map(elem => {
                                return { ...elem, key: elem.id }
                            })}
                        />
                    </View>
                );
            }

            case 'checkbox': {
                return (
                    <View style={styles.container} key={key}>
                        <Text>{label}</Text>

                        <CheckBox
                            value={value}
                            onValueChange={handleCheckbox}
                        />
                    </View>
                );
            }
            case 'checkboxList': {
                return (
                    <View key={key}>
                        <Text>{label}</Text>

                        <CheckBox
                            value={value}
                            onValueChange={setDisplayCheckboxList}
                        />

                        {value && (
                            <View>
                                {list.map((item, key) => {
                                    return (
                                        <View key={key}>
                                            <Text>{item.title}</Text>
                                            <CheckBox
                                                value={item.value}
                                                onValueChange={() => handleCheckboxList(item)}
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                        )}
                    </View>
                );
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