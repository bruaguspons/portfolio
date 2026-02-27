import IconsBgGradient from "@/layout/icons/IconsBgGradient";
import React, { useState } from "react";

interface Props {
  children: (color: string) => React.ReactNode;
  gradientName: string;
  desc: string;
  ariaLabel: string;
  href: string;
  target: string;
  className?: string;
  viewBox?: string;
  fill?: string;
}

const GradientIcon: React.FC<Props> = ({
  children,
  gradientName,
  desc,
  ariaLabel,
  href,
  target,
  className,
  viewBox = "0 0 1024 1024",
  fill
}) => {
  const [active, setActive] = useState(false);

  return (
    <IconsBgGradient
      className={className}
      desc={desc}
      href={href}
      target={target}
      ariaLabel={ariaLabel}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
    >
      <svg
        stroke={active ? `url(#${gradientName})` : "currentColor"}
        fill={fill? fill :active ? `url(#${gradientName})` : "currentColor"}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={gradientName}>
            <stop offset="5%" stopColor="oklch(62.3% 0.214 259.815)" />
            <stop offset="95%" stopColor="oklch(68.5% 0.169 237.323)" />
          </linearGradient>
        </defs>
        {children(active ? `url(#${gradientName})` : "currentColor")}
      </svg>
    </IconsBgGradient>
  );
};

export default GradientIcon;
