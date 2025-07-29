import { APIRequest, APIRequestContext, APIResponse } from "@playwright/test";

export class CreateNewUser{
    private request 

    /*a esta clase creo un constructor para poder llamar el endpoint*/
    constructor(request: APIRequestContext){
        /*aqui hago referencia a la variable request que declaro arriba*/
        this.request = request  
    }

    //este metodo post lo obtengo del test2.spec.ts
    public async metodoInfo(bodyRequest:any): Promise<APIResponse>{
        //este 
        return await this.request.post('https://petstore.swagger.io/v2/user', {
           data: bodyRequest,
           ignoreHTTPSErrors: true  // Agregado para ignorar errores de HTTPS

        })
        
    }


}