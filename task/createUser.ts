import { APIRequest, APIRequestContext, APIResponse } from "@playwright/test";
import { test } from '@playwright/test';

export class CreateNewUser {
    private request

    /*a esta clase creo un constructor para poder llamar el endpoint*/
    constructor(request: APIRequestContext) {
        /*aqui hago referencia a la variable request que declaro arriba*/
        this.request = request
    }

    //este metodo post lo obtengo del test2.spec.ts
    public async metodoInfo(bodyRequest: any): Promise<APIResponse> {
        return await test.step(`Crear nuevo  usuario`, async () => { /*este retur que utilizo es para  */
            return await this.request.post('/v2/user', { /*OJO AQUI YA NO DECLARO EL END POINT YA QUE LO CONFIGURO EN playwright.config.ts SOLO UBICO EL PATH */
                data: bodyRequest,
                ignoreHTTPSErrors: true  // Agregado para ignorar errores de HTTPS
            })
        })

    }


}