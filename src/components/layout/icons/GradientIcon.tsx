"use client";

import React, { useState } from "react";
import IconsBgGradient from "./IconsBgGradient";

interface Props {
  children: (color: string) => React.ReactNode;
  gradientName: string;
  desc: string;
  ariaLabel: string;
  href: string;
  target?: string;
  className?: string;
  viewBox?: string;
  fill?: string;
}

export default function GradientIcon({
  children,
  gradientName,
  desc,
  ariaLabel,
  href,
  target,
  className,
  viewBox = "0 0 1024 1024",
  fill,
}: Props): React.ReactNode {
  const [active, setActive] = useState(false);

  const color = active ? `url(#${gradientName})` : "currentColor";

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
        stroke={color}
        fill={fill ?? color}
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

        {children(color)}
      </svg>
    </IconsBgGradient>
  );
}
