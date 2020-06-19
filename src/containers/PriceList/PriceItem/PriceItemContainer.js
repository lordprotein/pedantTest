import React, { Component } from 'react';
import { PriceItem } from '@components/PriceList/PriceItem/PriceItem';


class PriceItemContainer extends Component {

    render() {
        return (
            <PriceItem {...this.props} />
        );
    }
}


export default PriceItemContainer;