export const showSocialMediaPanel = () => {
    const panel = document.getElementById("socialMediaPanel");

    if (panel) {
        panel.style.display = "";
        panel.classList.remove("hide-panel");
        panel.classList.add("show-panel");
        panel.classList.add("sm:shadow-2xl");
    }
}
export const hideSocialMediaPanel = () => {
    const panelSocialMedia = document.getElementById("socialMediaPanel");
    // panelSocialMedia
    if (panelSocialMedia && panelSocialMedia.classList.contains("show-panel")) {
        panelSocialMedia.classList.remove("show-panel");
        panelSocialMedia.classList.add("hide-panel");
        panelSocialMedia.classList.remove("sm:shadow-2xl");
    }

}