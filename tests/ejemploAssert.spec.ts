import { test, expect, request } from '@playwright/test';


 /*es la verificacion del test mediante el resultado obtenido con el resultado esperado*/
 /*ASSERT */


 const bodyRequest = {
     id: 10031003,
  category: {
    id: 10031003,
    name: "DOGGIE DOGGIE"
  },
  name: "DOGGIE DOGGIE",
  photoUrls: [
    "DOGGIE DOGGIE"
  ],
  tags: [
    {
      id: 10031003,
      name: "DOGGIE DOGGIE"
    }
  ],
  status: "available"
  }
  



test('CREACION DE MASCOTA',{tag : '@USODEXPECT'}, async ({ request }) => {
  const crearMascota = await request.post('https://petstore.swagger.io/v2/pet', {
    data: bodyRequest,
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await crearMascota.json())) 
  const respuestaJsonResponse = await crearMascota.json() /*aqui obtengo la respuesta la utilizo para luego hacer otros expect */

  /*obtener el codigo de respuesta  compara los valores con el tobe (valor que se obtiene vs expectativa)*/
  expect(crearMascota.status()).toBe(200)
  expect(respuestaJsonResponse.status).toBe("available") /*del response del servicio obtengo el campo status el cual debe ser available, si es diferente no cabe*/
  expect(respuestaJsonResponse.category.name).toBe("DOGGIE DOGGIE") /*del response del servicio obtengo el campo que se encuentra dentro de categoria , name si este es igual a doggie doggie la prueba es ok*/

  /*otro tipo de asserciones que nos ofrece playwright */
  expect(respuestaJsonResponse.id).toBeTruthy()  /*si llega false, 0, '', null, undefined or NaN el test falla es decir este campo no debe venir vacio */
  //expect(respuestaJsonResponse.id).toBeFalsy() /* es lo contratio que toBeTruthy, en este caso va fallar */
  expect(respuestaJsonResponse.status).toContain("avail")/*valida que contenga cierta parte, si esa parte que valida existe en la respuesta el test es exitoso */




})