import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  labelone='trying to learn all of things :)'
  labelcoder='<coder>'
  constructor() { }

  ngOnInit(): void {
  }

}
