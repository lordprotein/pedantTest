import React, { Component } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { PriceList } from '../../components/PriceList/PriceList';


class FilterContainer extends Component {
    state = {
        currentSettings: [],
        isHotUpdate: false,
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
        const { priceList } = this.props;

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
        const { priceList } = this.props;

        if (value === 'all') {
            this.changeSettingsList(value, 'selectionList');
            return this.updatePriceList(priceList);
        }

        const res = priceList.filter(({ category }) => category === value);

        this.updatePriceList(res);

        this.changeSettingsList(value, 'selectionList');
    }


    changeSettingsList = (value, type) => {
        const { currentSettings } = this.state,
            { action } = this.props,
            newSettings = [...currentSettings],
            num = newSettings.findIndex(elem => elem.type === type);

        newSettings[num].value = value;

        action(newSettings);
        this.setState({ currentSettings: newSettings })
    }


    handleCheckbox = (value) => {
        this.setState(({ isHotUpdate }) => { return { isHotUpdate: !isHotUpdate } });
        this.changeSettingsList(value, 'checkbox');
    }

    setDisplayCheckboxList = (value) => {
        this.changeSettingsList(value, 'checkboxList');
    }


    handleCheckboxList = (elem) => {
        const { currentSettings } = this.state;
        const { action } = this.props;
        const newListSettings = [...currentSettings];

        const numElem = currentSettings.findIndex(elem => elem.type === 'checkboxList');

        const numSubElem = currentSettings[numElem].list.findIndex(item => item.id === elem.id);

        const status = newListSettings[numElem].list[numSubElem].value;
        newListSettings[numElem].list[numSubElem].value = !status;


        this.setState({ currentSettings: newListSettings });
        action(newListSettings);
    }


    handleSubmit = () => {
        const { action } = this.props;

        action(this.state.currentSettings);
    }


    render = () => {
        const { currentSettings } = this.state;

        return (
            <Filter
                currentSettings={currentSettings}
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

export default FilterContainer;