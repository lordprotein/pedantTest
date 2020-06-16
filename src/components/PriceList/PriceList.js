import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PriceItemContainer from '../../containers/PriceList/PriceItem/PriceItemContainer';


export const PriceList = ({ list }) => {
    return (
        <ScrollView style={styles.container}>
            {list.map((item, key) => <PriceItemContainer data={item} key={key} />)}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        maxHeight: '60%'
        // marginVertical: 20
    }
});