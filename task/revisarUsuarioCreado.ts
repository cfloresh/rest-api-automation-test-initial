import { APIRequest, APIRequestContext, APIResponse, expect } from "@playwright/test";
import { bodyRequest } from "../tests/test2.spec" /*clase 31 al final se ve como puedo importar el body de otra manera */
import { test } from '@playwright/test';

export class RevisarUsuarioCreado {



    //este metodo EN DONDE HAGO LOS ASSERT PARA  test2.spec.ts
    public async metodoInfo(newUserResponse: APIResponse): Promise<void> { /*AL SER UNA ASSERCION NO RETORNA NADA */

        await test.step(`Revisar la creacion de  nuevo usuario usuario sin return`, async () => { /*aqui no se necesita el return debido a que solo devuelve assert  */
            console.log(JSON.stringify(await newUserResponse.json())) /*IMPRIMO POR CONSOLA LA RESPUESTA */
            const var1 = await newUserResponse.json()
            console.log("ID DEL BODY: ", bodyRequest.id);
            console.log("code:", var1.code)
            console.log("type:", var1.type)
            console.log("message:", var1.message)
            expect(var1.code).toBe(200)
            expect(var1.type).toBe("unknown")
            expect(var1.message).toBe("" + bodyRequest.id)

        })

    }


}