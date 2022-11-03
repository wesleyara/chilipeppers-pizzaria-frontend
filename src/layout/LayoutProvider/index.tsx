import { ReactNode } from "react";

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return <div>{children}</div>;
};
