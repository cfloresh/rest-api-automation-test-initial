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
test('Crear una nueva mascota',{tag : '@test2'}, async ({ request }) => {
  /*ejecutamos el servicio con el await y capturamos la respuesta en la constante para luego imprimirla*/
  const respuesta = await request.post('https://petstore.swagger.io/v2/user', {
    data: bodyRequest,
    ignoreHTTPSErrors: true  // Agregado para ignorar errores de HTTPS

  })
  console.log(JSON.stringify(await respuesta.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */
   /*aqui accedo a los elementos del response */
  const var1 = await respuesta.json()
  console.log("code:" ,var1.code)
  console.log("type:" ,var1.type)
  console.log("message:" ,var1.message)
  /*esto es case sentitive usar tal cual como envia el response */
  /* si tuviera mas elementos del response seria elemento.elemento2 */
  //console.log("message:" ,var1.data1.message)
})




/*metodo get */
test('Listar inventario de tienda',{tag : '@get'}, async ({ request }) => {
  /*ejecutamos el servicio con el await y capturamos la respuesta en la constante para luego imprimirla*/
  const listarInventario = await request.get('https://petstore.swagger.io/v2/store/inventory', {
    data: bodyRequest,
    ignoreHTTPSErrors: true 

  })
  console.log(JSON.stringify(await listarInventario.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */
  const var1 = await listarInventario.json()

})