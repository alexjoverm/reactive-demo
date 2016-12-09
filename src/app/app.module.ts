import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { AsyncService } from './demo1/async.service';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';



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
    path: '4',
    component: Demo4Component,
  },
  {
    path: '5',
    component: Demo5Component,
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
    Demo3Component,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    AsyncService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
