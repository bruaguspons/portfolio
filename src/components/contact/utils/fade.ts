export const fadeIn = (container: HTMLElement, msg: string) => {
    container.innerHTML = msg
    container.style.display =''
    
    container.classList.remove('fade-out')
    container.classList.add('fade-in')
}
export const fadeOut = (container: HTMLElement) => {
    if(container.classList.contains('fade-in')){
        container.classList.remove('fade-in')
        container.classList.add('fade-out')
    }
}