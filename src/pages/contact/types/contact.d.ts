export type FieldType = "text" | "email" | "textarea";

export interface InputError {
    empty: string;
    format: string;
}

export interface Field {
  id: string;
  label: string;
  autocomplete: string;
  type: FieldType;
  required: boolean;
  errors: InputError;
}