const { Router } = require("express");
const TurmasController = require("../controllers/TurmasController");

const router = Router();
router
  .get("/turmas", TurmasController.pegaTodasAsTurmas)
  .get("/turmas/:id", TurmasController.pegaTurma)
  .post("/turmas", TurmasController.criaTurma)
  .post("/turmas/:id/restaura", TurmasController.restauraTurma)
  .put("/turmas/:id", TurmasController.atualizaTurma)
  .delete("/turmas/:id", TurmasController.apagaTurma);

module.exports = router;
