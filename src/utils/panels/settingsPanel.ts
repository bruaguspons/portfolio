export const showSettingsPanel = () => {
    const button = document.getElementById("btn-settings");
    const settings = document.getElementById("header-settings");
    if (settings && settings.classList.contains("-translate-y-full") && button) {
        settings.classList.remove("-translate-y-full");
        settings.classList.add("translate-y-14");
        settings.classList.add("shadow-2xl");
        button.dataset.open = "true";
    }

}
export const hideSettingsPanel = () => {

    const headerSettings = document.getElementById("header-settings");
    const button = document.getElementById("btn-settings");

    //settings
    if (headerSettings && headerSettings.classList.contains("translate-y-14") && button) {
        headerSettings.classList.remove("translate-y-14");
        headerSettings.classList.add("-translate-y-full");
        headerSettings.classList.remove("shadow-2xl");
        button.dataset.open = "false";
    }
}