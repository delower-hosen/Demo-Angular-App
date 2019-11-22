import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProfileRoutingModule } from './app-profile-routing.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'ngx-avatar';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditPhotosComponent } from './components/edit-photos/edit-photos.component';


@NgModule({
  declarations: [MyProfileComponent, EditProfileComponent, EditPhotosComponent],
  imports: [
    CommonModule,
    AppProfileRoutingModule,
    MatTabsModule,
    AvatarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class AppProfileModule { }
