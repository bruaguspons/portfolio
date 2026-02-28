import type { ClassValue } from "clsx";
import { useEffect, useState } from "react";

interface Props {
  id: string;
  label: string;
  autocomplete: string;
  type?: "text" | "email" | "textarea";
  required?: boolean;
  value: string;
  error: string | null;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const ContactInput = ({
  id,
  label,
  autocomplete,
  type,
  required,
  value,
  error,
  onChange,
  onBlur
}: Props): React.ReactNode => {
  const [fieldError, setFieldError] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      if(error) setFieldError(error);
    }, 0);
  }, [error]);


  const baseClass: ClassValue =
    "w-full rounded-xl px-4 py-3 bg-white/5 border backdrop-blur-md text-white placeholder-white/50 transition-all duration-300 focus:outline-none";

  const errorClass: ClassValue = error
    ? "border-red-400"
    : "border-white/20 focus:border-blue-400";

  return (
    <div className="flex flex-col gap-2">

      <label
        htmlFor={id}
        className="text-sm text-white/80 font-medium"
      >
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${baseClass} ${errorClass}`}
          placeholder={label}
          autoComplete={autocomplete}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type ?? "text"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${baseClass} ${errorClass}`}
          placeholder={label}
          autoComplete={autocomplete}
        />
      )}

      <span
        className={`text-red-400 text-sm ${
          error ? "fade-in" : "fade-out"
        }`}
      >
        {fieldError}
      </span>

    </div>
  );
};

export default ContactInput;
