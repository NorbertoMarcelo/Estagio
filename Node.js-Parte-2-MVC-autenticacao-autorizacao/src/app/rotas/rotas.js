const LivroDao = require("../infra/livro-dao");
const db = require("../../config/database");
const { body, validationResult } = require("express-validator");

module.exports = (app) => {
  app.get("/", function (req, resp) {
    resp.marko(require("../views/base/home/home.marko"));
  });

  app.get("/livros", function (req, resp) {
    const livroDao = new LivroDao(db);
    livroDao
      .lista()
      .then((livros) =>
        resp.marko(require("../views/livros/lista/lista.marko"), {
          livros: livros,
        })
      )
      .catch((erro) => console.log(erro));
  });

  app.get("/livros/form", function (req, resp) {
    resp.marko(require("../views/livros/form/form.marko"), { livro: {} });
  });

  app.get("/livros/form/:id", function (req, resp) {
    const id = req.params.id;
    const livroDao = new LivroDao(db);

    livroDao
      .buscaPorId(id)
      .then((livro) =>
        resp.marko(require("../views/livros/form/form.marko"), { livro: livro })
      )
      .catch((erro) => console.log(erro));
  });

  app.post(
    "/livros",
    [
      body("litulo")
        .isLength({ min: 5 })
        .withMessage("O titulo deve ter no mínimo 5 caracteres!"),
      body("preco")
        .isCurrency()
        .withMessage("O preço precisa ter um valor n=monetário válido!"),
    ],
    function (req, resp) {
      console.log(req.body);
      const livroDao = new LivroDao(db);

      const erros = validationResult(req);

      if (!erros.isEmpty()) {
        return resp.marko(require("../views/livros/form/form.marko"), {
          livro: {},
          errosValidacao: erros.array(),
        });
      }

      livroDao
        .adiciona(req.body)
        .then(resp.redirect("/livros"))
        .catch((erro) => console.log(erro));
    }
  );

  app.put("/livros", function (req, resp) {
    console.log(req.body);
    const livroDao = new LivroDao(db);

    livroDao
      .atualiza(req.body)
      .then(resp.redirect("/livros"))
      .catch((erro) => console.log(erro));
  });

  app.delete("/livros/:id", function (req, resp) {
    const id = req.params.id;

    const livroDao = new LivroDao(db);
    livroDao
      .remove(id)
      .then(() => resp.status(200).end())
      .catch((erro) => console.log(erro));
  });
};