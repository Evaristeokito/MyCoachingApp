import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICustomers } from 'src/app/shared/models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustormerService {
  private baseUrl = 'http://localhost:8080/api/v1/client';

  constructor(private http: HttpClient) {}

  /**
   * Get All products
   */
  getClients(): Observable<Array<ICustomers>> {
    return this.http.get<Array<ICustomers>>(this.baseUrl + 's');
  }

  createClient(data: ICustomers): Observable<ICustomers> {
    return this.http.post<ICustomers>(this.baseUrl, data);
  }

  getOneClient(id: Number): Observable<ICustomers> {
    return this.http.get<ICustomers>(this.baseUrl + '/' + id);
  }

  deleteClient(id: Number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updateClient(id: Number, data: ICustomers): Observable<ICustomers> {
    return this.http.put<ICustomers>(this.baseUrl + '/' + id, data);
  }
}
