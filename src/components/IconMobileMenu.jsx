import { useGlobalContextFunc } from "../contexts/globalContext";

const IconMenu = () => {
  const { showMenu, setShowMenu } = useGlobalContextFunc();

  const menuToggle = (e) => {
    e.currentTarget.classList.toggle("close");
    setShowMenu(!showMenu);
  };

  return (
    <span onClick={menuToggle} className="menuIcon">
      <span>
        <i></i>
        <i></i>
      </span>
    </span>
  );
};
export default IconMenu;
