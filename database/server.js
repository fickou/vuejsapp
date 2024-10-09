const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Ouvrir une base de données SQLite
let db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Créer une table si elle n'existe pas
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nom TEXT,
  prenom TEXT,
  email TEXT,
  password TEXT
)`);

// Route pour ajouter un utilisateur
app.post('/signup', (req, res) => {
  const { nom, prenom, email, password } = req.body;
  const sql = 'INSERT INTO users (nom, prenom, email, password) VALUES (?, ?, ?, ?)';
  db.run(sql, [nom, prenom, email, password], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ id: this.lastID, nom, prenom, email, password });
  });
});

// Route pour récupérer tous les utilisateurs
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.json(rows);
    });
  });

// Route pour supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.run(sql, id, function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Utilisateur avec l'ID ${id} supprimé` });
  });
});

// Route pour vérifier les informations de connexion
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.get(sql, [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.json({ message: 'Connexion réussie', user: row });
    } else {
      res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
