import MoviesGrid from "./MoviesGrid";
import styles from "./App.module.css"
import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

 function App() {
  return (
    <div>
      <header>
      <h1 className={animate__animated}>An animated element</h1>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid/>
      </main>
    </div>
  );
}

export default App;
