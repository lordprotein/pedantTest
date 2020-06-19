import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import FilterContainer from '@containers/Filter/FilterContainer';
import PriceListContainer from '@containers/PriceList/PriceListContainer';


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