// db.js
/*const mysql = require("mysql2/promise");

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

module.exports = connection;*/
const mysql = require("mysql2/promise");

// Configuration du pool de connexions (meilleure pratique)
const pool = mysql.createPool({
  host: "localhost",
  port: 3306, // Le port séparé de l'hôte
  user: "root",
  password: "",
  database: "com",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test de connexion automatique
pool
  .getConnection()
  .then((connection) => {
    console.log("Connecté à la base de données MySQL !");
    connection.release(); // Libère la connexion immédiatement
  })
  .catch((err) => {
    console.error("Erreur de connexion à la base de données:", err);
  });

module.exports = pool;
