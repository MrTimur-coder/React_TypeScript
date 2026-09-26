import { type ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  id: string;
  disabled?: boolean;
  error?: undefined | string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  asterisk?: string;
  title?: boolean | string;
}