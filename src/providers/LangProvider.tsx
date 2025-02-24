import { ReactNode, useState } from "react";
import LangContext from "../context/LangContext";

export default function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('id')

  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      {children}
    </LangContext.Provider>
  )
}