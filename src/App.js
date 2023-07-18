import { useState } from "react";

//CSS
import "./App.css";

//Componentes
import Header from "./components/layouts/Header";
import Footer from "./components/inputs/Footer";
import PokemonCards from "./components/layouts/PokemonCards";

//Recebe os dados digitados pelo usuário no Header->Search e envia para o PokemonCards
export default function App() {
  const [search, setSearch] = useState("");
  const headerToApp = (childdata) => {
    setSearch(childdata);
  };

  return (
    <div className="app">
      <Header headerToApp={headerToApp} />
      <main>
        <PokemonCards searchContent={search} />
      </main>
      <Footer />
    </div>
  );
}
