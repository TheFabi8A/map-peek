import { useContext } from "react";

import { Button } from "@nextui-org/button";

import { MoonIcon, SunIcon } from "../../Svg";

import { CountriesContext } from "@countries-context";

import Index from ".";

export default function BtnToggleTheme() {
  const { theme } = useContext(CountriesContext);
  const { themeSwitch } = Index();

  return (
    <Button
      className="border-success text-lime-800 dark:bg-slate-800 dark:text-success"
      variant="faded"
      title={`Activated ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={themeSwitch}
      startContent={
        <span className="pt-[1px] uppercase">
          {theme === "dark" ? "light" : "dark"}
        </span>
      }
    >
      {theme === "dark" ? (
        <SunIcon className="w-4 fill-white" />
      ) : (
        <MoonIcon className="w-4 fill-slate-500" />
      )}
    </Button>
  );
}
