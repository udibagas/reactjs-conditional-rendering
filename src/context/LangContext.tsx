import { createContext } from "react";

interface LangContextType {
  locale: string,
  setLocale: (value: string) => void
}

const LangContext = createContext({} as LangContextType)

export default LangContext