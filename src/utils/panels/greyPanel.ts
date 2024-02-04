export const showGreyPanel = (z_index: number) => {
    const panel = document.getElementById("greyPanel");
    if (panel && panel.classList.contains("sm:hidden")) {
        panel.classList.remove("sm:hidden");
        panel.classList.remove("hidden");

        // for(const classListItem of panel.classList) {
        //     const regex = /^z-[0-9]+$/;
        //     if(regex.test(classListItem)){
        //         panel.classList.remove(classListItem)
        //         break;
        //     }
        // }
        panel.style.zIndex=z_index.toString()

    }
}
export const hideGreyPanel = () => {
    const panel = document.getElementById("greyPanel");
    if(panel){
        panel.classList.add("sm:hidden");
        panel.classList.add("hidden");
    }
}