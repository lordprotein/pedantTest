class SelectorsSettings {
    getList = ({ settings }) => {
        return settings.list;
    }
}

class SelectorsPrice {
    getOriginList = ({ price }) => {
        return price.origin;
    }
    getList = ({price}) => {
        return price.current;
    }
}

export const selectorsSettings = new SelectorsSettings();
export const selectorsPrice = new SelectorsPrice();