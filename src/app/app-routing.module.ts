import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';



// declare routes constant mapping
const routesArr: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routesArr) ],
  exports: [ RouterModule ],


})
export class AppRoutingModule { }
