import { useContext } from "react";
import { CountriesContext } from "@countries-context";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/dropdown";

import { Button } from "@nextui-org/button";

import { Index } from ".";

export default function DropdownFilterRegion() {
  const { continentFilter } = useContext(CountriesContext);

  const { handleOptionRegion, handleRegionSelection } = Index();

  return (
    <Dropdown classNames={{ base: "dark:bg-slate-800 bg-slate-500" }}>
      <DropdownTrigger>
        <Button
          className="border-white text-lime-800 dark:bg-slate-800 dark:text-success"
          color="success"
          variant="faded"
        >{`Region: ${continentFilter}`}</Button>
      </DropdownTrigger>
      <DropdownMenu
        itemClasses={{ base: "!text-white" }}
        color="success"
        variant="flat"
        aria-label="Show region filters"
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
          <DropdownItem onPress={() => handleOptionRegion("Asia")} key="Asia">
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
  );
}
