import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PriceListContainer from '../PriceList/PriceListContainer';
import { Filter } from '../../components/Filter/Filter';


class AppContainer extends Component {

    render = () => {
        return (
            <SafeAreaView>
                <View>
                    <PriceListContainer />
                    <Filter />
                </View>
            </SafeAreaView>

        );
    }
}

export default AppContainer;