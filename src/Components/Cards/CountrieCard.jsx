import { useContext } from "react";
import { CountriesContext } from "@countries-context";
import {
  Card,
  CardHeader,
  Image,
  CardBody,
  Divider,
  Chip,
  Button,
  Link,
  CardFooter,
} from "@nextui-org/react";
import { Index } from ".";
import { GoogleMapsIcon } from "../Svg";

export default function CountrieCard() {
  const { countriesFiltered, dataCountries, currentPage } =
    useContext(CountriesContext);

  const { toggleImage, showFlags } = Index();

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
                demonyms,
                languages,
                maps,
                timezones,
              } = countrie;

              // !Timezones

              const TIMEZONE = () => {
                return (
                  <>
                    <div className="flex gap-2">
                      <h3>Timezones:</h3>
                      <div className="flex flex-wrap gap-2">
                        {timezones.map((timezone) => {
                          return (
                            <Chip size="sm" radius="sm" key={timezone}>
                              {timezone}
                            </Chip>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              };

              // !Population

              const spanishPopulationNumberFormat = new Intl.NumberFormat(
                "es-ES",
              );

              const populationFormated =
                spanishPopulationNumberFormat.format(population);

              // !Demonyms

              const femaleEngDemonyms = demonyms.eng.f;
              const maleEngDemonyms = demonyms.eng.m;

              const DEMONYMS = () => {
                return (
                  <>
                    <div>
                      <h3>Demonyms:</h3>
                      <ul className="list-inside list-disc">
                        <li>Male: {maleEngDemonyms}</li>
                        <li>Female: {femaleEngDemonyms}</li>
                      </ul>
                    </div>
                  </>
                );
              };

              // !Borders

              const BORDERS = () => {
                return (
                  <>
                    {borders ? (
                      <>
                        <div className="flex gap-2">
                          <h3>Borders:</h3>
                          <div className="flex flex-wrap gap-2">
                            {borders.map((border) => {
                              return (
                                <Chip size="sm" radius="sm" key={border}>
                                  {border}
                                </Chip>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="font-bold italic text-danger">
                        This country doesn&apos;t have borders...
                      </p>
                    )}
                  </>
                );
              };

              // !Languages

              const LANGUAGES = () => {
                return (
                  <>
                    <div className="flex gap-2">
                      <h3>Languages:</h3>
                      <div className="flex flex-wrap gap-2">
                        {Object.keys(languages).map((languageCode) => {
                          return (
                            <Chip size="sm" radius="sm" key={languageCode}>
                              {languages[languageCode]}
                            </Chip>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              };

              return (
                <Card
                  onClick={() => toggleImage(index)}
                  isPressable
                  disableAnimation
                  key={area}
                  className="mb-4 h-max w-full flex-col gap-2 rounded-lg"
                >
                  <CardHeader className="justify-center">
                    <Image
                      className="max-h-64 w-full select-none object-scale-down"
                      isBlurred
                      src={showFlags[index] ? coatOfArms.svg : flags.svg}
                    />
                  </CardHeader>
                  <Divider />
                  <CardBody className="flex flex-col gap-1 pt-3">
                    <div className="flex justify-between gap-1">
                      <div>
                        <h2 className="text-2xl font-black tracking-wide">
                          {name.official}
                        </h2>
                        {showFlags[index] && (
                          <>
                            {coatOfArms &&
                            Object.keys(coatOfArms).length === 0 ? (
                              <p className="text-xl font-bold text-danger">
                                <span className="text-warning">[</span> This
                                country doesn&apos;t have a coat of arms{" "}
                                <span className="text-warning">]</span>
                              </p>
                            ) : (
                              <p className="text-xl font-bold text-success">
                                <span className="text-warning">[</span> Coat of
                                Arms version{" "}
                                <span className="text-warning">]</span>
                              </p>
                            )}
                          </>
                        )}
                      </div>
                      <Button
                        className="h-max w-max shrink-0 p-1"
                        isIconOnly
                        as={Link}
                        href={maps.googleMaps}
                        target="blank"
                      >
                        <GoogleMapsIcon className="h-12 w-12" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <h3>Population:</h3>
                      <p>{populationFormated}</p>
                    </div>
                    <div className="flex gap-2">
                      <h3>Region:</h3>
                      <p>{region}</p>
                    </div>
                    <div className="flex gap-2">
                      <h3>Capital:</h3>
                      <p>{capital}</p>
                    </div>
                    {BORDERS()}
                    {DEMONYMS()}
                    {LANGUAGES()}
                  </CardBody>
                  <Divider />
                  <CardFooter className="pt-1">{TIMEZONE()}</CardFooter>
                </Card>
              );
            })}
        </>
      )}
    </>
  );
}
