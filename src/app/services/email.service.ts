import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  private apiUrl = 'http://localhost:5000/send-email';

  constructor(private http:HttpClient){

  }
  private selectedLanguage: string = localStorage.getItem('selectedLanguage') || 'en';

  getLanguage(): string {
    return this.selectedLanguage;
  }

  setLanguage(language: string): void {
    this.selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
  }

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
