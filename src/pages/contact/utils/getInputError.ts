import type { InputError } from "@/pages/contact/types/errorsType";
import isValidEmail from "@/pages/contact/utils/isValidEmail";

const getError = (errors: InputError | undefined, type: string): string => {
  if (type === "empty") return errors?.empty ?? "";
  if (type === "format") return errors?.format ?? "";
  return "";
};

const getInputError = (inpType: "textarea" | "email" | null | undefined, inpValue: string, errors: InputError | undefined): string => {

  if (inpType === "textarea"){
    // format error
    if (typeof inpValue !== "string") {
      return getError(errors, "format");
    }

    // empty error
    if (typeof inpValue === "string" && inpValue.length < 1) {
      return getError(errors, "empty");
    }

    // no errors
    return "";
  }

  if (inpType === "email"){
    // format error
    if (typeof inpValue !== "string") {
      return getError(errors, "format");
    }
    // empty error
    if (typeof inpValue === "string" && inpValue.length < 1) {
      return getError(errors, "empty");
    }

    // format error
    if (typeof inpValue === "string" && !isValidEmail(inpValue)) {
      return getError(errors, "format");
    }

    // no errors
    return "";
  }
  // no errors
  return "";

};

export default getInputError;