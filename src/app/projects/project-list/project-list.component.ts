import { Component, ViewChild, ViewRef, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Project } from '../project';
import { ProjectRepositoryService } from '../project-repository.service';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


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

  constructor(private rep: ProjectRepositoryService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.projects = rep.projects;
  }

  ngAfterViewInit() {
    console.log(this.verticalList.nativeElement);
  }


  getElementWidth() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth > 600) {
        return 600;
      } else {
        return 400;
      }
    } else {
      return 600;
    }
  }

  scrollNext() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('verticalList').scrollBy({ left: this.getElementWidth(), behavior: 'smooth' });
    }
  }

  scrollBack() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('verticalList').scrollBy({ left: -this.getElementWidth(), behavior: 'smooth' });
    }
  }

  isStart() {
    if (isPlatformBrowser(this.platformId)) {
      return document.getElementById('verticalList').scrollLeft === 0;
    } else {
      return true;
    }
  }

  isEnd() {
    if (isPlatformBrowser(this.platformId)) {
      const doc = document.getElementById('verticalList');
      return doc.scrollLeft + doc.clientWidth === doc.scrollWidth;
    } else {
      return false;
    }
  }

}
