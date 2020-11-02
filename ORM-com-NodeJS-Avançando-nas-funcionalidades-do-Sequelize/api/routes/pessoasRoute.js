const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

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

router
  .post("/pessoas", PessoaController.criaPessoa)
  .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa);

router
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .put(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.atualizaMatricula
  );

router
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .delete(
    "/pessoas/:estudanteId/matricula/:matriculaId",
    PessoaController.apagaMatricula
  );

module.exports = router;
