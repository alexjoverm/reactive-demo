import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { AsyncService } from './demo1/async.service';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';



export const routes = [{
    path: '',
    component: Demo1Component,
  },
  {
    path: '2',
    component: Demo2Component,
  },
  {
    path: '3/:num',
    component: Demo3Component,
  },
  {
    path: '3',
    redirectTo: '/3/10',
    pathMatch: 'full'
  },
  // {
  //   path: 'game/:game',
  //   component: GameComponent
  // },
  // {
  //   path: 'play/:uid/:id',
  //   component: GameComponent,
  //   canActivate: [ViewGameGuard]
  // },
  // {
  //   path: 'preview/:uid/:id',
  //   component: GameComponent,
  //   canActivate: [ViewGameGuard]
  // },
];



@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AsyncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
