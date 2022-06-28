import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { environment  } from '../../environments/environment';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token: string;
  userId: string;
  apiUrl:string
  constructor(
    private http: HttpClient,
    private localStorage: Storage,
    private router: Router,
    private toastController: ToastController
  ) { 
    this.apiUrl = environment.apiUrl
    this.localStorage = new Storage();
this.init()
  }

 

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.localStorage.create();
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<any>(this.apiUrl + 'auth/login',
      credentials
    ).pipe(
      tap(async data => {
        
        this.localStorage.set('token', data.tokens);
        this.localStorage.set('user', data.user);
        this.isLoggedIn = true;
        
        return data;
      }),
      catchError(err => {
        throw err;
      })
    )
  }


 

  async logout() {
   await this.localStorage.clear();
  }

   async user() {
      var user = await this.localStorage.get('user')
      return  user
      
 
  }

 async getToken() {

    const token = await this.localStorage.get('token')
      return token.access.token
      
  }
}
