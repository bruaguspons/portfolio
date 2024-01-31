import type { FormEvent } from "react";
import Button from "../Button.astro";
import ContactInput from "./ContactInput.tsx";
import type { InputError } from "./types/index.ts";
import { doSubmit, getInputError } from "./utils/index.ts";

interface Field {
    id: string;
    label: string;
    autocomplete: string;
    type: "textarea" | "email" | null | undefined;
    required: boolean | null;
    errors?: InputError;
    
}

interface Props {
    fields: Field[];
    submitError: string;
    button: JSX.Element
}


const errors = { email: "", message: "" };
let generalErrors = "";


const ContactForm = ({fields, submitError, button}: Props) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            const data = new FormData(e.target as HTMLFormElement)
            const message = (data.get("message") as string) ?? "";
            const email = (data.get("email") as string) ?? "";
            const name = (data.get("name") as string) ?? "";
            const lastName = (data.get("lastName") as string) ?? "";
    
            for (const field of fields) {
                if (field.id === "email")
                    errors.email = getInputError("email", email, field.errors);
                if (field.id === "message")
                    errors.email = getInputError("text", message, field.errors);
            }
    
            const hasErrors = Object.values(errors).some((msg) => msg);
            if (!hasErrors) {
                data.set("message", JSON.stringify({ message, name, lastName }));
    
                doSubmit(data).then(ok =>{
                    if (!ok) {
                        generalErrors = submitError;
                    }
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

  return (
    <form action="" className="flex flex-col items-center gap-4" noValidate onSubmit={handleSubmit}>
    {
        fields.map((field) => (
            <ContactInput
                id={field.id}
                label={field.label}
                autocomplete={field.autocomplete}
                type={field.type}
                required={field.required}
                errors={field.errors}
            />
        ))
    }

    {generalErrors && <span>{generalErrors}</span>}
    {button}
    {/* <Button type="submit" className="cursor-pointer my-4">Send</Button> */}
</form>
  )
}
export default ContactForm

