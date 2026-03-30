import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IAgent } from 'src/app/shared/models/agents';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class AgentService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };

  /**
   * Get All Agents
   */
  getAgents(): Observable<Array<IAgent>> {
    return this.http.get<Array<IAgent>>(this.baseUrl + 'agents');
  }

  getAgent(id: String): Observable<IAgent> {
    return this.http.get<IAgent>(this.baseUrl + 'agents/' + id);
  }

  createAgent(data: IAgent) {
    return this.http.post(this.baseUrl + 'agents', data);
  }

  updateAgent(id :String , agent : IAgent) {
    return this.http.put(this.baseUrl + "agents/" + id , agent);
  }

  deleteCoach(id: any) {
    return this.http.delete(this.baseUrl + 'agents/' + id);
  }

}
