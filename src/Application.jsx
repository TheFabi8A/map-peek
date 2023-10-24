import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Nodes/Footer/Footer";
import Header from "./Components/Nodes/Header/Header";
import Main from "./Components/Nodes/Main/Main";

import { lazy } from "react";
const CountryCard = lazy(() => import("./Components/Cards/CountryCard"));

export default function Application() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<CountryCard />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}
