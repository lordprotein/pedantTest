import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PriceListContainer from '../PriceList/PriceListContainer';


class AppContainer extends Component {

    render = () => {
        return (
            <SafeAreaView>
                <View>
                    <PriceListContainer />
                </View>
            </SafeAreaView>

        );
    }
}

export default AppContainer;