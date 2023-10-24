import { createContext, useState, useEffect } from "react";
import { ChildrenPropTypes } from "../PropTypes";
import useFetch from "../Hooks/useFetch";

export const CountriesContext = createContext();

CountriesContextProvider.propTypes = {
  children: ChildrenPropTypes,
};

export default function CountriesContextProvider({ children }) {
  const { dataCountries, isFetching } = useFetch();

  console.log(dataCountries);

  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [continentFilter, setContinentFilter] = useState("All");

  const [theme, setTheme] = useState(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return userTheme || systemTheme;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const systemThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    systemThemeMedia.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeMedia.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const countriesFiltered = dataCountries
    ? dataCountries.filter((country) => {
        const nameMatchesSearchQuery =
          country.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          country.name.official
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const continentFilteredSelected =
          continentFilter === "All" || country.region.includes(continentFilter);

        return nameMatchesSearchQuery && continentFilteredSelected;
      })
    : [];

  return (
    <CountriesContext.Provider
      value={{
        dataCountries,
        theme,
        setTheme,
        isFetching,
        searchQuery,
        setSearchQuery,
        countriesFiltered,
        continentFilter,
        setContinentFilter,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
