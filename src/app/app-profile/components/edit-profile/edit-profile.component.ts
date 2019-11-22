import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  editProfileForm = this.fb.group({
    // Username: ['', Validators.minLength(3)],
    // Email: ['', [Validators.email]],
    // Password: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
  }

}
