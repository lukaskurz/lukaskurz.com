import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  projects: Project[] = [];

  constructor() {
    this.projects.push({
      title: 'standroid',
      description: 'Slack chat-bot hosted on firebase',
      technologies: ['Firebase', 'Angular', 'Nodejs', 'Typescript', 'Slack'],
      imageUrls: [],
      texts: []
    });
  }
}
