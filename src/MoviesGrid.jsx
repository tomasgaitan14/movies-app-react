import { MovieCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MovieGrid.module.css";


function MoviesGrid(){
    return (
        <ul className={styles.movieGrid} >
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </ul>
    );
}

export default MoviesGrid;