import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientDTO } from '../models/coaching.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {


  private baseUrl = "http://localhost:8080/api/v1/client";

  constructor(private http : HttpClient) { }

  /**
   * Get All products
   */
  getClients(): Observable<Array<ClientDTO>> {
    return this.http.get<Array<ClientDTO>>(this.baseUrl + "s");
  }

  createClient(data : ClientDTO):Observable<ClientDTO>{
    return this.http.post<ClientDTO>(this.baseUrl, data);
  }

  getOneClient(id : Number) : Observable<ClientDTO>{
    return this.http.get<ClientDTO>(this.baseUrl + "/" + id);
  }

  deleteClient(id:Number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  updateClient(id : Number,data :ClientDTO):Observable<ClientDTO>{
    return this.http.put<ClientDTO>(this.baseUrl + "/" + id , data);
  }


}
