import { test, expect, request } from '@playwright/test';


/*metodo get */
test('LISTAR MASCOTAS BY STATUS 1',{tag : '@USODEGET'}, async ({ request }) => {
  const listarMascotasAvailable = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available', {
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await listarMascotasAvailable.json())) 

  console.log("_______________aqui cumina avaliable____________") 

  const listarMascotaspending = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=pending', {
    ignoreHTTPSErrors: true 
  })
  console.log(JSON.stringify(await listarMascotaspending.json())) 

})