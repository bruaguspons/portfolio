"use client";
import { useForm } from "react-hook-form";
import doSubmit from "../utils/doSubmit";

type FormValues = Record<string, string>;

export const useContactForm = (errorMessage: string) => {
  const form = useForm<FormValues>();

  const onSubmit = async (values: FormValues): Promise<void> => {
    const ok = await doSubmit({
      email: values.email,
      message: JSON.stringify({
        name: values.name,
        lastName: values.lastName,
        message: values.message,
      }),
    });

    if (!ok) {
      form.setError("root.serverError", { message: errorMessage });
    }
  };

  return { form, onSubmit };
};
