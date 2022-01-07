import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public _url="http://localhost:5000/Usercontacts/"
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this._url)
  }
  PostUser(data:any):Observable<Users>{
    return this.http.post<Users>(this._url,data)
  }
  DeleteUser(id:number):Observable<Users>{
    return this.http.delete<Users>(this._url+id)
  }
  UpDateContact(data:any):Observable<Users>{
    return this.http.put<Users>(this._url+data.id,data)
    console.log(data)
  }
}
