import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import PriceListContainer from '../PriceList/PriceListContainer';
import FilterContainer from '../Filter/FilterContainer';
import { priceListConst } from '../../constants/priceListConst';
import { categories } from '../../constants/categories';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import { selectorsSettings } from '../../selectors/selectors';


class AppContainer extends Component {
    state = {
        priceList: [],
        filteredPriceList: false,
        filterSettings: [
            {
                type: 'inputText',
                label: 'Поиск по тексту',
                value: false,
                id: 1,
            },
            {
                type: 'selectionList',
                label: 'Категории',
                value: false,
                list: [
                    {
                        label: 'Все',
                        value: 'all',
                        id: 12434
                    },
                    {
                        label: categories[0].translate,
                        value: categories[0].title,
                        id: 2
                    },
                    {
                        label: categories[1].translate,
                        value: categories[1].title,
                        id: 3
                    },
                    {
                        label: categories[2].translate,
                        value: categories[2].title,
                        id: 4
                    },
                ]
            },
            {
                type: 'checkbox',
                label: 'Горячий поиск',
                value: false,
                id: 5
            },
            {
                type: 'checkboxList',
                label: 'Доп. настройки',
                value: false,
                id: 6,
                list: [
                    {
                        title: 'Первый',
                        value: false,
                        id: 7
                    },
                    {
                        title: 'Второй',
                        value: false,
                        id: 8
                    },
                    {
                        title: 'Третий',
                        value: false,
                        id: 9
                    },
                ]
            }
        ]
    }

    componentDidMount = () => {
        //симуляция для fetch запроса
        // this.setState({ priceList: priceListConst });
        const { setSettingsList } = this.props;

        const settings = [
            {
                type: 'inputText',
                label: 'Поиск по тексту',
                value: false,
                id: 1,
            },
            {
                type: 'selectionList',
                label: 'Категории',
                value: false,
                list: [
                    {
                        label: 'Все',
                        value: 'all',
                        id: 12434
                    },
                    {
                        label: categories[0].translate,
                        value: categories[0].title,
                        id: 2
                    },
                    {
                        label: categories[1].translate,
                        value: categories[1].title,
                        id: 3
                    },
                    {
                        label: categories[2].translate,
                        value: categories[2].title,
                        id: 4
                    },
                ]
            },
            {
                type: 'checkbox',
                label: 'Горячий поиск',
                value: false,
                id: 5
            },
            {
                type: 'checkboxList',
                label: 'Доп. настройки',
                value: false,
                id: 6,
                list: [
                    {
                        title: 'Первый',
                        value: false,
                        id: 7
                    },
                    {
                        title: 'Второй',
                        value: false,
                        id: 8
                    },
                    {
                        title: 'Третий',
                        value: false,
                        id: 9
                    },
                ]
            }
        ]

        setSettingsList(settings)
    }


    render = () => {
        const { priceList, filteredPriceList, filterSettings, check } = this.state;

        console.log(check)

        return (
            <SafeAreaView>
                <ScrollView>
                    <PriceListContainer list={filteredPriceList ? filteredPriceList : priceList} />
                    <FilterContainer
                        settings={filterSettings}
                        action={(filterSettings) => this.setState({ filterSettings })}
                        priceList={priceList}
                        updatePriceList={filteredPriceList => this.setState({ filteredPriceList })}
                    />
                </ScrollView>
            </SafeAreaView>

        );
    }
}


const mapStateToProps = state => {
    return {
        originSettingsList: selectorsSettings.getOriginList(state)
    }
}

const mapDispatchToProps = dispatch => {
    const { setSettingsList } = bindActionCreators(actions, dispatch);

    return { setSettingsList }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);