import { UniversalModule, createGlobalProxy } from 'angular2-universal/node';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/home/home.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';

import { routing, appRoutingProviders }  from '../app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    UniversalModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    createGlobalProxy();
  }
}