import { useContext } from "react";

import { Button } from "@nextui-org/react";

import { MoonIcon, SunIcon } from "../../Svg";

import { CountriesContext } from "@countries-context";

import Index from ".";

export default function BtnToggleTheme() {
  const { theme } = useContext(CountriesContext);
  const { themeSwitch } = Index();

  const isMobileView = window.innerWidth < 640;

  return (
    <Button
      color={null}
      size={isMobileView ? "sm" : "md"}
      aria-label={`${
        theme === "dark" ? "cambiar al tema claro" : "cambiar al tema oscuro"
      }`}
      onClick={themeSwitch}
    >
      <span className="uppercase">{theme === "dark" ? "light" : "dark"}</span>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
