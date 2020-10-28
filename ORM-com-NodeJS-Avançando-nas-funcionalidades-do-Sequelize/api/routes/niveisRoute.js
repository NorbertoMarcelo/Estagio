const { Router } = require("express");
const NiveisController = require("../controllers/NiveisController");

const router = Router();

router
  .get("/niveis", NiveisController.pegaTodosOsNiveis)
  .get("/niveis/:id", NiveisController.pegaUmNivel)
  .post("/niveis", NiveisController.criaNivel)
  .put("/niveis/:id", NiveisController.atualizaNivel)
  .delete("/niveis/:id", NiveisController.apagaNivel);

module.exports = router;
