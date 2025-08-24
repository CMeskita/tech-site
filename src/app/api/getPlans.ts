import { HttpCustomError } from "./errorHttp/HttpCustomError";


  
  interface IListCodigoProps{
   
            Id : string;
            Description: string;
            MonthlyFee : number;
            DocumentLimit: number;
            UserLimit : number;
            Inactive : boolean;
  
   }[]
  
  
   export async function getPlans(tenant: any) {
 
    debugger;
      //https://localhost:7199/api/v1/Plan
      const url = `${process.env.NEXT_PUBLIC_API_KEY}/Plan`;
      const headers = new Headers({
        'Content-type': 'application/json',
      })
      console.log(url)
      const response = await fetch(url)

      if (!response.ok) {
        if (response.status === 404) {
          throw new HttpCustomError('Requisição inválida', 404, 'Not Found Error ')
        }
    
        if (response.status === 400) {
        throw new HttpCustomError('Requisição inválida', 400, 'Bad Request Error ')
        }
    
       throw new HttpCustomError('Requisição inválida', 500, 'Internal Server Error')
      }
      const data = (await response.json()) as IListCodigoProps[]
      const plans=data.map((plan)=>({
        id:plan.Id,
            Description: plan.Description,
            MonthlyFee : plan.MonthlyFee,
            DocumentLimit: plan.DocumentLimit,
            UserLimit : plan.UserLimit,
            Inactive : plan.Inactive,

      }))
      return{
        data:plans,
        totalCount:plans.length
      }

    }