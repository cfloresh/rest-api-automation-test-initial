import { test, expect, request } from '@playwright/test';
import { CreateNewUser } from '../task/createUser'
import { RevisarUsuarioCreado } from '../task/revisarUsuarioCreado';

/*en esta constante vamos a definir la*/
export const bodyRequest = {
  id: 21212121,
  username: "testejecucion",
  firstName: "testejecucion",
  lastName: "testejecucion",
  email: "testejecucion",
  password: "testejecucion",
  phone: "testejecucion",
  userStatus: 0
} /*aqui no es necesario que las propiedades esten en comilla*/


/*aqui la estructura basica del test*/
test('Crear una nueva mascota', { tag: '@test2_1' }, async ({ request }) => {
  /*ejecutamos el servicio con el await y capturamos la respuesta en la constante para luego imprimirla*/
  /*const respuesta = await request.post('https://petstore.swagger.io/v2/user', {
    data: bodyRequest,
    ignoreHTTPSErrors: true  // Agregado para ignorar errores de HTTPS
  })*/  // lo comento porque lo ejecuto desde createUser.ts

  /*DESDE LA LINEA 26 A LA 27  REEMPLAZA EL CODIGO DE ARRIBA PARA QUE SE EJECUTE EL SERVICIO EN  createUser.ts */
  const createNewUserInstance = new CreateNewUser(request);/*creamos una mascora que se ejecuta el servicio en createUser.ts */
  const newUserResponse = await createNewUserInstance.metodoInfo(bodyRequest) 
  console.log(JSON.stringify(await newUserResponse.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */
  /*aqui accedo a los elementos del response  y validaciones vamos a mandar a otro metodo que esta en otra clase*/
  const revisarNuevoUsuarioInstance = new RevisarUsuarioCreado(); /*aqui verificamos que el usuario se haya creado de manera satisfactoria con sus respectivas validaciones */
  await revisarNuevoUsuarioInstance.metodoInfo(newUserResponse)
})


test('Test GET request to servlet', async () => {
  const context = await request.newContext();
  const response = await context.get('http://yourserver.com/yourServletPath');
  expect(response.status()).toBe(200);
  console.log(JSON.stringify(await response.text()))
});




/*metodo get */
test('Listar inventario de tienda', { tag: '@get' }, async ({ request }) => {
  /*ejecutamos el servicio con el await y capturamos la respuesta en la constante para luego imprimirla*/
  const listarInventario = await request.get('https://petstore.swagger.io/v2/store/inventory', {
    data: bodyRequest,
    ignoreHTTPSErrors: true

  })
  console.log(JSON.stringify(await listarInventario.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */
  const var1 = await listarInventario.json()

})