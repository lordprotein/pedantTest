import * as constants from '../constants/constants';
import { initState } from './initState';


export const reducer = (state = initState, action) => {
    switch (action.type) {
        case constants.SET_SETTINGS_LIST: {
            const { list } = action;
            const { settings } = state;

            return {
                ...state,
                settings: {
                    ...settings,
                    list
                }
            }
        }

        case constants.SET_PRICE_LIST: {
            const { list } = action;
            const { price } = state;
            console.log(price)
            return {
                ...state,
                price: {
                    ...price,
                    list
                }
            }
        }

        default: return state;
    }

}
