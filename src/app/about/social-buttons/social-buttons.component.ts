import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faRedditAlien, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss']
})
export class SocialButtonsComponent implements OnInit {

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faEnvelope = faEnvelope;
  faRedditAlien = faRedditAlien;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit() {
  }

}
