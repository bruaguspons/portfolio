export const showSocialMediaPanel = () => {
    const panel = document.getElementById("socialMediaPanel");

    if (panel) {
        panel.style.display = "";
        panel.classList.remove("hide-panel");
        panel.classList.add("show-panel");
    }
}
export const hideSocialMediaPanel = () => {
    const panelSocialMedia = document.getElementById("socialMediaPanel");
    // panelSocialMedia
    if (panelSocialMedia && panelSocialMedia.classList.contains("show-panel")) {
        panelSocialMedia.classList.remove("show-panel");
        panelSocialMedia.classList.add("hide-panel");
    }

}