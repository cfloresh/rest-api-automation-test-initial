import { test, expect, request } from '@playwright/test';

/*metodo get */
test('CONSULTAR USUARIO ACTUALIZAR',{tag : '@USOPUT'}, async ({ request }) => {
  const listarUsuario = await request.get('https://petstore.swagger.io/v2/user/test4test4', {
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await listarUsuario.json())) 
  const var1 = await listarUsuario.json()
})

/*Metodo Put*/
test('ACTUALIZAR USUARIO POR ID',{tag :'@USOPUT'}, async ({ request }) => {
  const updatauSERRequest = {
  id: 10120200,
  username: "test5test5",
  firstName: "test5test5",
  lastName: "test5test5",
  email: "test5test5",
  password: "test5test5",
  phone: "test5test5",
  userStatus: 0
}

  const usuarioUpdate = await request.put('https://petstore.swagger.io/v2/user/test4test4', {
    data: updatauSERRequest,
    ignoreHTTPSErrors: true 
  })

  console.log(JSON.stringify(await usuarioUpdate.json()))

})



/*metodo get */
test('CONSULTAR USUARIO ACTUALIZADO',{tag : '@USOPUT'}, async ({ request }) => {
  const listarMascota = await request.get('https://petstore.swagger.io/v2/user/test5test5', {
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await listarMascota.json())) 
  const var1 = await listarMascota.json()
})