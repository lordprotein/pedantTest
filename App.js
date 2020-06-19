import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/containers/App/AppContainer';
import { Provider } from 'react-redux';
import { store } from './src/stores/store';


const App = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};


export default App;