export const showSettingsPanel = () => {
    const buttons:NodeListOf<HTMLElement> = document.querySelectorAll(".btn-settings");
    const settings = document.getElementById("header-settings");
    if (settings && settings.classList.contains("-translate-y-full") && buttons.length) {
        settings.classList.remove("-translate-y-full");
        settings.classList.add("translate-y-14");
        settings.classList.add("shadow-2xl");
        buttons.forEach((button) =>button.dataset.open = "true");
        
    }

}
export const hideSettingsPanel = () => {

    const headerSettings = document.getElementById("header-settings");
    const buttons:NodeListOf<HTMLElement> = document.querySelectorAll(".btn-settings");

    //settings
    if (headerSettings && headerSettings.classList.contains("translate-y-14") && buttons.length) {
        headerSettings.classList.remove("translate-y-14");
        headerSettings.classList.add("-translate-y-full");
        headerSettings.classList.remove("shadow-2xl");
        buttons.forEach((button) =>button.dataset.open = "false");
    }
}