// src/usersData.js
import IMG17 from "/assets/IMG17.jpg";
import IMG16 from "/assets/IMG16.jpg";

export const initialUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "omjohn.doe@examplec.",
    password: "123456", // mot de passe défini ici
    memberSince: "12/03/2023",
    location: "Yaoundé, Cameroun",
    phone: "+237 671 25 67 87",
    bio: "Passionné par les bonnes affaires et les échanges.",
    profilePicture: IMG17,
    ads: [],
  },
  {
    id: "2",
    name: "Alice Mbarga",
    email: "alice.mbarga@example.com",
    password: "password123", // mot de passe défini ici
    memberSince: "05/06/2024",
    location: "Douala, Cameroun",
    phone: "+237 69 08 37 64 57",
    bio: "Je vends des articles électroniques d'occasion.",
    profilePicture: IMG16,
    ads: [],
  },
];
