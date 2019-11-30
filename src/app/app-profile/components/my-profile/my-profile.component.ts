import { Component, OnInit } from '@angular/core';
import { CommonDataService } from 'src/app/shared-services/data-services/common-data.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  myUserId: string;
  userInfo: any;

  constructor(
    public commonDataService: CommonDataService
  ) { }

  ngOnInit() {
    this.getUserId();
    this.getUserInfo();
  }

  private getUserId() {
    const token = localStorage.getItem('token');
    if (!!token) {
      const decodedToken = this.commonDataService.jwtHelper.decodeToken(token);
      this.myUserId = decodedToken.nameid;
    }
  }

  getUserInfo() {
    this.commonDataService.getMember(this.myUserId).subscribe(response => {
      this.userInfo = response;
      console.log(this.userInfo);
    });
  }

  getUpdatedUserPhoto(updatdUser: any) {
    this.userInfo.ProfilePhoto = updatdUser.ProfilePhoto;
  }

  getUpdatedUser( updatdUser: any ) {
    this.userInfo.City = updatdUser.City;
    this.userInfo.Country = updatdUser.Country;
  }

}
