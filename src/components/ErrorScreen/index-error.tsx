import {
  ErrorContainer,
  ErrorContent,
  MessageText,
  OopsText,
  TextContainer,
} from "./styled";

export function ErrorScreen() {
  return (
    <ErrorContainer>
      <ErrorContent>
        <TextContainer>
          <OopsText>Oops!</OopsText>
          <MessageText>Não conseguimos encontrar seus dados!</MessageText>
        </TextContainer>
      </ErrorContent>
    </ErrorContainer>
  );
}
