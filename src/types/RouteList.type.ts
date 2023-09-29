import { ReactNode } from "react";

export interface RouteType {
  sidebar: boolean;
  header: boolean;
  label: ReactNode;
  component: ReactNode;
  icon: ReactNode | null;
  path: string;
  routeType: string;
  layout: ReactNode;
  children: any;
  role: any
}