import { Component, OnInit } from "@angular/core";
import { AuthService } from "./shared-services/auth-services/auth.service";
import { CommonDataService } from "./shared-services/data-services/common-data.service";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  selectedTab: string;
  username: string;

  constructor(
    private authService: AuthService,
    public commonDataService: CommonDataService,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
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
    localStorage.removeItem('token');
  }
  displayName() {
    const token = localStorage.getItem('token');
    if (!!token) {
      const decodedToken = this.commonDataService.jwtHelper.decodeToken(token);
      this.username = decodedToken.unique_name;
    }
  }
}
