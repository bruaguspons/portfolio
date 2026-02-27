import type { InputError } from "@/pages/contact/types/errorsType";
import { fadeIn, fadeOut } from "@/pages/contact/utils/fade";
import getInputError from "@/pages/contact/utils/getInputError";

const validateInput = (inpType: "textarea" | "email" | null | undefined, value: string, errors: InputError | undefined, containerId: string): boolean =>{
    

  const error = getInputError(inpType, value, errors);
  const container =  document.getElementById(containerId);

  if(container){
    if(error){
      fadeIn(container, error);
    } else {
      fadeOut(container);
    }
  }
  return !!error;
};

export default validateInput;