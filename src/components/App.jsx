import { useGlobalContextFunc } from "../contexts/GlobalContext";
import Footer from "./Footer";
import IconMenu from "./IconMobileMenu";
import Introduction from "./Introduction";
import MainForm from "./MainForm";
import Menu from "./Menu";
import SearchForm from "./SearchForm";
import Students from "./Students";

function App() {
  const { renderMainForm } = useGlobalContextFunc();

  return (
    <>
      <div className="container">
        <Introduction />

        {renderMainForm ? <MainForm /> : <SearchForm />}

        <Students />

        <Footer />
      </div>

      <Menu />
      <IconMenu />
      <button className="freeTrail">free trial</button>
    </>
  );
}

export default App;
