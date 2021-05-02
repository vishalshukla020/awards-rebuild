import styled from "styled-components";
import { motion } from "framer-motion";

export const BannerSection = styled.div`
  height: 100vh;
  width: 100%;
  z-index: -1;
  position: relative;
  margin-bottom: 250px;
`;
export const BannerVideo = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .blur {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.blur};

    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
`;

export const BannerContent = styled(motion.div)`
  position: absolute;

  left: -25px;
  bottom: -45px;

  @media (max-width: 425px) {
    left: -9px;
    bottom: -25px;
  }
  span {
    color: ${(props) => props.theme.text};
    font-weight: 800;
    line-height: 17vw;
    font-size: 23vw;
    text-transform: uppercase;
    display: block;

    @media (max-width: 900px) {
      font-size: 40vw;
      line-height: 29vw;
    }
  }
`;

//Home content

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
  width: 100%;
  .content {
    width: 80%;
    margin-left: 12vw;
    @media (max-width: 900px) {
      margin-left: 1rem;
    }
  }
  span {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${(props) => props.theme.text};
  }
`;

//homeFeatured

export const HomeFeaturedSection = styled(motion.div)`
  height: 480px;
  width: 100%;

  margin-bottom: 350px;
  position: relative;
  padding: 0 32px;
  @media (max-width: 900px) {
    padding: 0;
  }
`;
export const VideoSection = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
export const FeaturedHeader = styled.div`
  position: absolute;

  left: 7vw;
  top: 2rem;
  span {
    color: ${(props) => props.theme.text};
    font-size: 1.7rem;
    font-weight: 700;
    filter: drop-shadow(0.2rem 0.5rem 1rem ${(props) => props.theme.blur});
  }
`;
export const FeaturedContent = styled.div`
  position: absolute;
  bottom: -128px;
  left: 7vw;
  h3 {
    color: ${(props) => props.theme.text};
    filter: drop-shadow(0.2rem 0.5rem 1rem ${(props) => props.theme.blur});

    text-transform: uppercase;
    margin: 0;
    font-weight: 800;
    font-size: 12vw;
    line-height: 10vw;
    @media (max-width: 900px) {
      font-size: 15vw;
      line-height: 12vw;
    }
  }
  .arrow {
    overflow: hidden;
    svg {
      margin-top: 1rem;
      height: 90px;

      path {
        fill: ${(props) => props.theme.red};
      }
    }
  }
`;

export const FeaturedButton = styled.button`
  margin-top: 150px;
  margin-right: 7vw;

  display: block;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.text};

  outline: none;
  border: none;
  position: relative;
  border-radius: 2px;

  padding: 0 2rem;
  height: 60px;

  text-align: left;
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 900) {
    font-size: 5vw;
  }
  &:hover {
    &::before,
    &::after {
      transform: translateX(0);
      transition: transform 0.3s cubic-bezier(1, 0, 0, 1);
    }
  }

  span {
    margin-left: 60px;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 2px;

    height: 3px;
    width: 30px;
    background: ${(props) => props.theme.text};
    right: 20px;
    transform: translateY(-50%);
    top: 50%;
  }
  &::before {
    margin-top: -5px;
    transform: translateX(-5px);
  }
  &::after {
    margin-top: 5px;
    transform: translateX(5px);
  }
`;

//HomeAbout

export const HomeAboutSection = styled(motion.div)`
  width: 80%;
  margin-left: 12vw;
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 1rem;
  }
`;
export const AboutContent = styled.div`
  color: ${(props) => props.theme.text};

  @media (max-width: 900px) {
    margin-left: 1rem;
  }
  h3 {
    font-size: 1.7rem;
    line-height: 2.2rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
  }
`;

export const AccordianSection = styled.div`
  margin-left: 12vw;

  color: ${(props) => props.theme.red};
  h2 {
    color: ${(props) => props.theme.text};
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0.75rem 0;
  }
  span {
    display: block;
    font-size: 1rem;
    line-height: 1.8rem;
    font-weight: 400;
  }
  .content {
    overflow: hidden;
    padding-left: 80px;
  }
  .header {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 40px;
      display: flex;
      align-items: Center;
      span {
        height: 4px;
        width: 16px;
        background: ${(props) => props.theme.red};
        display: block;
      }
    }
  }

  @media (max-width: 900px) {
    margin-left: 1rem;
  }
`;
