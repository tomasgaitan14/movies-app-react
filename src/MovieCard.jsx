import styles from "./MovieCard.module.css";

export function MovieCard ({movie}) {
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <img 
                width={230}
                height={345} 
                className={styles.movieImage} 
                src={imageURL} 
                alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <span>
                <b>Language: </b>{movie.original_language}
            </span>
            <p>
                <b>Valoration: </b>{movie.vote_average}
            </p>
        </li>
    );
}