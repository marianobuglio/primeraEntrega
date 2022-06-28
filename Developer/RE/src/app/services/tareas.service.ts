import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { environment  } from '../../environments/environment';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class TareaService {
  isLoggedIn = false;
  apiUrl:string;
  token : string;
  headers: HttpHeaders
  constructor(
    private _httpClient: HttpClient,
  ) { 
    this.apiUrl = environment.apiUrl
  }

   list(token,responsable): Observable<any>
      { 
          this.headers = new HttpHeaders({'Authorization':'Bearer ' + token})
          return this._httpClient.get<any>(`${this.apiUrl}tareas/mobil/tarea/byRessponsable/${responsable}`,{
              headers:this.headers
          })
      }
 

 



 


   



}
