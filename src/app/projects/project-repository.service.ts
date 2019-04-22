import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  projects: Project[] = [];

  constructor() {
    for (let index = 0; index < 10; index++) {
      this.projects.push({
        title: 'standroid',
        description: 'Slack chat-bot hosted on firebase',
        technologies: ['Firebase', 'Angular', 'Nodejs', 'Typescript', 'Slack'],
        imageUrls: ['assets/projects/robot.png'],
        texts: ['Some text'],
        githubUrl: 'https://github.com/lukaskurz/standroid',
        color: '#fd905e'
      });
    }
  }
}
