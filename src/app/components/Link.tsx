"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type PropsWithChildren } from "react";
import NextLink, { LinkProps } from "next/link";

type Props = LinkProps & {
  className?: string;
  defaultClassName?: string;
  activeClassName?: string;
};

export const Link: React.FC<PropsWithChildren<Props>> = ({ activeClassName, defaultClassName, className, href, ...props }) => {
  const pathname = usePathname();

  const linkClassName = clsx(className, pathname === href ? activeClassName : defaultClassName);

  return <NextLink href={href} className={linkClassName} {...props} />;
};
