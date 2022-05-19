import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './highlight.directive';
import { ImgurlPipe } from './imgurl.pipe';

import { ContactusComponent } from './contactus/contactus.component';
import { HighlightComponent } from './highlight/highlight.component';

import { HttpClientModule } from '@angular/common/http'
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearnRXComponent } from './learn-rx/learn-rx.component';

const routesConfig: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  }
  ,
  {
    path: 'list',
    component: ListUserComponent
  },
  {
    path: 'my/list',
    component: UserComponent
  },
  {
    path: 'learnRX',
    component: LearnRXComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ListUserComponent,
    MainContainerComponent,
    FooterComponent,
    HighlightDirective,
    ImgurlPipe,
    ContactusComponent,
    HighlightComponent,
    LearnRXComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
