import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AppService {
  private url:string = 'http://localhost:3000/users';
  constructor(private _http:Http) { }
  getUsers() {
    return this._http.get('${this.url}')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Service Error'));
  }
}
