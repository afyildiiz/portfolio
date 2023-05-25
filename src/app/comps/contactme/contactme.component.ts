import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { Observable } from 'rxjs';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  isMailSent:boolean=false
  contactForm!:FormGroup

  url = 'http://localhost:3000/send-email';

  // data={
  //   ad_soyad:"",
  //   email:"",
  //   mesaj:""
  // }
  constructor(private fb:FormBuilder, private email: EmailService,private http:HttpClient) { }

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      ad_soyad: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      mesaj: new FormControl("", Validators.required),
    })
  }
  sendEmail() {
    const headers = new HttpHeaders({ 'from': this.contactForm.value.email,'text':this.contactForm.value.mesaj });
    this.http.post(this.url, this.contactForm.value, { headers }).subscribe({
      next: (response) => {
        console.log(response);
        this.isMailSent = true;
      },
      error: (error) => {
        console.log(error);
        alert('Mail sending failed');
      }
    });
  }
  
  }
  
  
