import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Credentials, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  login({ username, password }: Credentials): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'truong') {
      return throwError('Invalid username or password');
    }
    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
