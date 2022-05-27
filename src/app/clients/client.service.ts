import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url :string = "http://localhost:8080/clients";

  constructor(private http:HttpClient) { }

  //Obtain clients
  getAll():Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  };

  //Obtain clients
  create(client:Client):Observable<Client>{
    return this.http.post<Client>(this.url,client);
  };

  //Obtain a single client
  get(id:number):Observable<Client>{
    return this.http.get<Client>(this.url+'/'+id);
  };

  //update client
  update(client:Client):Observable<Client>{
    return this.http.put<Client>(this.url,client);
  };

  //delete a single client
  delete(id:number):Observable<Client>{
    return this.http.delete<Client>(this.url+'/'+id);
  };

}
