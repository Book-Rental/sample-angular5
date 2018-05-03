import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../environments/environment';
import { User } from '../../../shared/models/user';

@Injectable()
export class UserService {

  private apiUrl =  environment.serverApiUrl;

  constructor(private http: HttpClient) { }

  public get(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/user');
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/user/' + id);
  }

  public save(user: User): Observable<number> {
    return this.http.post<number>(this.apiUrl + '/user/', user);
  }

  public delete(id) {
    return this.http.delete(this.apiUrl + '/user/' + id);
  }

}
