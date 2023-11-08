import {
  Route,
  Routes,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { HomePage, NotFoundPage } from "./pages";
import { CountriesContext } from "./Contexts/CountriesContextProvider";
import { Footer, Header, Main } from "./Components/Nodes";
import { Link as LinkUI } from "@nextui-org/link";
import { Chip, Image } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Index } from "./Components/Cards";
import {
  GoogleMapsIcon,
  OpenStreetMapIcon,
  UserFemaleIcon,
  UserMaleIcon,
  WorldCupIcon,
} from "./Components/Svg";

const CountryPage = () => {
  const { dataCountries, theme } = useContext(CountriesContext);
  console.log(dataCountries);
  const { country } = useParams();

  const countryData = dataCountries.find(
    (c) => c.name.common.toLowerCase().replace(/\s/g, "-") === country,
  );

  if (!countryData) {
    return <Navigate to="/not-found" />;
  }

  const countryComponent = createCountryComponent({ countryData, theme });

  return <>{countryComponent}</>;
};

function createCountryComponent({ countryData, theme }) {
  const {
    altSpellings,
    name,
    population,
    flags,
    currencies,
    capital,
    borders,
    coatOfArms,
    demonyms,
    languages,
    maps,
    fifa,
    timezones,
    id,
    area,
    gini,
    continents,
    tld,
    unMember,
    landlocked,
  } = countryData;

  const enNumberFormat = new Intl.NumberFormat("en-US");

  const populationFormated = enNumberFormat.format(population);

  const areaFormated = enNumberFormat.format(area);

  const { toggleImage, showFlags } = Index();

  return (
    <article className="flex w-full flex-wrap justify-center gap-4">
      <div className="max-w-md">
        <header>
          <Image
            width="360"
            height="200"
            classNames={{
              img: "w-full object-scale-down",
              wrapper: "mb-4 cursor-pointer",
            }}
            className="max-h-64 min-h-[200px] select-none"
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
          <h1 className="rounded-t-xl bg-white p-4 text-[clamp(32px,_7vw,_60px)] font-extrabold leading-[1.1] tracking-wide transition-background dark:bg-slate-800">
            {name.official}
          </h1>
        </header>
        <div className="rounded-b-xl border-2 p-2 transition-colors dark:border-slate-800">
          <p>
            Commoly known as {name.common}, also known as{" "}
            {altSpellings.map((spelling, index) => (
              <em key={index}>{spelling}, </em>
            ))}{" "}
            and officially {name.official}, is a country that is located on the
            continent of{" "}
            {continents.map((continent, index) => (
              <em key={index}>{continent}</em>
            ))}
            .
          </p>
          {currencies && (
            <p>
              {Object.keys(currencies).length === 1 ? (
                `The official currency is: ${Object.keys(currencies)[0]} (${
                  currencies[Object.keys(currencies)[0]].symbol
                }).`
              ) : (
                <span>
                  The oficcial currencies are:{" "}
                  {Object.keys(currencies).map((currency, index, array) => (
                    <span key={currency}>
                      {`${currency} (${currencies[currency].symbol})${
                        index === array.length - 1
                          ? ""
                          : index === array.length - 2
                          ? " and "
                          : ", "
                      }`}
                    </span>
                  ))}
                  .
                </span>
              )}
            </p>
          )}
          <p>
            {`${unMember ? "It is" : "It is not"} a member`} of the United
            Nations.
          </p>
          <p>
            {landlocked
              ? "It is completely surrounded by other countries so it has no access to the sea"
              : "It has access to the sea."}
          </p>
          {borders ? (
            <p>
              Borders:{" "}
              {borders.length === 1
                ? borders[0]
                : borders.slice(0, -1).join(", ") +
                  " and " +
                  borders[borders.length - 1]}
              .
            </p>
          ) : (
            <p>This country doesn&apos;t have borders.</p>
          )}
        </div>
      </div>
      <Accordion
        variant="shadow"
        itemClasses={{ indicator: "text-success" }}
        className="max-w-md self-start transition-background dark:bg-slate-800"
        defaultExpandedKeys={["FACTS"]}
      >
        <AccordionItem title="FACTS" key="FACTS">
          {!capital && (
            <p className="font-bold italic text-danger">
              This country doesn&apos;t have capital.
            </p>
          )}
          {!population && (
            <p className="font-bold italic text-danger">
              This country don&apos;t inhabited.
            </p>
          )}
          {!languages && (
            <p className="font-bold italic text-danger">
              This country doesn&apos;t have official languages.
            </p>
          )}
          <ul className="list-outside list-disc">
            {capital && (
              <li>
                <span className="font-bold">Capital:</span> {capital}
              </li>
            )}
            {area && (
              <li>
                <span className="font-bold">Area:</span> {areaFormated} km
                <sup>2</sup>
              </li>
            )}
            {population > 0 && (
              <li>
                <span className="font-bold">Population:</span>{" "}
                {populationFormated}
              </li>
            )}
            {languages && (
              <li>
                <span className="font-bold">
                  {languages.length > 1 ? "Languages: " : "Language: "}
                </span>
                {Object.keys(languages).map((language, index, array) => {
                  return (
                    <span key={language}>
                      {`${languages[language]}${
                        index === array.length - 1
                          ? ""
                          : index === array.length - 2
                          ? " and "
                          : ", "
                      }`}
                    </span>
                  );
                })}
                .
              </li>
            )}
          </ul>
        </AccordionItem>
        {gini && (
          <AccordionItem
            title="Gini"
            subtitle={
              gini ? (
                <>
                  {Object.keys(gini)[0]}: {gini[Object.keys(gini)[0]]}
                </>
              ) : null
            }
          >
            <p>
              The Gini coefficient is a measure of inequality devised by the
              Italian statistician Corrado Gini. It is typically used to measure
              income inequality within a country but can be used to measure any
              form of unequal distribution.
            </p>
          </AccordionItem>
        )}
        {tld && (
          <AccordionItem title="Top Level Domain" subtitle={tld}>
            <p>
              A top-level domain (TLD) is the highest category of Fully
              Qualified Domain Names (FQDN) that is translated into IP addresses
              by the official Internet DNS. The names served by the official DNS
              are managed by the Internet Corporation for Assigned Names and
              Numbers.
            </p>
          </AccordionItem>
        )}
        {maps && (
          <AccordionItem title="Map Location" subtitle="See on map">
            <ul>
              <li>
                <span className="flex items-center">
                  <GoogleMapsIcon className="mx-1 w-4" />
                  Google Maps:{" "}
                </span>
                <LinkUI
                  href={maps.googleMaps}
                  underline="always"
                  isExternal
                  showAnchorIcon
                >
                  {maps.googleMaps}
                </LinkUI>
              </li>
              <li>
                <span className="flex items-center">
                  <OpenStreetMapIcon className="mx-1 w-4 fill-black dark:fill-white" />
                  Open Street Maps:{" "}
                </span>
                <LinkUI
                  href={maps.openStreetMaps}
                  underline="always"
                  isExternal
                  showAnchorIcon
                >
                  {maps.openStreetMaps}
                </LinkUI>
              </li>
            </ul>
          </AccordionItem>
        )}
        {demonyms && (
          <AccordionItem title="Demonyms">
            <ul>
              <li className="flex items-center">
                <UserMaleIcon className="mx-1 w-5 fill-black dark:fill-white" />
                Male: {demonyms?.eng?.m}
              </li>
              <li className="flex items-center">
                <UserFemaleIcon className="mx-1 w-5 fill-black dark:fill-white" />
                Female: {demonyms?.eng?.f}
              </li>
            </ul>
          </AccordionItem>
        )}
        {timezones && (
          <AccordionItem title="Timezones">
            <div className="flex flex-wrap items-center gap-2">
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
          </AccordionItem>
        )}
        {fifa && (
          <AccordionItem
            className="opacity-100"
            isDisabled
            title="Fifa"
            subtitle={
              <>
                <div className="flex items-center gap-2">
                  FIFA Code: {fifa}
                  <img
                    className="w-4"
                    src={`${flags.svg}`}
                    alt={flags.alt ? flags.alt : `${name.official} flag`}
                  />
                </div>
              </>
            }
            indicator={<WorldCupIcon className="w-6" />}
          />
        )}
      </Accordion>
    </article>
  );
}

export default function Application() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:country" element={<CountryPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Main>
      {location.pathname === "/" && <Footer />}
    </>
  );
}
