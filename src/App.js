import "./App.css";
import Header from "./components/Header";
import PokemonCards from "./components/PokemonCards";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <PokemonCards />
      </main>
    </div>
  );
}

export default App;
