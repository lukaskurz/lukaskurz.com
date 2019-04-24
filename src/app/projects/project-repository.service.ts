import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  projects: Project[] = [];

  constructor() {
    this.projects.push({
      title: 'Standroid',
      description: 'Slack chatbot hosted on firebase',
      technologies: ['Firebase', 'Angular', 'Nodejs', 'Typescript', 'Slack'],
      imageUrls: ['assets/projects/robot.png'],
      texts: ['Some text'],
      githubUrl: 'https://github.com/lukaskurz/standroid',
      color: '#fd905e'
    });
    this.projects.push({
      title: 'NistFormatter',
      description: 'Formatting tool for NIST Special Database-19',
      technologies: ['.Net', '.Net Core', 'Docker'],
      imageUrls: ['assets/projects/nist.png'],
      texts: ['Some text'],
      githubUrl: 'https://github.com/lukaskurz/nist-formatter',
      color: '#fd905e'
    });
    this.projects.push({
      title: 'Alarmy',
      description: 'Infrastructure for an alarm system',
      technologies: ['Golang', 'Typescript', 'React.js', 'Node.js', 'Docker', 'Docker Compose', 'MQTT', 'MySQL', 'Nginx', 'LetsEncrypt'],
      imageUrls: ['assets/projects/lock.png'],
      texts: ['Some text'],
      githubUrl: 'https://github.com/lukaskurz/Alarmy',
      color: '#fd905e'
    });
    this.projects.push({
      title: 'Carby',
      description: 'Slack chatbot interacting with an MQTT Network',
      technologies: ['Node.js', 'Typescript', 'MQTT', 'Docker', 'Slack'],
      imageUrls: ['assets/projects/slack.png'],
      texts: ['Some text'],
      githubUrl: 'https://github.com/lukaskurz/carby',
      color: '#fd905e'
    });
    this.projects.push({
      title: 'lukaskurz.com',
      description: 'The very website you are on',
      technologies: ['Angular', 'Angular Universal'],
      imageUrls: ['assets/projects/lukaskurz.png'],
      texts: ['Some text'],
      githubUrl: 'https://github.com/lukaskurz/lukaskurz.com',
      color: '#fd905e'
    });
    this.projects.push({
      title: 'Vikebot',
      description: 'A competitive coding game',
      technologies: ['Golang', 'Typescript', 'Phaser', 'Docker'],
      imageUrls: ['assets/projects/vikebot.png'],
      texts: ['Some text'],
      githubUrl: 'https://github.com/vikebot',
      color: '#fd905e'
    });
  }
}

