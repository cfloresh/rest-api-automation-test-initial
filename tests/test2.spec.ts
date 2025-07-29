import { test, expect, request } from '@playwright/test';
import { CreateNewUser } from '../util/task/createUser';

/*en esta constante vamos a definir la*/
const bodyRequest = {
  id: 20202020,
  username: "testejecucion",
  firstName: "testejecucion",
  lastName: "testejecucion",
  email: "testejecucion",
  password: "testejecucion",
  phone: "testejecucion",
  userStatus: 0
} /*aqui no es necesario que las propiedades esten en comilla*/


/*aqui la estructura basica del test*/
test('Crear una nueva mascota',{tag : '@test2_1'}, async ({ request }) => {
  /*ejecutamos el servicio con el await y capturamos la respuesta en la constante para luego imprimirla*/
  /*const respuesta = await request.post('https://petstore.swagger.io/v2/user', {
    data: bodyRequest,
    ignoreHTTPSErrors: true  // Agregado para ignorar errores de HTTPS
  })*/  // lo comento porque lo ejecuto desde createUser.ts
  const createNewUserInstance = new CreateNewUser(request);
  const newUserResponse = await createNewUserInstance.metodoInfo(bodyRequest)
  console.log(JSON.stringify(await newUserResponse.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */
   /*aqui accedo a los elementos del response */
  const var1 = await newUserResponse.json()
  console.log("code:" ,var1.code)
  console.log("type:" ,var1.type)
  console.log("message:" ,var1.message)
  /*esto es case sentitive usar tal cual como envia el response */
  /* si tuviera mas elementos del response seria elemento.elemento2 */
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