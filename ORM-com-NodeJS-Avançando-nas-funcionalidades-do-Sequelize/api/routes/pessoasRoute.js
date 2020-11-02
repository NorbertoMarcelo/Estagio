const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();
// GET
router
  .get("/pessoas", PessoaController.pegaPessoasAtivas)
  .get("/pessoas/todos", PessoaController.pegaTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoas)
  .get("/pessoas/:estudanteId/matricula", PessoaController.pegaMatriculas)
  .get(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .get(
    "/pessoas/matricula/:turmaId/confirmadas",
    PessoaController.pegaMatriculasPorTurma
  )
  .get("/pessoas/matricula/lotada", PessoaController.pegaTurmasLotadas);
// POST
router
  .post("/pessoas", PessoaController.criaPessoa)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .post("/pessoas/:estudanteId/cancela", PessoaController.cancelaPessoa);
// PUT
router
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizaMatricula
  );
// DELETE
router
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.apagaMatricula
  );

module.exports = router;
