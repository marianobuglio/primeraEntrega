import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReunionService } from '../services/reunion.service';

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.page.html',
  styleUrls: ['./reuniones.page.scss'],
})
export class ReunionesPage implements OnInit {
  reuniones: any;
  temasReunion: any = [];

  constructor(
    private reunionesService: ReunionService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.getReuniones()
  }


  async getReuniones(){
    const token =  await this._authService.getToken()
    const user =  await this._authService.user()
    this.reunionesService.list(token,user.id,false).subscribe(
      (res) =>{
        this.reuniones = res.results  
      } 
    )
  }

  async temasReuniones(idReunion){
    const token =  await this._authService.getToken()
    const user =  await this._authService.user()
    this.reunionesService.temasByReunion(token,idReunion).subscribe(
      (res) =>{
        this.temasReunion = res.results  
        console.log(this.temasReunion)
      } 
    )
  }
}
