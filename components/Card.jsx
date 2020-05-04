import styled from "@emotion/styled";

export default function Card({ movie }) {
  const { API_URL } = process.env;

  return (
    <CardStyled>
      <div className="poster">
        <img src={API_URL + movie.poster.url} alt="" />
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        <div>{movie.description}</div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${(props) => (props.isDark ? "#000000" : "#efefef")};
  padding: 20px;
`;
