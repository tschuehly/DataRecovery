import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credentials, User} from '../model/model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(credentials: Credentials): void{
    this.http.post('api/user/login', credentials)
      .subscribe((user: User) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(user);
        this.router.navigate(['order']);
      });
  }

  logout(): void{
    this.http.get('api/user/logout').subscribe();
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
