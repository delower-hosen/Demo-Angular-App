import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/shared-services/data-services/common-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../../../Interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GuidGeneratorService } from './../../../shared-services/helper-services/guid-generator.service';

@Component({
  selector: 'app-app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.scss']
})
export class AppRegistrationComponent implements OnInit {

  constructor(
     private fb: FormBuilder,
     private http: HttpClient,
     private commonDataService: CommonDataService,
     private snackBar: MatSnackBar,
     private router: Router,
     private guidGeneratorService: GuidGeneratorService
     ) { }

  signupForm = this.fb.group({
    Username: ['', Validators.minLength(3)],
    Email: ['', [Validators.email]],
    Password: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    const userModel = this.signupForm.value;
    userModel.Id = this.guidGeneratorService.getGuid();
    this.commonDataService.register(userModel).subscribe(response => {
      this.showMessage('Registration successfull');
      this.signupForm.reset();
      this.router.navigate(['/signin']);
    }, error => {
      this.showMessage('Registration failed');
    });
  }

  get getFormErrors() {
    return this.signupForm.controls;
  }

  private showMessage(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['snack-bar-color']
    });
  }

}
