import React, { Component } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { PriceList } from '../../components/PriceList/PriceList';


class FilterContainer extends Component {
    state = {
        // typeFields: false,
        currentSettings: [],
        isHotUpdate: false
    }


    componentDidMount = () => {
        this.filterField();
    }


    filterField = () => {
        const types = ['inputText', 'selectionList', 'checkbox', 'checkboxList'];
        const { settings } = this.props;

        const res = settings.filter(elem => types.includes(elem.type) === true);

        this.setState({ currentSettings: res });
    }


    findForTitles = (value) => {
        const { currentSettings } = this.state;
        const { priceList, updatePriceList, action } = this.props;

        value = value.toLowerCase();

        const res = priceList.filter(({ title }) => {
            title = title.toLowerCase();

            return title.includes(value) !== false;
        })

        this.updatePriceList(res);
        this.changeSettingsList(value, 'inputText');
    }


    updatePriceList = (res) => {
        const { isHotUpdate } = this.state;
        const { updatePriceList } = this.props;

        isHotUpdate && updatePriceList(res);
    }


    handleSelectionList = (value) => {
        const { priceList, updatePriceList, action } = this.props;
        const { isHotUpdate } = this.state;

        if (value === 'all') {
            this.changeSettingsList(value, 'selectionList');
            return this.updatePriceList(priceList);
        }

        const res = priceList.filter(({ category }) => category === value);
        console.log(isHotUpdate)
        this.updatePriceList(res);

        this.changeSettingsList(value, 'selectionList');
    }


    changeSettingsList = (value, type) => {
        const { currentSettings } = this.state;
        const { action } = this.props;

        const newSettings = [...currentSettings];

        const num = newSettings.findIndex(elem => elem.type === type);
        newSettings[num].value = value;

        action(newSettings);
        this.setState({ currentSettings: newSettings })
    }


    handleCheckbox = (value) => {
        this.setState(({ isHotUpdate }) => { return { isHotUpdate: !isHotUpdate } });
        this.changeSettingsList(value, 'checkbox');
    }


    render = () => {
        const { currentSettings, isHotUpdate } = this.state;

        return (
            <Filter
                currentSettings={currentSettings}
                findForTitles={this.findForTitles}
                handleSelectionList={this.handleSelectionList}
                checkbox={{
                    handle: this.handleCheckbox,
                    value: isHotUpdate
                }}
            />
        );
    }
}

export default FilterContainer;