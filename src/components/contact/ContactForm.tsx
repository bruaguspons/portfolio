import { useRef, useState } from "react";
import ButtonSubmit from "./ButtonSubmit.tsx";
import ContactInput from "./ContactInput.tsx";
import type { InputError } from "./types/index.ts";
import {doSubmit, fadeIn, fadeOut, validateInput} from "./utils";

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
    submitSuccess:string
    sendText: string;
}

const ContactForm = ({fields, submitError,submitSuccess, sendText}: Props) => {

    const generalErrorsRef = useRef<HTMLSpanElement>(null)
    const generalSuccessRef = useRef<HTMLSpanElement>(null)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const form = e.target as HTMLFormElement
        let hasErrors = false

        try {

            fadeOut(generalErrorsRef.current as HTMLSpanElement)
            fadeOut(generalSuccessRef.current as HTMLSpanElement)


            const data = new FormData(form);
            const message = (data.get("message") as string) ?? "";
            const email = (data.get("email") as string) ?? "";
            const name = (data.get("name") as string) ?? "";
            const lastName = (data.get("lastName") as string) ?? "";

            for (const field of fields) {
                if (field.id === "email")
                hasErrors = validateInput(field.type, email, field.errors, `${field.id}-error`)
            if (field.id === "message")
                hasErrors = validateInput(field.type, message, field.errors, `${field.id}-error`)
            }

            if (!hasErrors) {
                data.set(
                    "message",
                    JSON.stringify({ message, name, lastName }),
                );

                const dataJson = {
                    email: email,
                    message: JSON.stringify({
                        name,
                        lastName,
                        message,
                    }),
                };

                (async () => {
                    const ok = await doSubmit(JSON.stringify(dataJson));
                    if (!ok) {
                        fadeIn(generalErrorsRef.current as HTMLSpanElement, submitError)
                    } else {
                        form.reset()
                        fadeIn(generalSuccessRef.current as HTMLSpanElement, submitSuccess)
                    }
                })()
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }
  return (
    <form
    id="form-contact"
    method="POST"
    className="flex flex-col items-center gap-4 w-full"
    noValidate
    onSubmit={handleSubmit}
>
    {
        fields.map((field) => (
            <ContactInput
                key={field.id}
                id={field.id}
                label={field.label}
                autocomplete={field.autocomplete}
                type={field.type}
                required={field.required}
                errors={field.errors}
            />
        ))
    }

    <span ref={generalErrorsRef} id="generalErrors" style={{display:'none'}} className="text-red-500 my-2"></span>
    <span ref={generalSuccessRef} id="generalErrors" style={{display:'none'}} className="text-green-500 my-2"></span>

    <ButtonSubmit>{sendText}</ButtonSubmit>
</form>
  )
}
export default ContactForm
