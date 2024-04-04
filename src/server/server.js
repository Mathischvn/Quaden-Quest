import express from "express";
import {resEntite, querySection} from "./connection.js"
import ViteExpress from "vite-express";

const app = express();

app.get('/api/entity/:libelle', (req, res) => {
  res.send(resEntite);
})

app.get('/api/section/:id', async (req, res) => {
  //res.send(resSection);
  const id = req.params.id;
  const response  = await querySection(id);
  res.send(response);

})


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);