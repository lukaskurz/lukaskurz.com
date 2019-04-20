import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hover-link',
  templateUrl: './hover-link.component.html',
  styleUrls: ['./hover-link.component.scss']
})
export class HoverLinkComponent implements OnInit {

  @Input() color: 'red' | 'blue' |'green' = 'red';


  constructor() { }

  ngOnInit() {
  }

}
