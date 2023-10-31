export { default as InputSearchCountry } from "./InputSearchCountry";

import { useContext, useState } from "react";
import { CountriesContext } from "@countries-context";

export const Index = () => {
  const [queryInput, setQueryInput] = useState(
    sessionStorage.getItem("searchQuery") || "",
  );

  const [typingTimeout, setTypingTimeout] = useState(null);

  const { setSearchQuery, setCurrentPage } = useContext(CountriesContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQueryInput(value);
    sessionStorage.setItem("searchQuery", value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      setSearchQuery(value);
      setCurrentPage(1);
    }, 1000);

    setTypingTimeout(newTimeout);
  };

  const onClearInput = () => {
    setQueryInput("");
    setSearchQuery("");
    sessionStorage.setItem("searchQuery", "");
  };

  return { handleSearchChange, queryInput, setSearchQuery, onClearInput };
};
