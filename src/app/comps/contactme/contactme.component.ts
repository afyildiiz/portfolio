import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Visitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createClient } from '@supabase/supabase-js';
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


  supabase= createClient(environment.supabaseUrl ,environment.supabaseKey)



  constructor(private fb:FormBuilder, private email: EmailService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getMessages()

    this.contactForm=this.fb.group({
      message: new FormControl("", Validators.required),
      mail: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
    })
  }


  submitForm(): void {
    const url = 'http://localhost:3000/contact'; // Sunucu URL'si
    const payload = {
      name: this.isim,
      email: this.e_mail,
      message: this.mesaj
    };

    this.http.post(url, payload).subscribe(
      (response) => {
        console.log('İletişim formu gönderildi:', response);
        // Gönderim başarılı mesajını kullanıcıya göstermek için gerekli işlemleri yapabilirsiniz.
      },
      (error) => {
        console.error('İletişim formu gönderilirken bir hata oluştu:', error);
        // Hata mesajını kullanıcıya göstermek için gerekli işlemleri yapabilirsiniz.
      }
    );
  }

  async onSubmit() {
    if (this.contactForm.valid){
    const formData = this.contactForm.value;
    console.log(formData)

    this.supabase
      .from('user_message') // Göndermek istediğiniz tablonun adını buraya girin
      .insert([formData])
      .then(response => {
        console.log('Veri başarıyla gönderildi:', response);
      })
    }
    else{
      alert('please fill the all of fields!')
    }
      this.getMessages()
      
  }

  async getMessages(){
    this.supabase.from('user_message').select('*').then(response=>{
      console.log('mesajlar:',response)
    })
  }

  
  }
  
  
