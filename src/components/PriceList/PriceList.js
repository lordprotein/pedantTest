import React from 'react';
import { StyleSheet, View } from 'react-native';
import PriceItemContainer from '../../containers/PriceList/PriceItem/PriceItemContainer';


export const PriceList = ({ list }) => {
    return (
        <View>
            {list.map((item, key) => <PriceItemContainer data={item} key={key} />)}
        </View>
    );
}
