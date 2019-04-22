import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProjectListComponent, ProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FontAwesomeModule
  ]
})
export class ProjectsModule { }
