"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary, Locale } from "./dictionaries";

const I18nContext = createContext<{ locale: Locale; dictionary: Dictionary } | null>(null);

export function I18nProvider({ locale, dictionary, children }: { locale: Locale; dictionary: Dictionary; children: ReactNode }) {
  return <I18nContext.Provider value={{ locale, dictionary }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("I18nProvider is missing");
  return context;
}
