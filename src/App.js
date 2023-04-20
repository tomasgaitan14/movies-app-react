import MoviesGrid from "./MoviesGrid";
import styles from "./App.module.css"
import { Footer } from "./Footer";

 function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
