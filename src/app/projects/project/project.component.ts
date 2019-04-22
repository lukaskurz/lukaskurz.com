import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  getTechSentence(p: Project) {
    let s = "Technologies in use are ";
    for (let i = 0; i < p.technologies.length - 1; i++) {
      s += `${p.technologies[i]}, `;
    }
    s += `and ${p.technologies[p.technologies.length - 1]}.`;

    return s;
  }

}
