import { useContext } from "react";

import { CircularProgress } from "@nextui-org/progress";

import Application from "./Application";
import { CountriesContext } from "@countries-context";

export default function App() {
  const { isFetching } = useContext(CountriesContext);

  return (
    <>
      {isFetching ? (
        <div className="grid h-[100dvh] w-full place-items-center">
          <CircularProgress
            color="default"
            size="lg"
            aria-label="Getting Data"
          />
        </div>
      ) : (
        <>
          <Application />
        </>
      )}
    </>
  );
}
