import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestourantsService {
  url="http://localhost:2500/Restaurant"
  rootUrl="http://localhost:2500/"      //#13 change                                         
  constructor(private http:HttpClient) { }
    getList()
    {
      return this.http.get(this.url)
    }
    

   // #7
    saveResto(data)
    {
      //  console.log(data);
      return this.http.post(this.url,data)

    
    }

        //#9 delete data
        deleteResto(id)
        {
          return this.http.delete(`${this.url}/${id}`)
        }

         //#11 Update data
          getCurrentResto(id)
          {
            return this.http.get(`${this.url}/${id}`)
          }           


          // #11 update purpose
          updateResto(id,data)
          {
            return this.http.put(`${this.url}/${id}`,data)
          }

                 //#13 register purpose      
              registerUser(data)
              {
           return this.http.post(this.rootUrl+"users",data)   
              }
}
