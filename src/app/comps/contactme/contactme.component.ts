import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Visitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
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
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;


  constructor(private fb:FormBuilder, private email: EmailService,private http:HttpClient, private spinner:NgxSpinnerService) { }

  
  ngOnInit(): void {
    // this.getMessages()

    this.contactForm = this.fb.group({
      name: new FormControl("", Validators.required),  // isim
      mail: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),  // e-posta
      message: new FormControl("", Validators.required),  // mesaj
    });
  }

  
  isValidEmail(email: string): boolean {
    // E-posta regex deseni
    return this.emailPattern.test(email);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form data:', formData);  // Form verilerini kontrol edin
      this.spinner.show()

      this.http.post('/send-email', formData).subscribe(
        response => {
          this.isMailSent=true
          this.contactForm.reset()
          this.spinner.hide()
          console.log('E-posta başarıyla gönderildi:', response);
        },
        error => {
          this.isMailSent=false
          this.spinner.hide()
          console.error('E-posta gönderme hatası:', error);
          alert("E-maıl can't send!")
        }
      );
    } else {
      console.error('Form geçersiz, lütfen tüm alanları doldurun.');
    }
  }



  
  }
  
  
