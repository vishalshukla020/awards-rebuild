import {
  BannerSection,
  BannerVideo,
  BannerContent,
} from "../../styled-components/home";

import { motion } from "framer-motion";

export default function Banner() {
  const container = {
    hidden: {
      y: 800,
    },
    show: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {
      y: 800,
    },
    show: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <BannerSection>
      <BannerVideo>
        <video
          autoPlay
          muted
          loop
          cover
          src={require("../../assets/video/featured-video.mp4")}
        />
        <div className="blur"></div>
      </BannerVideo>
      <BannerContent variants={container} initial="hidden" animate="show">
        <motion.span variants={item}>Dig</motion.span>
        <motion.span variants={item}>Deep</motion.span>
      </BannerContent>
    </BannerSection>
  );
}
