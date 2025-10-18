# CI GitHub Actions Demo

Este es un proyecto simple de Node.js para demostrar integración continua (CI) con **GitHub Actions**.

## Ejecución local

```bash
npm install
node index.js
```
Luego visita [http://localhost:3000/api/hello](http://localhost:3000/api/hello)

## Pruebas

```bash
npm test
```

## CI

El workflow en `.github/workflows/ci.yml` ejecuta las pruebas automáticamente en cada `push` o `pull request` al branch `main`.
