import { test, expect, request } from '@playwright/test';




/*metodo get con post que crea usuario */
test('CONSULTAR USUARIO ACTUALIZAR',{tag : '@USOPUT'}, async ({ request }) => {

  /*es un test que crea primero el usuario */

  const bodyCrearUsuario = { /*body del usuario creado*/
  id: 201201201,
  username: "200",
  firstName: "TIMOTEO",
  lastName: "TIMOTEO",
  email: "eduflores@gmail.com",
  password: "EduFlores",
  phone: "0958951059",
  userStatus: 0
}

 /*crea el usuario */
  const CrearUsuario = await request.post('https://petstore.swagger.io/v2/user', {
    data: bodyCrearUsuario,
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await CrearUsuario.json()))

  /*creo una constante para obtener el id en base a la variable anterior */
  /*obtengo el json del response*/
  const CrearUsuarioJson = await CrearUsuario.json()  
  console.log("code:" ,CrearUsuarioJson.code)
  /*el response no retorna id solo code por lo que para ejemplo vamos a jugar con el code  */
  const obtenerCode = CrearUsuarioJson.code

   /*y aqui ponemos el obneter code */

  const listarUsuario = await request.get('https://petstore.swagger.io/v2/user/'+obtenerCode, {
    ignoreHTTPSErrors: true 
  })

  console.log(JSON.stringify(await listarUsuario.json())) 
  const var1 = await listarUsuario.json()


})






/*Metodo Put actualizo*/
test('ACTUALIZAR USUARIO POR ID',{tag :'@USOPUT'}, async ({ request }) => {
  const updatauSERRequest = {
  id: 201201201,
  username: "Eduardo",
  firstName: "Meneses",
  lastName: "Meneses",
  email: "eduflores@gmail.com",
  password: "EduFlores",
  phone: "0958951059",
  userStatus: 0
}

  const listarUsuario = await request.get('https://petstore.swagger.io/v2/user/200', {
    ignoreHTTPSErrors: true 
  })
  const consultaUsuario = await listarUsuario.json()
  console.log("id:" ,consultaUsuario.id)
  const obtenerID = consultaUsuario.id

  const usuarioUpdate = await request.put('https://petstore.swagger.io/v2/user/'+obtenerID, {
    data: updatauSERRequest,
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await usuarioUpdate.json())) /*IMPRIMO UPDATE */
    
     /*CONSULTO POSTERIOR A REALIZAR EL UPDATE SUELE DEMORAR*/

    const listarUsuario2 = await request.get('https://petstore.swagger.io/v2/user/Eduardo', {
    ignoreHTTPSErrors: true 
   })

   console.log(JSON.stringify(await listarUsuario2.json())) 

})



/*metodo get */
test('CONSULTAR USUARIO ACTUALIZADO',{tag : '@USOPUT'}, async ({ request }) => {
  const listarMascota = await request.get('https://petstore.swagger.io/v2/user/Eduardo', {
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await listarMascota.json())) 
  const var1 = await listarMascota.json()
})