import CountryCard from "./Components/Cards/CountryCard";
import Footer from "./Components/Nodes/Footer/Footer";
import Header from "./Components/Nodes/Header/Header";
import Main from "./Components/Nodes/Main/Main";

export default function Application() {
  return (
    <>
      <Header />
      <Main>
        <CountryCard />
      </Main>
      <Footer />
    </>
  );
}
