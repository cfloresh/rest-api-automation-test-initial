import { test, expect, request } from '@playwright/test';


/*Autentificacion con token*/
test('Autentificacion con token', { tag: '@USOAUTHTOKEN' }, async ({ request }) => {
  
  /*genero el token*/
  const tokenAuth = await request.post('http://localhost:3000/login',
    {
      data: {
        "username": "automation"
      }
    })

    /*obtengo el json del response*/
    const jsonResponse = await tokenAuth.json()
    const token = jsonResponse.data.accessToken
    console.log ('token obtenido:',token)


   /*aqui ejecuto la api que requiere del token anterior*/
    const protectedToken = await request.get('http://localhost:3000/protected-bearer',
    {
       headers: {
        Authorization: `Bearer ${token}` /*aqui tomo el token generado para utilizarlo en la autorizacion */
      }

    })
    /*aqui verifico si ingreso el token imprimiento*/
     console.log(JSON.stringify(await protectedToken.text()))

     /*Envio las aserciones por estatus y por respuesta*/
     expect(await protectedToken.text()).toBe('Hello automation, you have accessed a protected endpoint!')
     expect(await protectedToken.status()).toBe(200)


})
