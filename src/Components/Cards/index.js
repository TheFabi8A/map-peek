export { default as CountryCard } from "./CountryCard";

import { useContext, useState } from "react";
import { CountriesContext } from "@countries-context";

export const Index = () => {
  const { countriesFiltered } = useContext(CountriesContext);

  const [showFlags, setShowFlags] = useState(
    Array(countriesFiltered.length).fill(false),
  );

  const toggleImage = (index) => {
    const updatedShowFlags = [...showFlags];
    updatedShowFlags[index] = !updatedShowFlags[index];
    setShowFlags(updatedShowFlags);
  };

  return { toggleImage, showFlags };
};
