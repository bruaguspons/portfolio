import { getInputError } from "."
import type { InputError } from "../types"

const validateInput = (inpType: string, value: string, errors: InputError | undefined, containerId: string) =>{
    

    const error = getInputError(inpType, value, errors)
    const container =  document.getElementById(containerId)

    console.log({error, container})

    if(container){
        if(error){
            container.innerHTML = error
            container.style.display =''
            
            container.classList.remove('fade-out')
            container.classList.add('fade-in')
        } else {
            container.style.display =''

            container.classList.remove('fade-in')
            container.classList.add('fade-out')
    
        }
    }
    
}

export default validateInput