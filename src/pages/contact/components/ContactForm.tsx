import ButtonSubmit from "./ButtonSubmit";
import ContactInput from "./ContactInput";
import { useContactForm } from "../hooks/useContactForm";
import type { Field } from "@/pages/contact/types/contact";

interface Props {
  fields: Field[];
  submitError: string;
  submitSuccess: string;
  sendText: string;
}

const ContactForm = ({
  fields,
  submitError,
  submitSuccess,
  sendText
}: Props): React.ReactNode => {

  const form = useContactForm(fields, {
    success: submitSuccess,
    error: submitError
  });

  return (
    <form
      onSubmit={form.handleSubmit}
      className="w-full max-w-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
      noValidate
    >
      {fields.map((field, index) => {

        const isTextarea = field.type === "textarea";
        const nextFieldNotIsText = fields[index + 1]?.type !== "text";
        const isOdd = index % 2 == 0;

        const fullWidth = isTextarea || (isOdd && nextFieldNotIsText);

        return (
          <div
            key={field.id}
            className={fullWidth ? "md:col-span-2" : ""}
          >
            <ContactInput
              {...field}
              value={form.values[field.id]}
              error={form.errors[field.id]}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </div>
        );
      })}

      {form.generalMessage?.success && (
        <div className="md:col-span-2 fade-in text-center text-sm text-green-400 bg-green-900/10 border border-green-400/20 backdrop-blur-md rounded-lg p-3">
          {form.generalMessage.success}
        </div>
      )}

      {form.generalMessage?.error && (
        <div className="md:col-span-2 fade-in text-center text-sm text-red-400 bg-red-900/10 border border-red-400/20 backdrop-blur-md rounded-lg p-3">
          {form.generalMessage.error}
        </div>
      )}

      <div className="md:col-span-2">
        <ButtonSubmit loading={form.loading}>
          {sendText}
        </ButtonSubmit>
      </div>
    </form>
  );
};

export default ContactForm;
