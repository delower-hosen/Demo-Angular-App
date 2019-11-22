import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AvatarModule } from 'ngx-avatar';

import { AppDatingRoutingModule } from './app-dating-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';


@NgModule({
  declarations: [MemberListComponent, MemberDetailsComponent],
  imports: [
    CommonModule,
    AppDatingRoutingModule,
    AvatarModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class AppDatingModule { }
