import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioService } from './portfolio/portfolio.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from "./shared/page-not-found.component";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      RouterModule.forRoot([
          { path: 'about', component: AboutComponent },
          { path: 'contact', component: ContactComponent },
          { path: '', component: PortfolioComponent },
          { path: '**', component: PageNotFoundComponent }
      ])
  ],
  declarations: [
      AppComponent,
      PageNotFoundComponent,
      PortfolioComponent,
      AboutComponent,
      ContactComponent
  ],
  providers: [ PortfolioService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }