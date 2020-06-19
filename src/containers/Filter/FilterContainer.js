import React, { Component } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { PriceList } from '../../components/PriceList/PriceList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import { selectorsSettings, selectorsPrice } from '../../selectors/selectors';
import { settingsListConst } from '../../constants/settingsListConst';


class FilterContainer extends Component {
    state = {
        isHotUpdate: false,
    }


    componentDidMount = () => {
        const { setSettingsList } = this.props;

        setSettingsList(settingsListConst);
    }


    findForTitles = (value, id) => {
        const { priceList, updateSettingsList, updatePriceList, originPriceList } = this.props;
        const valueLowerCase = value.toLowerCase();

        if (!value.length) {
            updateSettingsList(id, value);
            return updatePriceList(originPriceList);
        }

        const list = priceList.filter(({ title }) => {
            const titleLowerCase = title.toLowerCase();

            return titleLowerCase.includes(valueLowerCase);
        })

        updateSettingsList(id, value);
        this.updatePriceList(list)
    }


    updatePriceList = (res) => {
        const { isHotUpdate } = this.state;
        const { updatePriceList } = this.props;

        isHotUpdate && updatePriceList(res);
    }


    handleSelectionList = (id, index) => {
        const { priceList, settingsList, updateSettingsList } = this.props;

        return settingsList.find(settingElem => {
            if (settingElem.id === id) {

                const currSettingValue = settingElem.list[index - 1].value;

                const filteredList = priceList.filter(({ category }) => category === currSettingValue);

                this.updatePriceList(filteredList);
                updateSettingsList(id, currSettingValue);

                return settingElem;
            }
        })
    }


    handleCheckbox = (id, value) => {
        const { updateSettingsList } = this.props;

        this.setState(() => { return { isHotUpdate: value } });

        updateSettingsList(id, value);
    }


    setDisplayCheckboxList = (id, value) => {
        const { updateSettingsList } = this.props;

        updateSettingsList(id, value);
    }


    handleCheckboxList = (id, value, itemId) => {
        const { settingsList, setSettingsList } = this.props;

        const newSettings = settingsList.map(settingElem => {
            if (settingElem.id === id) {
                const num = settingElem.list.findIndex(elem => elem.id === itemId);

                settingElem.list[num].value = value;
            }
            return settingElem;
        })

        setSettingsList(newSettings);
    }


    handleSubmit = () => {
        const { action, settingsList } = this.props;

        action(settingsList);
        alert('Настройки отправлены в функцию')
    }


    render = () => {
        const { settingsList } = this.props;
        return (
            <Filter
                settingsList={settingsList}
                findForTitles={this.findForTitles}
                handleSelectionList={this.handleSelectionList}
                handleCheckbox={this.handleCheckbox}
                setDisplayCheckboxList={this.setDisplayCheckboxList}
                handleCheckboxList={this.handleCheckboxList}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        settingsList: selectorsSettings.getList(state),
        priceList: selectorsPrice.getList(state),
        originPriceList: selectorsPrice.getOriginList(state),
    }
}

const mapDispatchToProps = dispatch => {
    const { updateSettingsList, updatePriceList, setSettingsList } = bindActionCreators(actions, dispatch);

    return { updateSettingsList, updatePriceList, setSettingsList };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);