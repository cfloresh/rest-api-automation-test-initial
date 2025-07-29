import { test, expect, request } from '@playwright/test';


/*Autentificacion basica apis harcodeado usuario contraseña en base 64*/
test('Autentificacion basica codigo hardcodeado usuario y contraseña', { tag: '@USOAUTH' }, async ({ request }) => {
  const basicAuth = await request.get('http://localhost:3000/protected-basic',
    {
      headers: {
        Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=' /*aqui hardcodeo usuario y contraseña en base 64 */
      }

    })
  console.log("Response Status", basicAuth.status())/* imprimo el status*/
  console.log("Response text", await basicAuth.text()) /* imprimo la respuesta, como no es un json le envio text*/
})


/*Autentificacion basica apis incluyendo  usuario y contraseña*/
test('Autentificacion basica con credenciales', { tag: '@USOAUTH' }, async ({ request }) => {

  const credenciales = btoa('admin:password1223')/*esta funcion permite crear una cadena a base 64  es decir usuario y contraseña las transforma a base 64 */

  const basicAuth = await request.get('http://localhost:3000/protected-basic',
    {
      headers: {
        Authorization: `Basic ${credenciales}` /*aqui hardcodeo usuario y contraseña en base 64 */
      }

    })
  console.log("Response Status", basicAuth.status())/* imprimo el status*/
  console.log("Response text", await basicAuth.text()) /* imprimo la respuesta, como no es un json le envio text*/
})