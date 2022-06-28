import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TareaService } from '../services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  tareas: any;

  constructor(
    private tareasService: TareaService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.getTareas()
  }


  async getTareas(){
    const token =  await this._authService.getToken()
    const responsable =  await this._authService.user()
    this.tareasService.list(token,responsable.id).subscribe(
       (res)=>{
         console.log(res)
     this.tareas = res.results
    })
  }
}
