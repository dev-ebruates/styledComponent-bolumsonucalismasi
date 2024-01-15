import { BsFillSunFill } from "react-icons/bs";
import { StyledHeader } from "./styled/Header.styled";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";



export default function Header(){
  const {themeName, handleTheme} = useContext(SiteContext)
  return (
    <StyledHeader>
     <nav>
      <ul>
        <li><strong>Pico React</strong></li>
      </ul>
      <ul>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li>
        <button href="#" onClick={handleTheme}> 
        {themeName === "light" ? ( <BsFillSunFill/>) :<BsFillMoonStarsFill/>}{themeName}</button>
        </li>
      </ul>
    </nav>
    <div className="clear-fix"></div>
     </StyledHeader>
  )

}