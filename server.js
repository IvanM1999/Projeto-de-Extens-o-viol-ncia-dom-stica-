const express = require('express');
const path = require('path');
const app = express();

// Porta padrão ou definida pelo ambiente
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (CSS, imagens, JS)
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});