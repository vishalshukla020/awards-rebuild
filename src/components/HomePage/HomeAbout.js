import { useState } from "react";
import { motion } from "framer-motion";

import { Container, Flex } from "../../styled-components/GlobalStyles";
import {
  HomeAboutSection,
  AboutContent,
  AccordianSection,
} from "../../styled-components/home";

const accordionIds = [
  {
    id: 0,
    title: "Pre-Production",
    results: [
      "Creative Development",
      "Writing",
      "Creative Development",
      "Writing",
      "Storyboards",
      "Art Direction",
      "Creative Direction",
      "Location Scouting",
      "Casting",
    ],
  },
  {
    id: 1,
    title: "Video Production",
    results: [
      "Principle Photography",
      "Production Management",
      "Crew",
      "Dailies",
      "LTO-Archiving",
    ],
  },
  {
    id: 2,
    title: "Post-Production",
    results: [
      "Colour correction",
      "Offline editing",
      "Online editing",
      "VFX",
      "Animation and motion graphics",
      "Closed captioning and subtitles",
      "Descriptive video",
      "Dailies",
      "Quality control",
      "LTO Archiving",
    ],
  },
  {
    id: 3,
    title: "Audio Post-Production",
    results: [
      "We work with some amazing partners who provide:",
      "Sound Design",
      "SFX",
      "Music",
      "Sound Mix",
    ],
  },
];

export default function HomeAbout({ onCursorChange }) {
  const [expanded, setExpanded] = useState(0);

  return (
    <HomeAboutSection
      initial={{ opacity: 0, y: 72 }}
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transtion: { duration: 0.6, ease: [0.5, 0.06, -0.01, 0.9] },
        },
      }}
    >
      <Container>
        <Flex alignTop column>
          <AboutContent>
            <h3>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h3>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </AboutContent>
          <AccordianSection>
            <h2>Services</h2>
            {accordionIds.map((content, index) => (
              <Accordian
                content={content}
                key={index}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursorChange={onCursorChange}
              />
            ))}
          </AccordianSection>
        </Flex>
      </Container>
    </HomeAboutSection>
  );
}

const Accordian = ({ content, expanded, setExpanded, onCursorChange }) => {
  let isOpen = content.id === expanded;
  return (
    <div
      onClick={() => setExpanded(content.id)}
      className="services"
      onMouseEnter={() => onCursorChange("pointer")}
      onMouseLeave={onCursorChange}
    >
      <div className="header">
        <div className="icon">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, x: 3 }}
            transition={{ duration: 0.4, ease: [0.5, 0.06, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, x: -3 }}
            transition={{ duration: 0.4, ease: [0.5, 0.06, -0.01, 0.9] }}
          ></motion.span>
        </div>

        <h4>{content.title}</h4>
      </div>
      <motion.div
        className="content"
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {content.results.map((result) => {
          return <span>{result}</span>;
        })}
      </motion.div>
    </div>
  );
};
