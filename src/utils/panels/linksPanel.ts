export const showLinksPanel = () => {
    const button = document.getElementById("btn-links");
    const links = document.getElementById("header-links");

    if (button && links && button.classList.contains("close")) {
        button.classList.remove("close");
        button.classList.add("open");

        links.classList.remove("-translate-y-full");
        links.classList.add("translate-y-14");
    }
}
export const hideLinksPanel = () => {
    const button = document.getElementById("btn-links");
    const links = document.getElementById("header-links");
    
    if (button && links && button.classList.contains("open")) {
        button.classList.remove("open");
        button.classList.add("close");

        links.classList.remove("translate-y-14");
        links.classList.add("-translate-y-full");
    }
}