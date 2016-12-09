import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { AsyncService } from './demo1/async.service';


import 'rxjs/add/operator/map';
import { Demo2Component } from './demo2/demo2.component';



export const routes = [{
    path: '',
    component: Demo1Component,
  },
  {
    path: '2',
    component: Demo2Component,
  }
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
    Demo2Component
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
