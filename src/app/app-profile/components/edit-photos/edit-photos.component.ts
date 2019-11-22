import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../../shared-services/data-services/common-data.service';

@Component({
  selector: 'app-edit-photos',
  templateUrl: './edit-photos.component.html',
  styleUrls: ['./edit-photos.component.scss']
})
export class EditPhotosComponent implements OnInit {
  myUserId: string;

  constructor(
    public commonDataService: CommonDataService
  ) { }

  ngOnInit() {
    this.getUserId();
    this.getMemberDetails();
  }
  private getUserId() {
    const token = localStorage.getItem('token');
    if (!!token) {
      const decodedToken = this.commonDataService.jwtHelper.decodeToken(token);
      this.myUserId = decodedToken.nameid;
    }
  }

  private getMemberDetails() {
    debugger;
    this.commonDataService.getPhotoConnection(this.myUserId).subscribe(response => {
      console.log(response);
    });
  }

}
