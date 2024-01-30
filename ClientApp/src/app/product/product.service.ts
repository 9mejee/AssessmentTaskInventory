import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { IProduct } from './product.interface';

@Injectable()

export class ProductService {

  private baseUrl = "https:localhost:3000"
  httpOptions = {
    Headers: new HttpHeaders({
      "contetn-type": "application/json"
    })
  }
  constructor(private client: HttpClient) { }

  getAll(): Observable<any> {
    return this.client.get<any>(this.baseUrl + "GetAll").pipe(
      catchError(error => error)
    );;
  }

  create(product: IProduct): Observable<any> {
    return this.client.post(this.baseUrl + "GetAll",JSON.stringify(product));
  }

  edit(id:number, product:IProduct): Observable<any> {
    return this.client.put<any>(this.baseUrl + "eidt/"+id,JSON.stringify(product));
  }

  delete(id:number): Observable<any> {
    return this.client.delete<any>(this.baseUrl + "eidt/"+id);
  }
}
