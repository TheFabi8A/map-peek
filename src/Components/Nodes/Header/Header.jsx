import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { BtnToggleTheme } from "../../Buttons";
import { useContext, useState } from "react";
import { SearchIcon } from "../../Svg";
import { CountriesContext } from "@countries-context";

export default function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const { searchQuery, setSearchQuery, setContinentFilter, continentFilter } =
    useContext(CountriesContext);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const DROPDOWN_FILTER_REGION = () => {
    return (
      <>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="faded">{`Region: ${continentFilter}`}</Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Desplegar filtro de region"
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={[continentFilter]}
            defaultSelectedKeys={"All"}
            onSelectionChange={setContinentFilter}
          >
            <DropdownItem onPress={() => setContinentFilter("All")} key="All">
              All
            </DropdownItem>
            <DropdownItem
              onPress={() => setContinentFilter("Africa")}
              key="Africa"
            >
              Africa
            </DropdownItem>
            <DropdownItem
              onPress={() => setContinentFilter("Americas")}
              key="Americas"
            >
              Americas
            </DropdownItem>
            <DropdownItem onPress={() => setContinentFilter("Asia")} key="Asia">
              Asia
            </DropdownItem>
            <DropdownItem
              onPress={() => setContinentFilter("Europe")}
              key="Europe"
            >
              Europe
            </DropdownItem>
            <DropdownItem
              onPress={() => setContinentFilter("Oceania")}
              key="Oceania"
            >
              Oceania
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    );
  };

  const INPUT_FILTER_NAME = () => {
    return (
      <>
        <Input
          onClear={() => setSearchQuery("")}
          value={searchQuery}
          startContent={
            <SearchIcon className="pointer-events-none flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
          }
          onChange={handleSearchChange}
          type="text"
        />
      </>
    );
  };

  return (
    <>
      <Navbar onMenuOpenChange={setisMenuOpen} isBordered isBlurred="false">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <h1 className="text-base font-bold sm:text-xl">
              Where in the world
            </h1>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden h-max sm:flex" justify="center">
          <NavbarItem>{INPUT_FILTER_NAME()}</NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex" justify="center">
          <NavbarItem>{DROPDOWN_FILTER_REGION()}</NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarMenuItem>
            <BtnToggleTheme />
          </NavbarMenuItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>{INPUT_FILTER_NAME()}</NavbarMenuItem>
          <NavbarMenuItem>{DROPDOWN_FILTER_REGION()}</NavbarMenuItem>
          <NavbarMenuItem>
            <Button>thefabi8a</Button>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
