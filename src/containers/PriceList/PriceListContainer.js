import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PriceList } from '@components/PriceList/PriceList';
import { priceListConst } from '@constants/priceListConst';
import * as actions from '@actions/actions';
import { selectorsPrice } from '@selectors/selectors';


class PriceListContainer extends Component {

    componentDidMount = () => {
        const { setPriceList } = this.props;
        setPriceList(priceListConst)
    }

    render() {
        const { priceList } = this.props;

        return (
            <PriceList list={priceList} />
        );
    }
}


const mapStateToProps = state => {
    return {
        priceList: selectorsPrice.getList(state)
    }
}

const mapDispatchToProps = dispatch => {
    const { setPriceList } = bindActionCreators(actions, dispatch);

    return { setPriceList }
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceListContainer);