import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
};

export interface SavedCityInterface {
  city: string;
  description: string;
  temp: number;
  icon: string;
};
