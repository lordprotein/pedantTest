import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import PriceListContainer from '../PriceList/PriceListContainer';
import FilterContainer from '../Filter/FilterContainer';
import { priceListConst } from '../../constants/priceListConst';
import { categories } from '../../constants/categories';


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
        this.setState({ priceList: priceListConst })
    }


    render = () => {
        const { priceList, filteredPriceList, filterSettings } = this.state;
        
        return (
            <SafeAreaView>
                <ScrollView>

                    <FilterContainer
                        settings={filterSettings}
                        action={(filterSettings) => this.setState({ filterSettings })}
                        priceList={priceList}
                        updatePriceList={filteredPriceList => this.setState({ filteredPriceList })}
                    />

                    <PriceListContainer list={filteredPriceList ? filteredPriceList : priceList} />


                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default AppContainer;