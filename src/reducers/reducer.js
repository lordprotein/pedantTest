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

            return {
                ...state,
                price: {
                    ...price,
                    origin: list,
                    current: list
                }
            }
        }

        case constants.UPDATE_PRICE_LSIT: {
            const { list } = action;
            const { price } = state;

            return {
                ...state,
                price: {
                    ...price,
                    current: list
                }
            }
        }

        default: return state;
    }

}
