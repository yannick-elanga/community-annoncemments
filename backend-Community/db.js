// db.js
const mysql = require("mysql2/promise");

// Configuration de la connexion MySQL
const connection = await mysql.createConnection({
  host: "localhost:3306", // Adresse du serveur MySQL (XAMPP utilise localhost)
  user: "root", // Par défaut, XAMPP utilise 'root' comme utilisateur
  password: "", // Par défaut, pas de mot de passe dans XAMPP
  database: "community", // Remplacez par le nom de votre BD
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données:", err);
    return;
  }
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
