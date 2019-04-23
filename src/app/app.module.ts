import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutComponent } from './about/about.component';
import { HoverLinkComponent } from './hover-link/hover-link.component';
import { SkillListComponent } from './skills/skill-list/skill-list.component';
import { SocialButtonsComponent } from './about/social-buttons/social-buttons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    AboutComponent,
    HoverLinkComponent,
    SkillListComponent,
    SocialButtonsComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'greeting', pathMatch: 'full' },
      { path: 'greeting', component: GreetingComponent, data: { animation: 'greeting' } },
      { path: 'about', component: AboutComponent, data: { animation: 'about' } },
      { path: 'skills', component: SkillListComponent, data: { animation: 'skills' } },
      { path: 'history', component: HistoryComponent, data: { animation: 'history' } },
      { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule', data: { animation: 'projects' } }
    ]),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
