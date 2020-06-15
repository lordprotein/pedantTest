import React, { Component } from 'react';
import { PriceList } from '../../components/PriceList/PriceList';
import { priceListConst } from '../../constants/priceListConst';
import { View } from 'react-native';


class PriceListContainer extends Component {
    state = {
        list: []
    }

    componentDidMount = () => {
        //симуляция для fetch запроса
        this.setState({ list: priceListConst })
    }

    render() {
        const { list } = this.state;
        
        return (
            <PriceList list={list} />
        );
    }
}


export default PriceListContainer;