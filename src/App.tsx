import { useState } from "react";
import { pets } from "./data/pets";
import PetCard from "./components/PetCard";
import PetStats from "./components/PetStats";
import "./App.css";

function App() {
  const [selectedId, setSelectedId] = useState<number>(pets[0].id);

  const pet = pets.find((p) => p.id === selectedId)!;

  return (
    <div className="app">
      <h1>Домашний питомец</h1>

      <div className="menu">
        {pets.map((p) => (
          <button
            key={p.id}
            className={p.id === selectedId ? "active" : ""}
            onClick={() => setSelectedId(p.id)}
          >
            {p.name}
          </button>
        ))}
      </div>

      <PetCard pet={pet} />
      <PetStats key={pet.id} name={pet.name} />
    </div>
  );
}

export default App;