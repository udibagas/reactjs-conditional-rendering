import { createContext } from "react";

const LangContext = createContext({
  locale: 'id',
  setLocale: (value: string) => { }
})

export default LangContext