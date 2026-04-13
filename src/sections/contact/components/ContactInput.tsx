import type { FieldError, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  id: string;
  label: string;
  autocomplete: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  errors?: { empty: string; format: string };
  register: UseFormRegister<Record<string, string>>;
  error?: FieldError;
}

const ContactInput = ({
  id,
  label,
  autocomplete,
  type,
  required,
  errors,
  register,
  error
}: Props): React.ReactNode => {

  const baseClass =
    "w-full rounded-xl px-4 py-3 bg-white/5 border backdrop-blur-md placeholder-white/50 transition-all duration-300 focus:outline-none";

  const errorClass = error
    ? "border-red-400"
    : "border-white/20 focus:border-blue-400";

  const inputProps = register(id, {
    required: required ? (errors?.empty || true) : false,
    ...(type === "email" && {
      pattern: {
        value: EMAIL_PATTERN,
        message: errors?.format || "",
      },
    }),
  });

  return (
    <div className="flex flex-col gap-2">

      <label
        htmlFor={id}
        className="text-sm font-medium"
      >
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          rows={5}
          autoComplete={autocomplete}
          placeholder={label}
          className={cn(baseClass, errorClass)}
          {...inputProps}
        />
      ) : (
        <input
          id={id}
          type={type ?? "text"}
          autoComplete={autocomplete}
          placeholder={label}
          className={cn(baseClass, errorClass)}
          {...inputProps}
        />
      )}

      <span className={cn("text-red-400 text-sm", error ? "fade-in" : "fade-out")}>
        {error?.message}
      </span>

    </div>
  );
};

export default ContactInput;
