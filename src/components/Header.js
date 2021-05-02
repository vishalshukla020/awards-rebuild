import Link from "next/link";

import { Container, Flex } from "../styled-components/GlobalStyles";
import { Nav, Logo, Menu } from "../styled-components/header";

import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/GlobalContext";

export default function Header({ onCursorChange, toggleMenu, setToggleMenu }) {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };
  return (
    <Nav
      initial={{ y: -72, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: [0.5, 0.06, -0.01, 0.9] },
      }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Link href="/">
            <Logo
              onMouseEnter={() => onCursorChange("hovered")}
              onMouseLeave={onCursorChange}
            >
              <a>
                FURR
                <span
                  onClick={toggleTheme}
                  onMouseEnter={() => onCursorChange("pointer")}
                  onMouseLeave={onCursorChange}
                ></span>
                W
              </a>
            </Logo>
          </Link>
          <Menu
            onMouseEnter={() => onCursorChange("pointer")}
            onMouseLeave={onCursorChange}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span></span>
            <span></span>
          </Menu>
        </Flex>
      </Container>
    </Nav>
  );
}
