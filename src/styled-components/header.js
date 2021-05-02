import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: absolute;
  width: 100%;
  top: 3rem;
  height: 0;
  left: 0;
  right: 0;
  z-index: 98;
`;
export const Logo = styled.div`
  cursor: pointer;
  a {
    font-size: 1.6rem;
    font-weight: 800;
    color: ${(props) => props.theme.text};
    letter-spacing: 2px;
  }
  span {
    height: 1rem;
    width: 1rem;
    position: relative;
    bottom: 1px;
    display: inline-block;
    border-radius: 50%;
    margin: 0 4px;
    background: ${(props) => props.theme.red};
  }
`;
export const Menu = styled.div`
  display: grid;
  place-content: center;
  height: 2rem;
  width: 2rem;
  span {
    height: 3px;
    width: 30px;
    border-radius: 5px;
    display: block;
    margin-bottom: 6px;
    background: ${(props) => props.theme.text};
  }
`;
