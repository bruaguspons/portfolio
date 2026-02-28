import { useMemo, useState, useCallback } from "react";
import getInputError from "@/pages/contact/utils/getInputError";
import doSubmit from "@/pages/contact/utils/doSubmit";
import type { FieldType, InputError } from "@/pages/contact/types/contact";

interface FieldConfig {
  id: string;
  type: FieldType;
  errors?: InputError;
}

interface SubmitMessages {
  success: string;
  error: string;
}

interface IUseContactForm {
  values: Record<string, string>;
  errors: Record<string, string | null>;
  loading: boolean;
  generalMessage: SubmitMessages | null;
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const useContactForm = (
  fields: FieldConfig[],
  messages: SubmitMessages
): IUseContactForm => {

  /** Map para acceso O(1) */
  const fieldMap = useMemo(() => {
    const map = new Map<string, FieldConfig>();
    fields.forEach(f => map.set(f.id, f));
    return map;
  }, [fields]);

  /** valores iniciales */
  const initialValues = useMemo(() => {
    const obj: Record<string, string> = {};
    fields.forEach(f => obj[f.id] = "");
    return obj;
  }, [fields]);

  /** errores iniciales */
  const initialErrors = useMemo(() => {
    const obj: Record<string, string | null> = {};
    fields.forEach(f => obj[f.id] = null);
    return obj;
  }, [fields]);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const [generalMessage, setGeneralMessage] = useState<SubmitMessages | null>(null);

  const validateField = useCallback((id: string, value: string) => {

    const field = fieldMap.get(id);
    if (!field) return null;

    const error = getInputError(field.type, value, field.errors);

    setErrors(prev => ({
      ...prev,
      [id]: error
    }));

    return error;

  }, [fieldMap]);

  const handleChange : React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e): void => {

    const { name, value } = e.target;

    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    validateField(name, value);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e): void => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = (): boolean => {

    const newErrors: Record<string, string | null> = {};
    let hasErrors = false;

    for (const field of fields) {

      const error = getInputError(
        field.type,
        values[field.id],
        field.errors
      );

      newErrors[field.id] = error;

      if (error) hasErrors = true;
    }

    setErrors(newErrors);

    return hasErrors;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {

    e.preventDefault();

    setGeneralMessage(null);

    if (validateForm()) return;

    try {

      setLoading(true);

      const payload = {
        email: values.email,
        message: JSON.stringify({
          name: values.name,
          lastName: values.lastName,
          message: values.message
        })
      };

      const ok = await doSubmit(JSON.stringify(payload));

      if (!ok) {
        setGeneralMessage({ success: "", error: messages.error });
        return;
      }

      setGeneralMessage({ success: messages.success, error: "" });

      setValues(initialValues);
      setErrors(initialErrors);

    } catch (err) {

      console.error(err);
      setGeneralMessage({ success: "", error: messages.error });

    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    errors,
    loading,
    generalMessage,
    handleChange,
    handleBlur,
    handleSubmit
  };
};
