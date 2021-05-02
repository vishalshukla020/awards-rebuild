import styled from "styled-components";

export const FooterSection = styled.div`
  height: 10vh;
  width: 100%;
  margin-top: 100px;
  padding-left: 20px;

  @media (max-width: 425px) {
    padding-left: 10px;
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
