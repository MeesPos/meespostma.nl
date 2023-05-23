import { ClassValue, clsx } from "clsx";

export function cn(...classes: ClassValue[]) {
  return clsx(classes.filter(Boolean).join(" "));
}