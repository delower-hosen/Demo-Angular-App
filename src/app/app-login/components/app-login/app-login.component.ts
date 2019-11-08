import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CommonDataService } from './../../../shared-services/data-services/common-data.service';
import { User } from './../../../Interfaces/User';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private commonDataService: CommonDataService,
    private snackBar: MatSnackBar
    ) { }

  loginForm = this.fb.group({
    Username: [''],
    Password: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    const user: User = this.loginForm.value;
    this.commonDataService.login(user).subscribe( next => {
      this.showMessage('Login succesful');
    }, error => {
      this.showMessage('Login failed');
    });
  }

  get getFormErrors() {
    return this.loginForm.controls;
  }

  private showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['snack-bar-color']
    });
  }
}
