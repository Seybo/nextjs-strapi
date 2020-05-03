import styled from "@emotion/styled";

export default function Home() {
  return (
    <div className="container">
      <SomeText>Front Page</SomeText>
    </div>
  );
}

const SomeText = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;
