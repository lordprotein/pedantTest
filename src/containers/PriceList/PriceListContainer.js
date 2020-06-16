import React, { Component } from 'react';
import { PriceList } from '../../components/PriceList/PriceList';
import { priceListConst } from '../../constants/priceListConst';
import { View } from 'react-native';


class PriceListContainer extends Component {

    render() {
        const { list } = this.props;

        return (
            <PriceList list={list} />
        );
    }
}


export default PriceListContainer;