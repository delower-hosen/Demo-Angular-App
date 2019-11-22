import { Component, OnInit } from '@angular/core';
import { CommonDataService } from './../../../shared-services/data-services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members = [];
  constructor(
    private commonDataService: CommonDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  private getMembers() {
    this.commonDataService.getMemberList().subscribe(response => {
      debugger;
      this.members = response;
    });
  }

  public onClickPerson(itemId: string) {
    this.router.navigate(['member-list/', itemId]);
    console.log(itemId);
  }

}
