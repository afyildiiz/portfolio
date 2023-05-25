import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public elementref:ElementRef) { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string): void {
    const element = this.elementref.nativeElement.querySelector('#' + elementId);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
