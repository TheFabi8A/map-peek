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
  DropdownSection,
} from "@nextui-org/react";

import { BtnToggleTheme } from "../../Buttons";
import { useContext, useState } from "react";
import { SearchIcon } from "../../Svg";
import { CountriesContext } from "@countries-context";
import BtnGitHubProfile from "../../Buttons/BtnGitHubProfile/BtnGitHubProfile";

export default function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const {
    searchQuery,
    setSearchQuery,
    setContinentFilter,
    continentFilter,
    setCurrentPage,
  } = useContext(CountriesContext);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionRegion = (region) => {
    setCurrentPage(1);
    setContinentFilter(region);
  };

  const handleRegionSelection = (selectedRegion) => {
    handleOptionRegion(selectedRegion);
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
            onSelectionChange={(selectedKeys) => {
              handleRegionSelection(Array.from(selectedKeys)[0]);
            }}
          >
            <DropdownSection showDivider>
              <DropdownItem onPress={() => handleOptionRegion("All")} key="All">
                All
              </DropdownItem>
            </DropdownSection>
            <DropdownSection>
              <DropdownItem
                onPress={() => handleOptionRegion("Africa")}
                key="Africa"
              >
                Africa
              </DropdownItem>
              <DropdownItem
                onPress={() => handleOptionRegion("Antarctic")}
                key="Antarctic"
              >
                Antarctic
              </DropdownItem>
              <DropdownItem
                onPress={() => handleOptionRegion("Americas")}
                key="Americas"
              >
                Americas
              </DropdownItem>
              <DropdownItem
                onPress={() => handleOptionRegion("Asia")}
                key="Asia"
              >
                Asia
              </DropdownItem>
              <DropdownItem
                onPress={() => handleOptionRegion("Europe")}
                key="Europe"
              >
                Europe
              </DropdownItem>
              <DropdownItem
                onPress={() => handleOptionRegion("Oceania")}
                key="Oceania"
              >
                Oceania
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </>
    );
  };

  const INPUT_FILTER_NAME = () => {
    return (
      <>
        <Input
          variant="bordered"
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
        <NavbarContent className="hidden h-max sm:block">
          <NavbarItem>
            <BtnGitHubProfile user="TheFabi8A" />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarBrand>
            <h1 className="text-base font-bold sm:text-xl">
              Where in the world?
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
          <NavbarMenuItem className="mt-72 self-center">
            <BtnGitHubProfile user="TheFabi8A" />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
