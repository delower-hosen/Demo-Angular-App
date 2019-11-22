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
  constructor(
    private route: ActivatedRoute,
    private commonDataService: CommonDataService
  ) { }
  ngOnInit() {
   this.memberId = this.route.snapshot.paramMap.get('id');
   this.getMemberDetails();
  }

  private getMemberDetails() {
    this.commonDataService.getPhotoConnection(this.memberId);
  }

}
