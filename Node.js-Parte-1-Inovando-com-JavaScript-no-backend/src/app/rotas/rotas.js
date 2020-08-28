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

  app.get("/js", function (req, res) {
    res.send(
      `
        <html>
          <head>
            <meta charset="utf-8"/>
          </head>
          <body>
            <h1>Olá Javascript</h1>
          </body>
        </html>
      `
    );
  });
};
