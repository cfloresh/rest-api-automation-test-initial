import { test, expect, request } from '@playwright/test';

/*en esta constante vamos a definir la*/
const bodyRequest = {
  id: 20102,
  username: "tesq",
  firstName: "tesq",
  lastName: "tesq",
  email: "tesq",
  password: "tesq",
  phone: "tesq",
  userStatus: 0
} /*aqui no es necesario que las propiedades esten en comilla*/


/*aqui la estructura basica del test*/
test('Crear una nueva mascota', async ({ request }) => {
  /*ejecutamos el servicio con el await y capturamos la respuesta en la constante para luego imprimirla*/
  const respuesta = await request.post('https://petstore.swagger.io/v2/user', {
    data: bodyRequest,
    ignoreHTTPSErrors: true  // Agregado para ignorar errores de HTTPS

  })

  console.log(JSON.stringify(await respuesta.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */


})

test('Crear una nueva mascota 2 con tag',{tag : '@test1'} , async ({ request }) => {
  /*ejecutamos el servicio con el await y capturamos la respuesta en la constante para luego imprimirla*/
  const respuesta = await request.post('https://petstore.swagger.io/v2/user', {
    data: bodyRequest,
    ignoreHTTPSErrors: true  // Agregado para ignorar errores de HTTPS

  })

  console.log(JSON.stringify(await respuesta.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */


})