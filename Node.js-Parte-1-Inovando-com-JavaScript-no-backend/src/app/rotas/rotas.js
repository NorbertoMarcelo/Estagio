const LivroDao = require("../infra/livro-dao");
const db = require("../../config/database");

module.exports = (app) => {
  app.get("/", function (req, res) {
    res.send(
      `
        <html>
          <head>
            <meta charset="utf-8"/>
          </head>
          <body>
            <h1>Olá Node!!</h1>
          </body>
        </html>
      `
    );
  });

  app.get("/livros", function (req, res) {
    const livroDao = new LivroDao(db);
    livroDao
      .lista()
      .then((livros) =>
        res.marko(require("../views/livros/lista/lista.marko"), {
          livros: livros,
        })
      )
      .catch((erro) => console.log(erro));
  });
};