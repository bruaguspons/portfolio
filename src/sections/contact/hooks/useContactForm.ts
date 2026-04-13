"use client";
import { useForm } from "react-hook-form";
import doSubmit from "../utils/doSubmit";

type FormValues = Record<string, string>;

export const useContactForm = (errorMessage: string) => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormValues>();

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
      setError("root.serverError", { message: errorMessage });
    }
  };

  return { register, handleSubmit, errors, isSubmitting, isSubmitSuccessful, onSubmit };
};
