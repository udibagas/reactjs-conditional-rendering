import { useContext } from "react";
import LangContext from "../context/LangContext";

export default () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error("useLocale must be used within a LangProvider");
  }

  return context;
};
