class SelectorsSettings {
    getOriginList = ({ settings }) => {
        return settings.origin;
    }

    getCurrentList = ({ settings }) => {
        return settings.current;
    }
}

export const selectorsSettings = new SelectorsSettings();