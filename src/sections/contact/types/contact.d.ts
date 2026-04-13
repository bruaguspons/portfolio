export type FieldType = "text" | "email" | "textarea";

export interface ContactField {
  ID: string;
  LABEL: string;
  AUTOCOMPLETE: string;
  TYPE: FieldType;
  REQUIRED: boolean;
  ERRORS: { empty: string; format: string };
}