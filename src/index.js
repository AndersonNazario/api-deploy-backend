require('dotenv').config()
const express = require('express');
const knex = require('./conexao')
const cors = require("cors")

const app = express();

// app.use(cors({
//     origin: ['https://cubos.academy/', 'https://google.com']
// }))

app.use(cors())
app.use(express.json());


app.get('/teste', async (req, res) => {
    const teste = "('Api esta ok!')"
    return res.status(200).json(teste)
})

app.get("/carros", async (req, res) => {
    try {
        const carros = await knex('carros');
        return res.status(200).json(carros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro do servidor" })
    }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`)
})