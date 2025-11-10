import {request} from '@playwright/test'
export class APIUtils{
     private apicontxt: any
     private apiresponse: any

    constructor(apiContxt:any){
       this.apicontxt = apiContxt;
    }

    async postAPICall(endpoint:string, payload:any, headers?:any,token?:string){
         //let apicontxt= await request.newContext();
         this.apiresponse= await this.apicontxt.post(endpoint,{
            data:payload
        })
        console.log(this.apiresponse)
        return this.apiresponse;
    }

}