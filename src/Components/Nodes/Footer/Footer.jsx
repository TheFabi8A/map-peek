import { Pagination } from "@nextui-org/pagination";
import { useContext } from "react";
import { CountriesContext } from "@countries-context";

export default function Footer() {
  const isMobileView = window.innerWidth < 640;

  const { dataCountries, setCurrentPage, countriesFiltered, currentPage } =
    useContext(CountriesContext);

  return (
    <>
      {dataCountries && (
        <footer className="fixed bottom-0 left-0 z-10 flex h-16 w-full justify-center bg-slate-500 transition-background dark:bg-slate-800">
          <Pagination
            classNames={{
              next: "text-success dark:bg-slate-700 transition-background",
              prev: "text-success dark:bg-slate-700 transition-background",
              item: "border-success dark:bg-slate-700 bg-slate-300",
              forwardIcon: "text-success",
              ellipsis: "text-success",
            }}
            page={currentPage}
            boundaries={isMobileView ? 0 : 1}
            color="success"
            variant="faded"
            showControls
            initialPage={1}
            className="m-0"
            onChange={setCurrentPage}
            size="lg"
            total={Math.ceil(countriesFiltered.length / 8)}
          />
        </footer>
      )}
    </>
  );
}
