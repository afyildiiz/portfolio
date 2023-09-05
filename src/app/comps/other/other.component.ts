import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;
  pipelines = [
    { name: 'Pipeline 1', items: [{ name: 'item1', description: 'desc1', price: 10 }, { name: 'item2', description: 'desc2', price: 20 }] },
    { name: 'Pipeline 2', items: [{ name: 'item3', description: 'desc3', price: 30 }, { name: 'item4', description: 'desc4', price: 40 }] },
  ];
  @ViewChild("tab2") tab2!:ElementRef
  @ViewChild("tab3") tab3!:ElementRef
  @ViewChild("tab4") tab4!:ElementRef

  constructor(public modal: NgbModal) {}

  ngOnInit(): void {}


  // open(content: any) {
  //   this.modal.open(content, { size: 'lg', centered: true });
  // }

openModal(proje:any,hero: Hero) {
  this.modal.open(proje,{size:'lg',centered:true});
  this.selectedHero = hero;

}

selectedPipelineItems: any[] = [];

showItems(pipeline: any) {
  this.selectedPipelineItems = pipeline.items;
}
  
  onetoTwo(){
    this.tab2.nativeElement.checked=true
  }

  twotoThree(){
    this.tab3.nativeElement.checked=true
  }

  threetoFour(){
    this.tab4.nativeElement.checked=true
  }
  open(idf:any){
    this.modal.open(idf,{size:'lg',centered:true})
  }
}
