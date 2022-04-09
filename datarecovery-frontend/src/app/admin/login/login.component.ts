import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Credentials } from '../../model/model';

@Component({
  selector: 'app-login',
  template: `
    <div
      class="grid border mx-auto my-20 bg-gray-300 rounded-2xl w-80 h-80 shadow-xl p-5"
    >
      <h1 class="text-3xl font-bold text-center">Log In</h1>
      <form class="grid grid-cols-1" [formGroup]="loginForm">
        <label class="text-lg py-2" for="username">Username</label>
        <input type="text" formControlName="username" id="username" />
        <label class="text-lg py-2" for="password">Password</label>
        <input type="password" formControlName="password" id="password" />
        <button
          (click)="submitLogin()"
          class="my-4 justify-self-center bg-pink-800 border rounded  py-3 px-5 text-gray-100 font-medium"
        >
          Login
        </button>
      </form>
    </div>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submitLogin(): void {
    this.authenticationService.login(this.loginForm.value as Credentials);
  }
}
