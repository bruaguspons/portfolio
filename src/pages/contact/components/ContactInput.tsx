import type { FocusEvent } from "react";
import "../styles/fade.css";
import type { InputError } from "@/pages/contact/types/errorsType";
import validateInput from "@/pages/contact/utils/validateInput";


interface Props {
    id: string;
    label: string;
    autocomplete: string;
    type?: "textarea" | "email" | null | undefined;
    required?: boolean | null;
    errors?: InputError | undefined;
}


const ContactInput = ({ id, label, autocomplete, type, required, errors }: Props): React.ReactNode => {
  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    validateInput(type, e.target.value, errors, `${id}-error`);
  };

  return (
    <div className="flex flex-col w-full">
      <label className="mb-2" htmlFor={id}>
        {label}
        {required && <span className="text-red-400"> *</span>}
        {" :"}
      </label>
      {
        type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            className="focus:outline-none bg-background-100/20 rounded-lg w-full p-2.5 placeholder-neutral-400 transition ease-in-out duration-150"
            required={required ?? false}
            placeholder={label}
            rows={5}
            onBlur={handleBlur}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type ?? "text"}
            autoComplete={autocomplete}
            className="focus:outline-none bg-background-100/20 rounded-lg w-full p-2.5 placeholder-neutral-400 transition ease-in-out duration-150"
            required={required?? false}
            placeholder={label}
            onBlur={handleBlur}
          />
        )
      }
      <span className="text-red-400 my-2" style={{display:"none"}} id={`${id}-error`}></span>
    </div>
  );
};
export default ContactInput;

