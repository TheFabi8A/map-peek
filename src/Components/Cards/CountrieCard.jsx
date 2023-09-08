import { useContext, useState } from "react";
import { CountriesContext } from "@countries-context";
import {
  Card,
  CardHeader,
  Image,
  CardBody,
  Divider,
  Chip,
} from "@nextui-org/react";

export default function CountrieCard() {
  const { countriesFiltered, dataCountries, currentPage } =
    useContext(CountriesContext);

  const [showFlags, setShowFlags] = useState(
    Array(countriesFiltered.length).fill(true),
  );

  const toggleImage = (index) => {
    const updatedShowFlags = [...showFlags];
    updatedShowFlags[index] = !updatedShowFlags[index];
    setShowFlags(updatedShowFlags);
  };

  return (
    <>
      {dataCountries && (
        <>
          {countriesFiltered
            .slice((currentPage - 1) * 20, currentPage * 20)
            .map((countrie, index) => {
              const {
                name,
                flags,
                population,
                region,
                capital,
                area,
                borders,
                coatOfArms,
              } = countrie;

              const spanishPopulationNumberFormat = new Intl.NumberFormat(
                "es-ES",
              );
              const populationFormated =
                spanishPopulationNumberFormat.format(population);

              const BORDERS = () => {
                return (
                  <>
                    {borders ? (
                      <>
                        <h3 className="mb-2">Borders:</h3>
                        <div className="flex flex-wrap gap-4">
                          {borders.map((border) => {
                            return (
                              <Chip radius="sm" key={border}>
                                {border}
                              </Chip>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <p className="font-bold italic">
                        This country doesn&apos;t have borders...
                      </p>
                    )}
                  </>
                );
              };

              return (
                <Card
                  onClick={() => toggleImage(index)}
                  isPressable
                  disableAnimation
                  key={area}
                  className="mb-4 h-max w-full flex-col gap-4 rounded-lg"
                >
                  <CardHeader className="grid place-items-center justify-center">
                    <Image
                      className="h-64 select-none object-scale-down"
                      isBlurred
                      src={showFlags[index] ? coatOfArms.png : flags.png}
                    />
                  </CardHeader>
                  <Divider />
                  <CardBody className="pt-0">
                    <div className="mb-4">
                      <h2 className="text-xl font-black tracking-wide">
                        {name.official}
                        {showFlags[index] && (
                          <p className="">[ Coat of Arms version ]</p>
                        )}
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <h3>Population:</h3>
                      <p>{populationFormated}</p>
                    </div>
                    <h3>Region: {region}</h3>
                    <h3>Capital: {capital}</h3>
                    {BORDERS()}
                  </CardBody>
                </Card>
              );
            })}
        </>
      )}
    </>
  );
}
