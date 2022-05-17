import { NgModule } from '@angular/core';
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
    HighlightComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
