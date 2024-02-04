export enum Themes{
    SYSTEM="system",
    DARK="dark",
    LIGHT="light"
}

const updateAppliedTheme = (value: Themes) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(value);
    document.documentElement.setAttribute("data-theme", value);
};

export const updateTheme = (value: Themes) => {

    const themeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = themeMatcher.matches ? Themes.DARK : Themes.LIGHT;

    const theme = value === Themes.SYSTEM ? systemTheme : value;

    updateAppliedTheme(theme);
    localStorage.setItem("theme", value);
};

export const getTheme = (defaultTheme:Themes=Themes.DARK):Themes => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        const localStorageValue = (localStorage.getItem("theme") ?? defaultTheme) as Themes
        if(Object.entries(Themes).map(theme => theme[1]).includes(localStorageValue)){
            return localStorageValue as Themes
        }
        return defaultTheme
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return Themes.DARK;
    }
    return defaultTheme;
};