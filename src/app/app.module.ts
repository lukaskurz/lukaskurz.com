import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutComponent } from './about/about.component';
import { HoverLinkComponent } from './hover-link/hover-link.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AboutComponent,
    HoverLinkComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'greeting', pathMatch: 'full' },
      { path: 'greeting', component: GreetingComponent, data: {animation: 'greeting'} },
      { path: 'about', component: AboutComponent, data: {animation: 'about'} },
      { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule'}
    ]),
    TransferHttpCacheModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
