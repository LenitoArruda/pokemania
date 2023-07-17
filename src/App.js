import "./App.css";
import { useState } from "react";
import Header from "./components/layouts/Header";
import PokemonCards from "./components/layouts/PokemonCards";

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
    </div>
  );
}
