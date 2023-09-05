import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { response } from 'express';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private selectedLanguage: string = localStorage.getItem('selectedLanguage') || 'en';

  getLanguage(): string {
    return this.selectedLanguage;
  }

  setLanguage(language: string): void {
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
  }

}
