import { Input } from "@nextui-org/input";

import { SearchIcon } from "../../Svg";

import { Index } from ".";

export default function InputSearchCountry() {
  const { queryInput, onClearInput, handleSearchChange } = Index();

  return (
    <Input
      classNames={{
        inputWrapper: "dark:bg-slate-800 border-white",
        innerWrapper: "gap-3",
        base: "relative z-10",
      }}
      variant="faded"
      color="success"
      aria-label="Search for a country..."
      placeholder="Search for a country..."
      onClear={onClearInput}
      value={queryInput}
      startContent={
        <SearchIcon className="pointer-events-none flex-shrink-0 text-success" />
      }
      onChange={handleSearchChange}
      type="text"
    />
  );
}
