import react from "../imgs/react.svg";
import vite from "../imgs/vite.svg";
import "../css/footer.css"

function Footer() {
  return (
    <div className="footer">
      <p>made with</p>

      <div>
        <img className="vite" src={vite} alt="vite logo" />
        <img className="react" src={react} alt="react logo" />
        <p>React + Vite</p>
      </div>

      <p>Designed and developed by zeyad tamer</p>
    </div>
  );
}
export default Footer;
