import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  backgroundPosition = '50% 50%';

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const xOffset = (event.clientX - centerX) / centerX * 50;
    const yOffset = (event.clientY - centerY) / centerY * 50;
    this.backgroundPosition = `${50 + xOffset}% ${50 + yOffset}%`;
  }
  constructor() { 
  }

  ngOnInit(): void {
    
  }

  

}
