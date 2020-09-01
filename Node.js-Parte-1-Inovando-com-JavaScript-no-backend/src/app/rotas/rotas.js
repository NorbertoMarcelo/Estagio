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
            <h1>Olá Node!</h1>
          </body>
        </html>
      `
    );
  });

  app.get("/livros", function (req, res) {
    db.all("SELECT * FROM livros", function (erro, resultados) {
      res.marko(require("../views/livros/lista/lista.marko"), {
        livros: resultados,
      });
    });
  });
};
