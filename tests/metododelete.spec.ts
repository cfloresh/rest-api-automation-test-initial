import { test, expect, request } from '@playwright/test';


/*metodo delete */
test('realizar a eliminación del recurso',{tag : '@USODELETE'}, async ({ request }) => {
  const listarusuario = await request.get('https://petstore.swagger.io/v2/user/TEST4', {
    ignoreHTTPSErrors: true 
  })

  console.log(JSON.stringify(await listarusuario.json())) 
  const var1 = await listarusuario.json()
  const obusername = var1.username
  console.log("username:",var1.username)

  const eliminarUser= await request.delete('https://petstore.swagger.io/v2/user/'+obusername, {
    ignoreHTTPSErrors: true 
  })

  console.log("Status: ", eliminarUser.status())
  

})