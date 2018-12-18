import { FormsModule } from '@angular/forms'; //import FormsModule for ngModule
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecComponentComponent } from './sec-component/sec-component.component';
import { Day1Component } from './day1/day1.component';

//import Routes and RoutingModule
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { CommandsComponent } from './commands/commands.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'day1', component: Day1Component },
  { path: 'day2', component: Day2Component },
  { path: 'day3', component: Day3Component },
  { path: 'commands', component: CommandsComponent }
];

const routing = RouterModule.forRoot(APP_ROUTES); // RouterModule

@NgModule({
  declarations: [
    AppComponent,
    SecComponentComponent,
    Day1Component,
    HomeComponent,
    Day2Component,
    Day3Component,
    CommandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
