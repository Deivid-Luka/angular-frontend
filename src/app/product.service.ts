import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/product';


  constructor(private http:HttpClient) { }

  getProduct(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,product);
  }

  updateProduct(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }


  search(searchCriteria:String):Observable<any>{
    return this.http.post(`${this.baseUrl}/search`,searchCriteria).pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse){
    var result=confirm("No results Found");
    return throwError(error);
  }

  getProductsList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

}
