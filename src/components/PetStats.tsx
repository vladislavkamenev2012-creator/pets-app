import { useState } from "react";

interface Props {
  name: string;
}

function PetStats({ name }: Props) {
  const [hunger, setHunger] = useState<number>(50);
  const [mood, setMood] = useState<number>(50);

  const clamp = (value: number) => Math.max(0, Math.min(100, value));

  return (
    <div className="card">
      <h3>Состояние: {name}</h3>
      <p>🍖 Сытость: {hunger}%</p>
      <p>😊 Настроение: {mood}%</p>

      <button onClick={() => setHunger(clamp(hunger + 10))}>Покормить</button>
      <button onClick={() => setMood(clamp(mood + 10))}>Поиграть</button>
      <button
        onClick={() => {
          setHunger(50);
          setMood(50);
        }}
      >
        Сбросить
      </button>
    </div>
  );
}

export default PetStats;