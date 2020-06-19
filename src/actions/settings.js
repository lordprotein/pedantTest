import * as types from '@constants/constants';

export const setSettingsList = list => {
    return {
        type: types.SET_SETTINGS_LIST,
        list
    }
}