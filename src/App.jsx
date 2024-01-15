import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { SiteContext } from "./context/SiteContext";
import { GlobalStyle } from "./components/styled/GlobalStyle";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import { StyledMain } from "./components/styled/Main.styled";
import { StyledAside } from "./components/styled/Aside.styled";
import { StyledSection } from "./components/styled/Section.styled";
import { StyledArticle } from "./components/styled/Article.styled";
import { StyledImg } from "./components/styled/Img.styled";
import { StyledHeader } from "./components/styled/Header.styled";



export default function App() {
  const { themeName } = useContext(SiteContext);

  return (
    <>
      <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header />
        <StyledMain className="mt-10">
         
          
          
        </StyledMain>
      </ThemeProvider>
    </>
  );
}
