import { useEffect, useRef } from "react";
import { useGlobalContextFunc } from "../contexts/GlobalContext";

const IconMenu = () => {
  const { showMenu, setShowMenu } = useGlobalContextFunc();

  useEffect(()=> {
    showMenu ?  menuIcon.current.classList.add("close") :
    menuIcon.current.classList.remove("close")

  },[showMenu])

  let menuIcon = useRef(null)

  return (
    <span ref={menuIcon} onClick={()=> setShowMenu(!showMenu)} className="menuIcon">
      <span>
        <i></i>
        <i></i>
      </span>
    </span>
  );
};
export default IconMenu;
