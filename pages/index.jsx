import axios from "axios";
import Card from "components/Card";

export default function Home({ movies }) {
  return (
    <div className="container">
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
}

export async function getStaticProps(_context) {
  try {
    const res = await axios.get(`${process.env.API_URL}/movies`);

    return {
      props: { movies: res.data }, // will be passed to the page component as props
    };
  } catch (error) {
    console.error(error);
  }
}

