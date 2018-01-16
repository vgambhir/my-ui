import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserService} from './user.service';
import { MessageComponent } from './message/message.component';
import {MessageService} from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    DashboardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, MessageService], // service providers
  bootstrap: [AppComponent]
})
export class AppModule { }
