import React from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  desc?: string;
  className?: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const IconsBgGradient: React.FC<Props> = ({
  desc,
  className,
  ariaLabel,
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={`flex flex-col items-center group ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      {children}

      {desc && (
        <span className="bg-clip-text bg-linear-to-r group-hover:from-blue-500 group-hover:to-sky-500 group-hover:text-transparent text-xl font-semibold group-active:from-blue-500 group-active:to-sky-500 group-active:text-transparent">
          {desc}
        </span>
      )}
    </a>
  );
};

export default IconsBgGradient;
