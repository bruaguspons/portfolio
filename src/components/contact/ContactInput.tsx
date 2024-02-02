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
        validateInput(type ?? '', e.target.value, errors, `${id}-error`);

    }
  return (
    <div className="flex flex-col w-full">
        <label className="mb-2 text-neutral-100" htmlFor={id}>
            {label}
            {required && <span className="text-red-500"> *</span>}
            {" :"}
        </label>
        {
            type === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    className="focus:outline-none bg-background-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-background-400 dark:border-background-600 dark:placeholder-neutral-400 dark:text-neutral-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    className="focus:outline-none bg-background-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-background-400 dark:border-background-600 dark:placeholder-neutral-400 dark:text-neutral-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={required?? false}
                    placeholder={label}
                    onBlur={handleBlur}
                />
            )
        }
        <span className="text-red-500 my-2" style={{display:'none'}} id={`${id}-error`}></span>
    </div>
  )
}
export default ContactInput

