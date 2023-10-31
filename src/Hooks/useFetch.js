import { useEffect, useState } from "react";

export default function useFetch() {
  const [isFetching, setFetching] = useState(true);
  const [errorFetch, setErrorFetch] = useState("");
  const [dataCountries, setDataCountries] = useState(null);

  useEffect(() => {
    setFetching(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const dataWithIds = data.map((item, index) => ({
          ...item,
          id: index,
        }));
        setDataCountries(dataWithIds);
      })
      .catch((error) => setErrorFetch(error.message))
      .finally(() => setFetching(false));
  }, []);

  return { dataCountries, isFetching, errorFetch };
}
