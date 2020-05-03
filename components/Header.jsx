import styled from "@emotion/styled";

export default function Header() {
  return <HeaderStyled>Header</HeaderStyled>;
}

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.primary};
`;
