# DEMO BANCO INTERNACION service

## Installation

```
Copiar el package-lock de recurso api
npm install
Verificar que no existe vulnerabilidades y no pida actualizacion

Verificar que se instale la dependencia playwrigth
npm install @playwright/test --save-dev

```

## create the project

```
Crear carpeta con el nombre del repositorio y ejecutar
npm init playwright@latest
Need to install the following packages:
create-playwright@1.17.136
Ok to proceed? (y) y
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · true
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · false


```

## Ejecutar el test por consola
npx playwright test
## Ejecutar el test por consola y que dispongan tags
npx playwright test --grep @test1

```


