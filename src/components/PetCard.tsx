import type { Pet } from "../data/pets";

interface Props {
  pet: Pet;
}

function PetCard({ pet }: Props) {
  return (
    <div className="card">
      <img src={pet.photo} alt={pet.name} width="250" />
      <h2>{pet.name}</h2>
      <p>Вид: {pet.type}</p>
      <p>Порода: {pet.breed}</p>
      <p>Возраст: {pet.age} лет</p>
      <p>{pet.description}</p>
    </div>
  );
}

export default PetCard;