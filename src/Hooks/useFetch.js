import { useEffect, useState } from "react";

export default function useFetch() {
  const [isFetching, setFetching] = useState(false);
  const [errorFetch, setErrorFetch] = useState("");
  const [dataCountries, setDataCountries] = useState(null);

  useEffect(() => {
    setFetching(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Verificar si la respuesta es un array vacío y manejarlo
        if (Array.isArray(data) && data.length === 0) {
          throw new Error("La respuesta de la API está vacía.");
        } else {
          setDataCountries(data);
        }
      })
      .catch((error) => setErrorFetch(error.message))
      .finally(() => setFetching(false));
  }, []);

  console.log(dataCountries);

  return { dataCountries, isFetching, errorFetch };
}
