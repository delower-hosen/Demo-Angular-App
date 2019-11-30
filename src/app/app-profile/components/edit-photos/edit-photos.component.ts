import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonDataService } from './../../../shared-services/data-services/common-data.service';

@Component({
  selector: 'app-edit-photos',
  templateUrl: './edit-photos.component.html',
  styleUrls: ['./edit-photos.component.scss']
})
export class EditPhotosComponent implements OnInit {
  myUserId: string;
  photoIds: string[] = [];
  photos: any;

  @Output() changeProfilePhoto: EventEmitter<any> = new EventEmitter();

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
    this.commonDataService.getPhotoConnection(this.myUserId).subscribe(response => {
      for (const elem of response) {
        this.photoIds.push(elem.ChildEntityId);
      }
      if (this.photoIds && this.photoIds.length > 0) {
        this.getPhotos();
      }
    });
  }

  private getPhotos() {
    this.commonDataService.getPhotos(this.photoIds[0]).subscribe(response => {
      this.photos = response;
    });
  }

  makeMain(url: string) {
    const userInfo = {
      ProfilePhoto: url
    };
    this.commonDataService.updateUser(userInfo, this.myUserId).subscribe(response => {
      this.changeProfilePhoto.emit(response);
    });
  }

}
