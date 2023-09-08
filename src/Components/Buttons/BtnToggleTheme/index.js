export { default as BtnToggleTheme } from "./BtnToggleTheme";

import { useContext } from "react";
import { CountriesContext } from "@countries-context";

export default function Index() {
  const { theme, setTheme } = useContext(CountriesContext);

  const themeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return { themeSwitch };
}
