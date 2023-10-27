import styles from "../css/Footer.module.css";
import reactImg from "../imgs/react.svg";
import viteImg from "../imgs/vite.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>made with</p>

      <div>
        <img className={styles.vite} src={viteImg} alt="vite logo" />
        <img className={styles.react} src={reactImg} alt="react logo" />
        <p>React + Vite</p>
      </div>

      <p>Designed and developed by zeyad tamer</p>
    </div>
  );
}
export default Footer;
