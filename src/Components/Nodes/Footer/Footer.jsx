import { Pagination } from "@nextui-org/react";
import { useContext } from "react";
import { CountriesContext } from "@countries-context";

export default function Footer() {
  const isMobileView = window.innerWidth < 640;

  const { dataCountries, setCurrentPage, countriesFiltered, currentPage } =
    useContext(CountriesContext);

  return (
    <>
      {dataCountries && (
        <footer className="fixed bottom-0 left-0 z-10 flex h-16 w-full justify-center bg-white dark:bg-black">
          <Pagination
            page={currentPage}
            boundaries={isMobileView ? 0 : 1}
            color="default"
            variant="bordered"
            showControls
            initialPage={1}
            className="m-0"
            onChange={setCurrentPage}
            size="lg"
            total={Math.ceil(countriesFiltered.length / 20)}
          />
        </footer>
      )}
    </>
  );
}
