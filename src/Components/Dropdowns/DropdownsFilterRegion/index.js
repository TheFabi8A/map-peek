export { default as DropdownFilterRegion } from "./DropdownFilterRegion";

import { useContext } from "react";
import { CountriesContext } from "@countries-context";

export const Index = () => {
  const { setContinentFilter, setCurrentPage } = useContext(CountriesContext);

  const handleOptionRegion = (region) => {
    setCurrentPage(1);
    setContinentFilter(region);
  };

  const handleRegionSelection = (selectedRegion) => {
    handleOptionRegion(selectedRegion);
  };

  return { handleOptionRegion, handleRegionSelection };
};
