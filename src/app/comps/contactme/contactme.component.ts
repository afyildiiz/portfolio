import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Visitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { Observable } from 'rxjs';
import { EmailService } from 'src/app/services/email.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  isMailSent:boolean=false
  contactForm!:FormGroup
  
  isim!: string;
  e_mail!: string;
  mesaj!: string;


  constructor(private fb:FormBuilder, private email: EmailService,private http:HttpClient) { }

  ngOnInit(): void {
    // this.getMessages()

    this.contactForm=this.fb.group({
      message: new FormControl("", Validators.required),
      mail: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
    })
  }


  sendEmail(): void {
    const apiUrl = 'http://localhost:3000/api/send-email'; // Express API'nizin URL'sini buraya ekleyin
    const payload = {
      name: this.isim,
      email: this.e_mail,
      message: this.mesaj
    };

    this.http.post(apiUrl, payload).subscribe(
      (response) => {
        console.log('E-posta gönderildi:', response);
        // Başarılı gönderim durumunu kullanıcıya bildirebilirsiniz
      },
      (error) => {
        console.error('E-posta gönderilirken bir hata oluştu:', error);
        // Hata durumunu kullanıcıya bildirebilirsiniz
      }
      
    );
    this.contactForm.reset()
  }



  
  }
  
  
