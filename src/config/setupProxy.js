const {proxy} = require("http-proxy-middleware");

module.exports = function(app) {

  app.use(
    proxy("/rest/autor/materia", {
      target: "http://localhost:8000",
      changeOrigin: true
    }),
  );

  app.use(
    proxy("/rest/situacoes/materias", {
        target: "http://localhost:8000",
        changeOrigin: true
      }),
  );
  app.use(
    proxy("/rest/materias/ano", {
        target: "http://localhost:8000",
        changeOrigin: true
      })
  );
  
};