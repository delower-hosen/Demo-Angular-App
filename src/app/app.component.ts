import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared-services/auth-services/auth.service';
import { CommonDataService } from './shared-services/data-services/common-data.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTab: string;
  username: string;
  myUserId: string;
  userInfo: any;

  constructor(
    private authService: AuthService,
    public commonDataService: CommonDataService,
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.displayName();
  }

  selectTab(tab: any) {
    this.selectedTab = tab;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  logOut() {
    const userInfo = {
      LastActive: new Date()
    };
    this.commonDataService.updateUser(userInfo, this.myUserId).subscribe(response => {
      localStorage.removeItem('token');
      this.router.navigate(['/signin']);
    });
  }
  displayName() {
    const token = localStorage.getItem('token');
    if (!!token) {
      const decodedToken = this.commonDataService.jwtHelper.decodeToken(token);
      this.username = decodedToken.unique_name;
      this.myUserId = decodedToken.nameid;
      this.getUserInfo();
    }
  }
  getUserInfo() {
    this.commonDataService.getMember(this.myUserId).subscribe(response => {
      this.userInfo = response;
      console.log(this.userInfo);
    });
  }
}
