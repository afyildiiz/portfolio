import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // selectedLanguage!:string

  selectedLanguage: string = localStorage.getItem('selectedLanguage') || 'en';

  constructor(private translate:TranslateService,private languageService: EmailService) { }

  ngOnInit(): void {
    let lang=localStorage.getItem('selectedLanguage') || 'en'
    this.translate.use(lang)
  }
  // changeLanguage() {
  //   this.translate.use(this.selectedLanguage);
  // }


  changeLanguage() {
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
    this.languageService.setLanguage(this.selectedLanguage);
    window.location.reload()
  }
}
