import { Link as LinkRouter, useLocation } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import { BtnToggleTheme, ButtonToRepo } from "../../Buttons";

import { InputSearchCountry } from "../../Inputs";

import { Index } from ".";
import { DropdownFilterRegion } from "../../Dropdowns";

export default function Header() {
  const location = useLocation();

  const { isMenuOpen, setIsMenuOpen } = Index();

  return (
    <>
      <Navbar
        classNames={{
          base: "transition-background bg-slate-500 dark:bg-slate-800",
          menu: "dark:bg-slate-700 bg-slate-300",
          toggleIcon: "text-success",
        }}
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBordered
        isBlurred="false"
      >
        <NavbarContent className="hidden h-max md:block">
          <NavbarItem>
            <ButtonToRepo />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle
          className="md:hidden"
          title={isMenuOpen ? "Close menu" : "Open menu"}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand
          onClick={() => setIsMenuOpen(false)}
          className="max-w-max justify-center"
        >
          <LinkRouter to="/">
            <h1 className="text-base font-extrabold text-white md:text-xl">
              Map Peek 🌎
            </h1>
          </LinkRouter>
        </NavbarBrand>
        {location.pathname === "/" && (
          <>
            <NavbarContent className="hidden h-max md:flex" justify="center">
              <NavbarItem>
                <InputSearchCountry />
              </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden md:flex" justify="center">
              <NavbarItem>
                <DropdownFilterRegion />
              </NavbarItem>
            </NavbarContent>
          </>
        )}
        <NavbarContent justify="end">
          <NavbarMenuItem>
            <BtnToggleTheme />
          </NavbarMenuItem>
        </NavbarContent>
        <NavbarMenu>
          {location.pathname === "/" && (
            <>
              <NavbarMenuItem>
                <InputSearchCountry />
              </NavbarMenuItem>
              <NavbarMenuItem>
                <DropdownFilterRegion />
              </NavbarMenuItem>
            </>
          )}
          <NavbarMenuItem className="absolute left-0 top-0 grid h-full w-full place-items-center">
            <ButtonToRepo />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
