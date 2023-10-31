export { default as Header } from "./Header";

import { useState } from "react";

export const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return {
    isMenuOpen,
    setIsMenuOpen,
  };
};
