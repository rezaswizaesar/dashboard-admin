import { ReactNode } from "react";

export interface AuthLayoutProps {
  sidebar: boolean;
  header: boolean;
  label: ReactNode;
  children: any;
}