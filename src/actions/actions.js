import * as constants from '../constants/constants';


export const setSettingsList = list => {
    return {
        type: constants.SET_SETTINGS_LIST,
        list
    }
}