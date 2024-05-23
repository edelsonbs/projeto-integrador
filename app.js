const express = require("express");
const app = express();
const environments = require("./src/config/environments");
const rotas = require("./src/routes/rotas");

app.use(express.json());

// Rotas da API
app.use("/api", rotas);

// app.use('/api/produtos', rotasProduto);
// app.use('/api/supermercados', rotasSupermercado);

const PORTA = environments.PORTA;

(async () => {
  try {
    app.get("/", (req, res) => {
      res.send(`Aqui deu certo Carai`);
    });

    app.listen(PORTA, () => {
      console.log(`Servidor rodando em http://localhost:${PORTA}`);
    });
  } catch (error) {
    console.error("Erro ao sincronizar o banco de dados:", error);
  }
})();
