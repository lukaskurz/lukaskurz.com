import { Component, ViewChild, ViewRef, ElementRef, AfterViewInit } from '@angular/core';
import { Project } from '../project';
import { ProjectRepositoryService } from '../project-repository.service';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements AfterViewInit {

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  projects: Project[];

  @ViewChild('verticalList') verticalList: ElementRef;

  constructor(private rep: ProjectRepositoryService) {
    this.projects = rep.projects;
  }

  ngAfterViewInit() {
    console.log(this.verticalList.nativeElement);
  }


  getElementWidth() {
    if (window.innerWidth > 600) {
      return 600;
    } else {
      return 400;
    }
  }

  scrollNext() {
    document.getElementById('verticalList').scrollBy({ left: this.getElementWidth(), behavior: 'smooth' });
  }

  scrollBack() {
    document.getElementById('verticalList').scrollBy({ left: -this.getElementWidth(), behavior: 'smooth' });
  }

  isStart() {
    return document.getElementById('verticalList').scrollLeft === 0;
  }

  isEnd() {
    const doc = document.getElementById('verticalList');
    return doc.scrollLeft + doc.clientWidth === doc.scrollWidth;
  }

}
