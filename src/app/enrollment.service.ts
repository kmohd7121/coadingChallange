import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3200/api/forms';
  constructor(private _http:HttpClient){ }

  enroll(user: User) {
    return this._http.post<any>(this._url,user);
        // .pipe(catchError(this.errorHandler))
  }
}
