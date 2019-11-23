import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonDataService } from './../../../shared-services/data-services/common-data.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() userInfo: any;
  constructor(
    private fb: FormBuilder,
    private commonDataService: CommonDataService
  ) { }

  editProfileForm = this.fb.group({
    Introduction: [''],
    LookingFor: [''],
    Interests: [''],
    City: [''],
    Country: ['']
  });

  ngOnInit() {
  }

  onSubmit() {
    this.commonDataService.updateUser(this.userInfo, this.userInfo.Id).subscribe(response => {
      console.log(response);
    });
  }

}
