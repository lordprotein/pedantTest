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
    const { settingsList, findForTitles, handleSelectionList, handleCheckbox, setDisplayCheckboxList, handleCheckboxList } = props;

    return settingsList.map((elem, key) => {
        const { type, label, list, value, id } = elem;

        switch (type) {
            case 'inputText': {
                return (
                    <TextInput
                        placeholder={label}
                        onChangeText={(value) => findForTitles(value, id)}
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
                                return {
                                    label: elem.label,
                                    value: id,
                                    key: elem.id
                                }
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
                            onValueChange={value => handleCheckbox(id, value)}
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
                            onValueChange={value => setDisplayCheckboxList(id, value)}
                        />

                        {value && (
                            <View>
                                {list.map((item, key) => {
                                    return (
                                        <View key={key}>
                                            <Text>{item.title}</Text>
                                            <CheckBox
                                                value={item.value}
                                                onValueChange={(value) => handleCheckboxList(id, value, item.id)}
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
        marginVertical: 30
    },
    picker: {
        borderWidth: 2,
        borderColor: 'black',
    }
})