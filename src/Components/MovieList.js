import Movie from "./Movie";
import myMovies from "../movies.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Container from "react-bootstrap/Container";


function MovieList() {
  const [movies, setMovies] = useState(myMovies);

  const delMovie = (idToBeRemoved) => {
    console.log("Delete button is clicked at " + idToBeRemoved);
    const leftover = movies.filter((x) => {
      return x.id === idToBeRemoved ? false : true;
    });
    setMovies(leftover);
  };

  return (
    <Container fluid className="mt-4 ms-4">
      <div className="movie-list">
        <Row xs={1} sm={2} lg={3}>
          {movies.map((movie) => (
            <Col md={5} lg={5}>
              <Movie
                key={movie.id}
                delHandler={delMovie} 
                title={movie.Title}
                director={movie.Director}
                stars={movie.Stars}
                id={movie.id}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
  }

export default MovieList;