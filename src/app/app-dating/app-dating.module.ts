import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { AvatarModule } from 'ngx-avatar';
import { NgxGalleryModule } from 'ngx-gallery';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppDatingRoutingModule } from './app-dating-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberPhotosComponent } from './components/member-photos/member-photos.component';

@NgModule({
  declarations: [
    MemberListComponent,
    MemberDetailsComponent,
    MemberPhotosComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    AppDatingRoutingModule,
    AvatarModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    NgxGalleryModule
  ]
})
export class AppDatingModule {}
