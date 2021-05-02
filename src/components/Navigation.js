import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  NavigationSection,
  NavHeader,
  CloseBtn,
  NavLink,
  NavVideo,
  NavFooter,
} from "../styled-components/navigation";
import { Container, Flex } from "../styled-components/GlobalStyles";
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons";

const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
];

export default function Navigation({
  onCursorChange,
  toggleMenu,
  setToggleMenu,
}) {
  const [showVideo, setShowVideo] = useState({
    show: false,
    video: "50-beaches.mp4",
    key: 0,
  });

  const year = new Date().getFullYear();
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {toggleMenu && (
          <NavigationSection
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? "0" : "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h3>Projects</h3>
                  <CloseBtn
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursorChange("pointer")}
                    onMouseLeave={onCursorChange}
                  >
                    <span></span>
                    <span></span>
                  </CloseBtn>
                </Flex>
              </NavHeader>
              <NavLink>
                <ul>
                  {navRoutes.map((route) => {
                    return (
                      <Link href={route.path}>
                        <motion.li
                          onHoverStart={() =>
                            setShowVideo({
                              show: true,
                              video: route.video,
                              key: route.id,
                            })
                          }
                          onHoverEnd={() =>
                            setShowVideo({
                              show: false,
                              video: route.video,
                              key: route.id,
                            })
                          }
                          onMouseEnter={() => onCursorChange("pointer")}
                          onMouseLeave={onCursorChange}
                        >
                          <motion.div
                            className="link"
                            initial={{ x: -70 }}
                            whileHover={{ x: -25 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.5, 0.06, -0.01, 0.9],
                            }}
                          >
                            <span className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                              >
                                <path
                                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                  fill="#FFF"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            {route.title}
                          </motion.div>
                        </motion.li>
                      </Link>
                    );
                  })}
                </ul>
              </NavLink>
              <NavFooter>
                <Container fluid>
                  <Flex spaceBetween>
                    <div className="content">
                      <span>&#169;Furrow Studios | {year} </span>
                    </div>
                    <div className="icons">
                      <a
                        href="/"
                        onMouseEnter={() => onCursorChange("pointer")}
                        onMouseLeave={onCursorChange}
                      >
                        <Instagram />
                      </a>
                      <a
                        href="/"
                        onMouseEnter={() => onCursorChange("pointer")}
                        onMouseLeave={onCursorChange}
                      >
                        <Facebook />
                      </a>
                      <a
                        href="/"
                        onMouseEnter={() => onCursorChange("pointer")}
                        onMouseLeave={onCursorChange}
                      >
                        <Vimeo />
                      </a>
                    </div>
                  </Flex>
                </Container>
              </NavFooter>
              <NavVideo>
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.div
                    className="reveal"
                    animate={{ width: showVideo.show ? "0" : "100%" }}
                  ></motion.div>
                  <motion.div
                    key={showVideo.key}
                    className="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <video
                      src={require(`../assets/video/${showVideo.video}`)}
                      loop
                      autoPlay
                      muted
                    ></video>
                  </motion.div>
                </AnimatePresence>
              </NavVideo>
            </Container>
          </NavigationSection>
        )}
      </AnimatePresence>
    </>
  );
}
