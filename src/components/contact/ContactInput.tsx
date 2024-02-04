import type { FocusEvent } from "react";
import type { InputError } from "./types";
import validateInput from "./utils/validateInput";
import './styles/fade.css'


interface Props {
    id: string;
    label: string;
    autocomplete: string;
    type?: "textarea" | "email" | null | undefined;
    required?: boolean | null;
    errors?: InputError | undefined;
}





const ContactInput = ({ id, label, autocomplete, type, required, errors }: Props) => {
    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        validateInput(type, e.target.value, errors, `${id}-error`);

    }
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
                    className="focus:outline-none bg-white dark:bg-background-400 rounded-lg w-full p-2.5 placeholder-neutral-500 dark:placeholder-neutral-400 transition ease-in-out duration-150"
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
                    className="focus:outline-none bg-white dark:bg-background-400 rounded-lg w-full p-2.5 placeholder-neutral-500 dark:placeholder-neutral-400 transition ease-in-out duration-150"
                    required={required?? false}
                    placeholder={label}
                    onBlur={handleBlur}
                />
            )
        }
        <span className="text-red-400 my-2" style={{display:'none'}} id={`${id}-error`}></span>
    </div>
  )
}
export default ContactInput

