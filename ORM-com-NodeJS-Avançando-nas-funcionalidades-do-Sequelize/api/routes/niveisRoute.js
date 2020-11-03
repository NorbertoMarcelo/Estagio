const { Router } = require("express");
const NiveisController = require("../controllers/NiveisController");

const router = Router();

router
  .get("/niveis", NiveisController.pegaTodosOsNiveis)
  .get("/niveis/:id", NiveisController.pegaNivel)
  .post("/niveis", NiveisController.criaNivel)
  .post("/niveis/:id/restaura", NiveisController.restauraNivel)
  .put("/niveis/:id", NiveisController.atualizaNivel)
  .delete("/niveis/:id", NiveisController.apagaNivel);

module.exports = router;
