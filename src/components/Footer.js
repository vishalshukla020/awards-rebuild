import { FooterSection } from "../styled-components/footer";
import { Container, Flex } from "../styled-components/GlobalStyles";
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons";

export default function Footer({ onCursorChange }) {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
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
    </FooterSection>
  );
}
