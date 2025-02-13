const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173', // URL de votre frontend Vite
    methods: ['GET', 'POST'],
  },
});

// Route de test
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Gestion des connexions Socket.IO
io.on('connection', (socket) => {
  console.log("Un utilisateur s'est connecté");

  // Écoute des messages
  socket.on('chat message', (msg) => {
    console.log('message reçu:', msg);
    // Diffusion du message à tous les clients connectés
    io.emit('chat message', msg);
  });

  // Gestion de la déconnexion
  socket.on('disconnect', () => {
    console.log("Un utilisateur s'est déconnecté");
  });
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
