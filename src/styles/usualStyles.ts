import styled from "styled-components";
import colors from "./colors";
import { breakPoints } from "./breakPoints";

// cria 1 estilo para o section do form sempre quando for usar, vai manter esse padrão
// não deixei settado direto no componente, para deixar desacoplado quando precisar trocar é so criar um novo "adapter"
export const FormSection = styled.section`
  width: 34rem;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  max-height: 36rem;
  overflow-y: auto;
  position: relative;

  .header-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;

    display: "flex";
    justify-content: "space-between";
    align-items: "center";

    svg {
      cursor: pointer;

      &:hover {
        color: #f00;
      }
    }
  }

  @media screen and (max-width: ${breakPoints.largeMobile}px) {
    width: 90svw;
    height: 100svh;
  }
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightWhite};
`;

export const Section = styled.section`
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 120rem;
  padding: 2rem;
  margin: 0 auto;

  @media screen and (max-wdiht: ${breakPoints.largeMobile}px) {
    padding: 0rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.mediumWhite};
  color: ${colors.textGray};

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.textGray};
    text-align: center;
  }

  @media screen and (max-width: ${breakPoints.largeMobile}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  min-height: 35rem;
  height: 40rem;
`;
