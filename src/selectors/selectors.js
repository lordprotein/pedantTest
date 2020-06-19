class SelectorsSettings {
    getList = ({ settings }) => {
        return settings.list;
    }
}

class SelectorsPrice {
    getList = ({ price }) => {
        return price.list;
    }
}

export const selectorsSettings = new SelectorsSettings();
export const selectorsPrice = new SelectorsPrice();