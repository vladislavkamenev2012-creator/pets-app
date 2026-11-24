export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: number;
  photo: string;
  description: string;
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Мурка",
    type: "Кошка",
    breed: "Британская короткошёрстная",
    age: 3,
    photo: "https://d2zp5xs5cp8zlg.cloudfront.net/image-79322-800.jpg",
    description: "Спокойная и ласковая, любит спать на подоконнике.",
  },
  {
    id: 2,
    name: "Рекс",
    type: "Собака",
    breed: "Немецкая овчарка",
    age: 5,
    photo: "https://placedog.net/400/300?id=1",
    description: "Активный и умный, обожает играть с мячом.",
  },
  {
    id: 3,
    name: "Хома",
    type: "Хомяк",
    breed: "Джунгарский",
    age: 1,
    photo: "https://as2.ftcdn.net/v2/jpg/01/91/10/51/1000_F_191105164_ndV6qxRtey7qmRVWpqDbcQ0501b7LeCz.jpg",
    description: "Бегает в колесе по ночам и запасает еду.",
  },
];