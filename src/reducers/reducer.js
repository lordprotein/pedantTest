import * as types from '../constants/constants';
import { initState } from './initState';


const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_SETTINGS_LIST: {
            const { list } = action;
            const currList = list.length ? list : state
            
            return {...state, currList};
        }
    }
}

export default reducer;