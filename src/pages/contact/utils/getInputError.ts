import type { FieldType, InputError } from "@/pages/contact/types/contact";

const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(email);
};

const getError = (errors: InputError | undefined, type: string): string => {
  if (type === "empty") return errors?.empty ?? "";
  if (type === "format") return errors?.format ?? "";
  return "";
};

const getInputError = (inpType: FieldType, inpValue: string, errors: InputError | undefined): string => {

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