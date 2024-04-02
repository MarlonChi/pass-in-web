import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <a className="font-medium text-sm" {...props}>
      {props.children}
    </a>
  );
};
