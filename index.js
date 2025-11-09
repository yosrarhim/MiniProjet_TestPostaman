const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Sert les fichiers statiques depuis le dossier 'public'

// Route pour servir index.html à la racine
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


// Endpoint GET pour tester
app.get('/api/test', (req, res) => {
  res.json({ message: 'Test API successful!' });
});

// Endpoint POST pour tester
app.post('/api/data', (req, res) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});