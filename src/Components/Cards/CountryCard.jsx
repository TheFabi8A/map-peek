import { useContext } from "react";
import { CountriesContext } from "@countries-context";

import { Link as LinkRouter } from "react-router-dom";

import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Link as LinkUI } from "@nextui-org/link";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Index } from ".";
import { GoogleMapsIcon, LinkIcon, UserFemaleIcon, UserMaleIcon } from "../Svg";

export default function CountryCard() {
  const { countriesFiltered, dataCountries, currentPage, theme } =
    useContext(CountriesContext);

  const { toggleImage, showFlags } = Index();

  return (
    <>
      {dataCountries && (
        <>
          {countriesFiltered.length > 0 ? (
            <>
              {countriesFiltered
                .slice((currentPage - 1) * 8, currentPage * 8)
                .map((countrie) => {
                  const {
                    name,
                    flags,
                    population,
                    region,
                    capital,
                    borders,
                    coatOfArms,
                    languages,
                    maps,
                    timezones,
                    id,
                  } = countrie;

                  const enNumberFormat = new Intl.NumberFormat("en-US");
                  const populationFormated = enNumberFormat.format(population);

                  const CAPITAL = () => {
                    return (
                      <>
                        {capital ? (
                          <div className="flex gap-2">
                            <h3>Capital:</h3>
                            <p>{capital}</p>
                          </div>
                        ) : (
                          <p className="font-bold italic text-danger">
                            This country don&apos;t have capital.
                          </p>
                        )}
                      </>
                    );
                  };

                  const borderURLs = dataCountries.reduce((acc, country) => {
                    acc[country.cca3] = {
                      name: country.name.common,
                      cca3: country.cca3,
                      url: `/${country.name.common
                        .toLowerCase()
                        .replace(/\s/g, "-")}`,
                    };
                    return acc;
                  }, {});

                  const TIMEZONES = () => {
                    return (
                      <div className="flex items-center gap-2">
                        <h3>Timezones:</h3>
                        <div className="flex flex-wrap gap-2">
                          {timezones.map((timezone) => {
                            return (
                              <Chip
                                classNames={{
                                  base: "transition-colors !duration-250 bg-gray-200 dark:bg-gray-700",
                                }}
                                variant="faded"
                                size="sm"
                                radius="sm"
                                key={timezone}
                              >
                                {timezone}
                              </Chip>
                            );
                          })}
                        </div>
                      </div>
                    );
                  };

                  const POPULATION = () => {
                    return (
                      <>
                        {population > 0 ? (
                          <div className="flex gap-2">
                            <h3>Population:</h3>
                            <p>{populationFormated}</p>
                          </div>
                        ) : (
                          <p className="font-bold italic text-danger">
                            This country don&apos;t inhabited.
                          </p>
                        )}
                      </>
                    );
                  };

                  const BORDERS = () => {
                    return (
                      <>
                        {borders ? (
                          <div className="flex gap-2">
                            <h3>Borders:</h3>
                            <div className="flex flex-wrap gap-2">
                              {borders.map((border) => (
                                <LinkUI
                                  isBlock
                                  key={border}
                                  className="gap-2 text-sm font-bold"
                                  as={LinkRouter}
                                  showAnchorIcon
                                  to={borderURLs[border].url}
                                  anchorIcon={
                                    <LinkIcon className="w-4 shrink-0 fill-warning-800 dark:fill-warning-300" />
                                  }
                                >
                                  <span className="pt-[1px] text-cyan-800 dark:text-cyan-300">
                                    {borderURLs[border]?.cca3 || border}
                                  </span>
                                </LinkUI>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p className="font-bold italic text-danger">
                            This country doesn&apos;t have borders.
                          </p>
                        )}
                      </>
                    );
                  };

                  const LANGUAGES = () => {
                    return (
                      <>
                        {languages ? (
                          <div className="flex gap-2">
                            <h3>Languages:</h3>
                            <div className="flex flex-wrap gap-2">
                              <>
                                {Object.keys(languages).map((languageCode) => {
                                  return (
                                    <Chip
                                      classNames={{
                                        base: "transition-colors !duration-250 bg-gray-200 dark:bg-gray-700",
                                      }}
                                      variant="faded"
                                      size="sm"
                                      radius="sm"
                                      key={languageCode}
                                    >
                                      {languages[languageCode]}
                                    </Chip>
                                  );
                                })}
                              </>
                            </div>
                          </div>
                        ) : (
                          <p className="font-bold italic text-danger">
                            This country doesn&apos;t have languages.
                          </p>
                        )}
                      </>
                    );
                  };

                  return (
                    <Card
                      isPressable
                      disableRipple
                      key={id}
                      className="w-full max-w-sm flex-col"
                      classNames={{
                        header:
                          "justify-center dark:bg-slate-800 transition-background !duraiton-500",
                        body: "flex flex-col gap-1 pt-3 dark:bg-slate-800 transition-background !duraiton-500",
                        footer:
                          "rounded-none dark:bg-slate-800 transition-background !duraiton-500",
                      }}
                    >
                      <CardHeader>
                        <Image
                          radius="sm"
                          width="360"
                          height="200"
                          className="max-h-64 min-h-[200px] w-full select-none"
                          onClick={() => toggleImage(id)}
                          aria-label={
                            showFlags[id] && coatOfArms.svg
                              ? "Click to view flag version"
                              : !showFlags[id] && flags.svg
                              ? "Click to view coat of arms version"
                              : "Click to view flag version"
                          }
                          title={
                            showFlags[id] && coatOfArms.svg
                              ? "Click to view flag version"
                              : !showFlags[id] && flags.svg
                              ? "Click to view coat of arms version"
                              : "Click to view flag version"
                          }
                          src={
                            showFlags[id]
                              ? coatOfArms.svg
                                ? coatOfArms.svg
                                : theme === "dark"
                                ? "/assets/img/no-coat-of-arms_dark.png"
                                : "/assets/img/no-coat-of-arms.png"
                              : flags.svg
                          }
                          alt={
                            showFlags[id]
                              ? coatOfArms.svg
                                ? `Coat of Arms of ${name.official}`
                                : "This country doesn't have a coat of arms"
                              : flags.svg
                              ? flags.alt
                                ? flags.alt
                                : `Flag of ${name.official}`
                              : null
                          }
                        />
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <div className="flex justify-between gap-5">
                          <div>
                            <LinkUI
                              className="gap-2 decoration-success-800 dark:decoration-success-300"
                              as={LinkRouter}
                              to={`${name.common
                                .toLowerCase()
                                .replace(/\s/g, "-")}`}
                              underline="always"
                              showAnchorIcon
                              anchorIcon={
                                <LinkIcon className="w-6 shrink-0 fill-success-800 dark:fill-success-300" />
                              }
                            >
                              <h2 className="inline-block text-2xl font-extrabold tracking-wide text-lime-800 dark:text-lime-300">
                                {name.official}
                              </h2>
                            </LinkUI>
                            {showFlags[id] && (
                              <>
                                {coatOfArms &&
                                Object.keys(coatOfArms).length === 0 ? null : (
                                  <p className="text-xl font-bold text-cyan-800 dark:text-cyan-300">
                                    <span className="text-warning-800 dark:text-warning-300">
                                      [
                                    </span>{" "}
                                    Coat of Arms Version{" "}
                                    <span className="text-warning-800 dark:text-warning-300">
                                      ]
                                    </span>
                                  </p>
                                )}
                              </>
                            )}
                          </div>
                          <Button
                            variant="faded"
                            title={`View ${name.common} on Google Maps`}
                            as={LinkUI}
                            href={maps.googleMaps}
                            isIconOnly
                            isExternal
                            className="bg-slate-300 p-3 dark:border-white dark:bg-slate-700"
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
                        {LANGUAGES()}
                      </CardBody>
                      <Divider />
                      <CardFooter>{TIMEZONES()}</CardFooter>
                    </Card>
                  );
                })}
            </>
          ) : (
            <div className="flex items-center">
              <h1 className="text-center text-[clamp(32px,_7vw,_60px)] font-extrabold leading-[1.1] text-danger">
                No results found
              </h1>
            </div>
          )}
        </>
      )}
    </>
  );
}
