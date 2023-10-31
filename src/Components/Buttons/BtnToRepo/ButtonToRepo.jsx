import { Button } from "@nextui-org/button";
import { Link as LinkUI } from "@nextui-org/link";

import { OctIcon } from "../../Svg";

export default function ButtonToRepo() {
  return (
    <Button
      color="success"
      className="border-success text-lime-800 dark:border-white dark:bg-slate-800 dark:text-success"
      as={LinkUI}
      isExternal
      variant="faded"
      href="https://github.com/TheFabi8A/map-peek"
      title="View repo on GitHub"
      startContent={
        <OctIcon className="w-5 fill-black transition-colors !duration-500 dark:fill-white" />
      }
    >
      GitHub Repo
    </Button>
  );
}
