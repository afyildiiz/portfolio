import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  backgroundPosition = '50% 50%';

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const xOffset = (event.clientX - centerX) / centerX * 10;
    const yOffset = (event.clientY - centerY) / centerY * 10;
    this.backgroundPosition = `${50 + xOffset}% ${50 + yOffset}%`;
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  openLink(url:string){
    window.open(url, '_blank');
  }
}
