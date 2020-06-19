import * as constants from '../constants/constants';


export function setSettingsList(list) {
    return {
        type: constants.SET_SETTINGS_LIST,
        list
    }
}

export function updateSettingsList(id, value) {
    return {
        type: constants.UPDATE_SETTINGS_LIST,
        data: { id, value }
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