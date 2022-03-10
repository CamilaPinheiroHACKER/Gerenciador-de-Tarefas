const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "gerenciador_de_tarefas",
});


app.use(cors());
app.use(express.json());

app.post("register", (req, res) => {
    const {tarefa} = req.bory;

    let SQL = "INSERT INTO tarefas (id, tarefa, estado) VALUES (null, ?, 0)";

    db.query( SQL, [id, tarefa, estado], (err, result) => {
        console.log(err);
    });
});

app.get("/Task", (req, res) => {

    let SQL = "SELECT * from tarefas";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});