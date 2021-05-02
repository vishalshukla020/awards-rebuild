import { motion } from "framer-motion";
import styled from "styled-components";

export const NavigationSection = styled(motion.div)`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  background: ${(props) => props.theme.red};
`;

export const NavHeader = styled.div`
  position: relative;
  top: 3rem;
  h3 {
    font-size: 1.6rem;
    letter-spacing: 1.5px;
    color: ${(props) => props.theme.text};
  }
`;
export const CloseBtn = styled.div`
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
    &:nth-child(1) {
      transform: translateY(4px) rotate(45deg);
    }
    &:nth-child(2) {
      transform: translateY(-4px) rotate(-45deg);
    }
  }
`;
export const NavLink = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      font-size: 2.5rem;
      font-weight: 700;
      height: 4.5rem;

      overflow: hidden;
      text-transform: uppercase;
      color: ${(props) => props.theme.text};
      @media (max-width: 425px) {
        font-size: 6vw;
        height: 15vw;
      }
      .link {
        display: flex;
        align-items: center;
      }
      .arrow {
        height: 30px;
        svg {
          height: 40px;
          width: 80px;
          margin-right: 0.75rem;
          path {
            fill: ${(props) => props.theme.text};
          }
        }
      }
    }
  }
`;

export const NavVideo = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;

  height: 100%;
  width: 100%;
  z-index: -1;

  .reveal {
    background: ${(props) => props.theme.red};
    height: 100%;
    width: 100%;
    position: absolute;
    left: -1px;
  }
  .video {
    position: absolute;
    margin: 0;
    height: 100%;
    z-index: -1;
    background: #000000;
    video {
      height: 100%;
    }
  }
`;

export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 10vh;
  width: 100%;
  margin-top: 100px;
  padding-left: 20px;

  @media (max-width: 425px) {
    padding-left: 10px;
  }
  @media (min-width: 425px) {
    padding: 0 7vw;
  }

  .icons {
    svg {
      height: 25px;
      width: 25px;
      margin-right: 20px;
      @media (max-width: 425px) {
        margin-right: 10px;
        height: 20px;
        width: 20px;
      }

      path {
        fill: ${(props) => props.theme.text};
      }
    }
  }
  .content {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${(props) => props.theme.text};
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;
