import axios from "axios";

export default function Home({ movies }) {
  return (
    <div className="container">
      {movies.map((movie) => {
        return <div key={movie.id}>{movie.title}</div>;
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

