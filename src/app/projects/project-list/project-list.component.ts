import { Component } from '@angular/core';
import { Project } from '../project';
import { ProjectRepositoryService } from '../project-repository.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent  {

  projects: Project[];

  constructor(private rep: ProjectRepositoryService) {
    this.projects = rep.projects;
  }

}
