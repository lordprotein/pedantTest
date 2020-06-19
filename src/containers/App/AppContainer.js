import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PriceListContainer from '../PriceList/PriceListContainer';
import FilterContainer from '../Filter/FilterContainer';


class AppContainer extends Component {

    render = () => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <PriceListContainer />
                    <FilterContainer
                        action={settings => console.log(settings)}
                    />
                </ScrollView>
            </SafeAreaView>

        );
    }
}



export default connect(null, null)(AppContainer);