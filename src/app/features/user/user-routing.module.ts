import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: UserListComponent
  },
  {
    path: 'new', component: UserDetailsComponent
  },
  {
    path: ':id', component: UserDetailsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
  ]
})
export class UserRoutingModule { }
