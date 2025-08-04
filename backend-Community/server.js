const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const connection = require("./db");
/*
const userData = [
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "John Doe",
    email: "john.doe@example.com",
    password: "1234",
    memberSince: "12/03/2023",
    location: "Yaoundé, Cameroun",
    phone: "+237 671 25 67 87",
    bio: "Passionné par les bonnes affaires et les échanges.",
    profilePicture: "/assets/IMG17.jpg",
    ads: [
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "Vélo de course",
        price: "250 000 FCFA",
        status: "Active",
        imageUrl: "/assets/IMG7.jpg",
        category: "Véhicules",
      }, // Added category
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "Ordinateur portable HP",
        price: "350 000 FCFA",
        status: "Active",
        imageUrl: "/assets/IMG16.jpg",
        category: "Électronique",
      }, // Added category
    ],
    messages: [
      // Example messages
      {
        id: Math.random().toString(36).substring(2, 9),
        sender: "Alice Dupont",
        subject: "Question sur Vélo de course",
        content: "Bonjour, le vélo est-il toujours disponible ?",
        timestamp: "2025-07-15T10:00:00Z",
      },
      {
        id: Math.random().toString(36).substring(2, 9),
        sender: "Bob Martin",
        subject: "Offre pour Ordinateur portable HP",
        content: "Je vous propose 300 000 FCFA pour l'ordinateur.",
        timestamp: "2025-07-14T15:30:00Z",
      },
    ],
    payments: [
      // Example payments/transactions
      {
        id: Math.random().toString(36).substring(2, 9),
        item: "Vélo de course",
        amount: "250 000 FCFA",
        date: "2025-07-10",
        type: "Reçu",
      },
      {
        id: Math.random().toString(36).substring(2, 9),
        item: "Frais de publication",
        amount: "5 000 FCFA",
        date: "2025-07-01",
        type: "Payé",
      },
    ],
    // REMOVED: categories property from user object
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "elanga yannick",
    email: "elangayannick29@gmail.com",
    password: "331999",
    memberSince: "12/03/2023",
    location: "Yaoundé, Cameroun",
    phone: "+237 671 25 67 87",
    bio: "Passionné par les bonnes affaires et les échanges.",
    profilePicture: "/assets/IMG21.jpg",
    ads: [
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "Vélo de course",
        price: "250 000 FCFA",
        status: "Active",
        imageUrl: "/assets/IMG7.jpg",
        category: "Véhicules",
      }, // Added category
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "souchi",
        price: "3 000 FCFA",
        status: "Active",
        imageUrl: "/assets/pp.jpg",
        category: "Nourriture",
      }, // Added category
    ],
    messages: [],
    payments: [],
    // REMOVED: categories property from user object
  },
  {
    id: Math.random().toString(36).substring(2, 9),
    name: "Alice Mbarga",
    email: "alice.mbarga@example.com",
    password: "abcd",
    memberSince: "05/06/2024",
    location: "Douala, Cameroun",
    phone: "+237 690 837 645",
    bio: "Je vends des articles électroniques d'occasion.",
    profilePicture: "/assets/IMG16.jpg",
    ads: [
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "Imprimante Canon",
        price: "80 000 FCFA",
        status: "Active",
        imageUrl: "/assets/IMG16.JPG",
        category: "Électronique",
      }, // Added category
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "Smartwatch",
        price: "60 000 FCFA",
        status: "Active",
        imageUrl: "/assets/IMG7.jpg",
        category: "Électronique",
      }, // Added category
    ],
    messages: [],
    payments: [],
    // REMOVED: categories property from user object
  },
];*/

let userData;
(async () => {
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users`");
    userData = results;
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
})();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers choke on 204
};
app.use(cors());

// Use express.static middleware to serve static files from the "public" folder
app.use("/assets", express.static("assets"));

app.get("/users", (req, res) => {
  res.json(userData);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
