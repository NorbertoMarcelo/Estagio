class LivroDao {
  constructor(db) {
    this._db = db;
  }

  adiciona(livro) {
    return new Promise((resolve, reject) => {
      this._db.run(
        `
          INSERT INTO LIVROS (
            titulo,
            preco,
            descricao
          ) values (?, ?, ?)
        `,
        [livro.titulo, livro.preco, livro.descricao],
        function (erro) {
          if (erro) {
            console.log(erro);
            return reject("Não foi possível listar os livros");
          }
        }
      );
    });
  }

  lista() {
    return new Promise((resolve, reject) => {
      this._db.all("SELECT * FROM livros", (erro, resultados) => {
        if (erro) return reject("Não foi possível listar os livros");
        return resolve(resultados);
      });
    });
  }
}

module.exports = LivroDao;
