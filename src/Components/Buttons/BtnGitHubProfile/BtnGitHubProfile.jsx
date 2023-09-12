import { Button, Link } from "@nextui-org/react";
import { OctIcon } from "../../Svg";
import { useContext } from "react";
import { CountriesContext } from "@countries-context";

export default function BtnGitHubProfile({ user }) {
  const { theme } = useContext(CountriesContext);

  return (
    <Button
      size="lg"
      target="blank"
      as={Link}
      href={`https://github.com/${user}`}
      variant="bordered"
      startContent={
        <OctIcon
          width={24}
          height={24}
          className={`${theme === "dark" ? "fill-white" : "fill-black"}`}
        />
      }
    >
      {user}
    </Button>
  );
}
