import { useContext } from "react";
import { CountriesContext } from "@countries-context";

import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Link as LinkUI } from "@nextui-org/link";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Index } from ".";
import { GoogleMapsIcon } from "../Svg";

export default function CountryCard() {
  const { countriesFiltered, dataCountries, currentPage } =
    useContext(CountriesContext);

  const { toggleImage, showFlags } = Index();

  return (
    <>
      {dataCountries && (
        <>
          {countriesFiltered
            .slice((currentPage - 1) * 8, currentPage * 8)
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

              // !Capital

              const CAPITAL = () => {
                return (
                  <>
                    {capital ? (
                      <>
                        <div className="flex gap-2">
                          <h3>Capital:</h3>
                          <p>{capital}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="font-bold italic text-danger">
                          This country don&apos;t have capital.
                        </p>
                      </>
                    )}
                  </>
                );
              };

              // !Timezones

              const TIMEZONE = () => {
                return (
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
                );
              };

              // !Population

              const spanishPopulationNumberFormat = new Intl.NumberFormat(
                "es-ES",
              );

              const populationFormated =
                spanishPopulationNumberFormat.format(population);

              const POPULATION = () => {
                return (
                  <>
                    {population !== 0 ? (
                      <div className="flex gap-2">
                        <h3>Population:</h3>
                        <p>{populationFormated}</p>
                      </div>
                    ) : (
                      <p className="font-bold italic text-danger">
                        This country isn&apos;t inhabited...
                      </p>
                    )}
                  </>
                );
              };

              // !Demonyms

              const DEMONYMS = () => {
                return (
                  <>
                    {demonyms && (
                      <>
                        <div>
                          <h3>Demonyms:</h3>
                          <ul className="list-inside list-disc">
                            <li>Male: {demonyms?.eng?.m}</li>
                            <li>Female: {demonyms?.eng?.f}</li>
                          </ul>
                        </div>
                      </>
                    )}
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
                        {languages && (
                          <>
                            {Object.keys(languages).map((languageCode) => {
                              return (
                                <Chip size="sm" radius="sm" key={languageCode}>
                                  {languages[languageCode]}
                                </Chip>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </div>
                  </>
                );
              };

              return (
                <Card
                  isPressable
                  disableRipple
                  key={area}
                  className="w-full max-w-sm flex-col gap-2 rounded-lg"
                >
                  <CardHeader className="justify-center">
                    <Image
                      width="200"
                      height="100"
                      className="max-h-64 min-h-[200px] w-full select-none object-scale-down"
                      onClick={() => toggleImage(index)}
                      src={showFlags[index] ? coatOfArms.svg : flags.svg}
                      alt={flags.alt ? `${flags.alt}` : `${name.official} flag`}
                    />
                  </CardHeader>
                  <Divider />
                  <CardBody className="flex flex-col gap-1 pt-3">
                    <div className="flex justify-between gap-1">
                      <div>
                        <h2 className="text-2xl font-black tracking-wide">
                          {name.official}
                        </h2>
                        <>
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
                                  <span className="text-warning">[</span> Coat
                                  of Arms version{" "}
                                  <span className="text-warning">]</span>
                                </p>
                              )}
                            </>
                          )}
                        </>
                      </div>
                      <Button
                        title="View on Google Maps"
                        as={LinkUI}
                        href={maps.googleMaps}
                        isIconOnly
                        isExternal
                        className="p-3"
                      >
                        <GoogleMapsIcon />
                      </Button>
                    </div>
                    {POPULATION()}
                    <div className="flex gap-2">
                      <h3>Region:</h3>
                      <p>{region}</p>
                    </div>
                    {CAPITAL()}
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
