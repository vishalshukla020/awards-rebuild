import { HomeContentSection } from "../../styled-components/home";
import { Container } from "../../styled-components/GlobalStyles";

export default function HomeContent() {
  return (
    <HomeContentSection
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { y: 92, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
      }}
    >
      <Container>
        <div className="content">
          <span>
            Great stories don’t just happen—
            <br /> they need to be uncovered. And we dig deep to discover the
            great stories that lie just below the surface. Dirt under our
            fingernails and all.
          </span>
        </div>
      </Container>
    </HomeContentSection>
  );
}
