import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'hero-list', component: HeroListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
