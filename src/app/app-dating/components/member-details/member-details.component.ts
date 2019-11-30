import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonDataService } from './../../../shared-services/data-services/common-data.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  memberId: string;
  photoIds: string[] = [];
  photos: any;
  userInfo: any;

  constructor(
    private route: ActivatedRoute,
    private commonDataService: CommonDataService
  ) { }
  ngOnInit() {
   this.memberId = this.route.snapshot.paramMap.get('id');
  //  this.getMemberDetails();
   this.getUserInfo();
  }

  getUserInfo() {
    this.commonDataService.getMember(this.memberId).subscribe(response => {
      this.userInfo = response;
      this.getMemberDetails();
    });
  }

  private getMemberDetails() {
    this.commonDataService.getPhotoConnection(this.memberId).subscribe(response => {
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

}
