import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Container, Flex } from "../../styled-components/GlobalStyles";
import {
  HomeFeaturedSection,
  VideoSection,
  FeaturedContent,
  FeaturedHeader,
  FeaturedButton,
} from "../../styled-components/home";

export default function HomeFeatured({
  onCursorChange,
  toggleMenu,
  setToggleMenu,
}) {
  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <HomeFeaturedSection
      ref={featuredRef}
      animate={animation}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 72,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.5, 0.06, -0.01, 0.9],
          },
        },
      }}
      onHoverStart={() => setHovered(!hovered)}
      onHoverEnd={() => setHovered(!hovered)}
      onMouseEnter={() => onCursorChange("hovered")}
      onMouseLeave={onCursorChange}
    >
      <Container fluid>
        <FeaturedHeader>
          <span>Featured Projects</span>
        </FeaturedHeader>
        <VideoSection>
          <video
            autoPlay
            loop
            muted
            src={require("../../assets/video/featured-video.mp4")}
          />
        </VideoSection>
        <FeaturedContent>
          <h3>
            not
            <br />
            humble
          </h3>
          <div className="arrow">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 101 57"
              animate={{
                x: hovered ? -30 : -72,
                transition: { duration: 0.5, ease: [0.5, 0.06, -0.01, 0.9] },
              }}
            >
              <path
                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                fill="#FFF"
                fillRule="evenodd"
              ></path>
            </motion.svg>
          </div>
        </FeaturedContent>
        <Flex flexEnd>
          <FeaturedButton
            onMouseEnter={() => onCursorChange("pointer")}
            onMouseLeave={onCursorChange}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            All Projects
            <span></span>
          </FeaturedButton>
        </Flex>
      </Container>
    </HomeFeaturedSection>
  );
}
