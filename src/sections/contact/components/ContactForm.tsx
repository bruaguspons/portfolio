"use client";
import ButtonSubmit from "./ButtonSubmit";
import ContactInput from "./ContactInput";
import { useContactForm } from "../hooks/useContactForm";
import { ContactField } from "../types/contact";

interface Props {
  fields: ContactField[];
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

  const { form, onSubmit } = useContactForm(submitError);
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
      noValidate
    >
      {fields.map((field, index) => {
        const isTextarea = field.TYPE === "textarea";
        const nextFieldNotIsText = fields[index + 1]?.TYPE !== "text";
        const isOdd = index % 2 === 0;
        const fullWidth = isTextarea || (isOdd && nextFieldNotIsText);

        return (
          <div key={field.ID} className={fullWidth ? "md:col-span-2" : ""}>
            <ContactInput
              id={field.ID}
              label={field.LABEL}
              autocomplete={field.AUTOCOMPLETE}
              type={field.TYPE}
              required={field.REQUIRED}
              errors={field.ERRORS}
              register={register}
              error={errors[field.ID]}
            />
          </div>
        );
      })}

      <div className="md:col-span-2 flex flex-col gap-2">
        <ButtonSubmit loading={isSubmitting}>
          {sendText}
        </ButtonSubmit>
        {isSubmitSuccessful && (
          <p className="text-green-400 text-sm text-center">{submitSuccess}</p>
        )}
        {errors.root?.serverError && (
          <p className="text-red-400 text-sm text-center">{errors.root.serverError.message}</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
