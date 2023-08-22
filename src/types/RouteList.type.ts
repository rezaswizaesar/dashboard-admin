import { ReactNode } from "react";

export interface RouteType {
  sidebar: boolean;
  header: boolean;
  label: string | null;
  component: ReactNode;
  icon: ReactNode | null;
  path: string;
  routeType: string;
  layout: ReactNode;
  children: any;
  role: any
}