import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import { settingsListConst } from '../../constants/settingsListConst';
import PriceListContainer from '../PriceList/PriceListContainer';


class AppContainer extends Component {

    componentDidMount = () => {
        const { setSettingsList, setPriceList } = this.props;
        setSettingsList(settingsListConst);
    }


    render = () => {

        return (
            <SafeAreaView>
                <ScrollView>
                    <PriceListContainer />
                    {/* <FilterContainer
                        action={settings => console.log(settings)}
                    /> */}
                </ScrollView>
            </SafeAreaView>

        );
    }
}



const mapDispatchToProps = dispatch => {
    const { setSettingsList } = bindActionCreators(actions, dispatch);

    return { setSettingsList }
}


export default connect(null, mapDispatchToProps)(AppContainer);