import { ThemeProvider } from "styled-components";
import { useState } from "react";

import {
  GlobalStyles,
  darkTheme,
  lightTheme,
} from "../styled-components/GlobalStyles";

import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/GlobalContext";

import Header from "../components/Header";
import CustomCursor from "../components/CustomCursor";
import Navigation from "../components/Navigation";
import Banner from "../components/HomePage/Banner";
import HomeContent from "../components/HomePage/HomeContent";
import HomeFeatured from "../components/HomePage/HomeFeatured";
import HomeAbout from "../components/HomePage/HomeAbout";
import Footer from "../components/Footer";

export default function Home() {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursorChange = (cursorType) => {
    dispatch({ type: "TOGGLE_CURSOR", cursorType: cursorType });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <CustomCursor toggleMenu={toggleMenu} />
      <Navigation
        onCursorChange={onCursorChange}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Header
        onCursorChange={onCursorChange}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Banner />
      <HomeContent />
      <HomeFeatured
        onCursorChange={onCursorChange}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <HomeAbout
        onCursorChange={onCursorChange}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <Footer onCursorChange={onCursorChange} />
    </ThemeProvider>
  );
}
