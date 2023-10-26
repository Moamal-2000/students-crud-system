import { useGlobalContextFunc } from "../contexts/globalContext";
import IconMenu from "./IconMobileMenu";
import Introduction from "./Introduction";
import Students from "./Students";
import Footer from "./footer";
import MainForm from "./mainForm";
import Menu from "./menu";
import SearchForm from "./searchForm";

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
