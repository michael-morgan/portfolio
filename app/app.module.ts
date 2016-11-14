import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from "./shared/page-not-found.component";

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      RouterModule.forRoot([
          { path: 'about', component: AboutComponent },
          { path: 'contact', component: ContactComponent },
          { path: '', component: WelcomeComponent },
          { path: '**', component: PageNotFoundComponent }
      ])
  ],
  declarations: [
      AppComponent,
      PageNotFoundComponent,
      WelcomeComponent,
      AboutComponent,
      ContactComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }