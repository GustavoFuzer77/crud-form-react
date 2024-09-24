import styled, { keyframes } from "styled-components";
import colors from "../../styles/colors";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    background-color: ${colors.lightRed};	
  }  to {
    opacity: 1;
    background-color: #fff;	
    color: ${colors.textGray};
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.lightRed};
  color: white;
  animation: ${fadeIn} 0.5s ease-in;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  text-align: left;
`;

export const OopsText = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export const MessageText = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

export const Emoji = styled.span`
  font-size: 20rem;
  margin-left: 20px;
  align-self: center;
  margin-bottom: 6rem;
`;
