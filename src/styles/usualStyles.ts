import styled from "styled-components";

// cria 1 estilo para o section do form sempre quando for usar, vai manter esse padrão
// não deixei settado direto no componente, para deixar desacoplado quando precisar trocar é so criar um novo "adapter"
export const FormSection = styled.section`
  width: 34rem;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 1rem #000;
  height: 36rem;
  position: fixed;
  inset: 0;

  .header-form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #000;

    svg {
      cursor: pointer;

      &:hover {
        color: #f00;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f9;
`;

export const Section = styled.section`
  background-color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 120rem;
  padding: 2rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
  color: #2c2c2c;

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  min-height: 35rem;
  height: 40rem;
`;
