const openCloseSettings = () => {
    const button = document.getElementById("btn-settings");
    const settings = document.getElementById("header-settings");
    if (button) {
        button.addEventListener("click", () => {
            const isOpen = button.dataset.open;
            console.log({ isOpen });
            if (isOpen === "false") {
                button.dataset.open = "true";

                if (
                    settings &&
                    settings.classList.contains("-translate-y-full")
                ) {
                    settings.classList.remove("-translate-y-full");
                    settings.classList.add("translate-y-14");
                }
            } else {
                button.dataset.open = "false";
                if (
                    settings &&
                    settings.classList.contains("translate-y-14")
                ) {
                    settings.classList.remove("translate-y-14");
                    settings.classList.add("-translate-y-full");
                }
            }
        });
    }
}

export default openCloseSettings