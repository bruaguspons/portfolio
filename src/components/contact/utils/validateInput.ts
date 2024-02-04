import { fadeIn, fadeOut, getInputError } from "."
import type { InputError } from "../types"

const validateInput = (inpType: "textarea" | "email" | null | undefined, value: string, errors: InputError | undefined, containerId: string) =>{
    

    const error = getInputError(inpType, value, errors)
    const container =  document.getElementById(containerId)

    if(container){
        if(error){
            fadeIn(container, error)
        } else {
            fadeOut(container)
        }
    }
    return !!error
}

export default validateInput