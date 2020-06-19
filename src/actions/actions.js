import * as constants from '../constants/constants';


export function setSettingsList(list) {
    return {
        type: constants.SET_SETTINGS_LIST,
        list
    }
}

export function setPriceList(list) {
    return {
        type: constants.SET_PRICE_LIST,
        list
    }
}

export function updatePriceList(list) {
    return {
        type: constants.UPDATE_PRICE_LSIT,
        list
    }
}