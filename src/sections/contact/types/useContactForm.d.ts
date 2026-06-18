import type { UseFormReturn, FieldErrors } from "react-hook-form";

export type FormValues = Record<string, string>;

export interface UseContactFormReturn {
  register: UseFormReturn<FormValues>["register"];
  handleSubmit: UseFormReturn<FormValues>["handleSubmit"];
  errors: FieldErrors<FormValues>;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  onSubmit: (values: FormValues) => Promise<void>;
}
