import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post('http://localhost:3000/send-email', data);
  }
}
