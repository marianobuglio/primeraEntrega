import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReunionService } from '../services/reunion.service';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-minutas',
  templateUrl: './minutas.page.html',
  styleUrls: ['./minutas.page.scss'],
})
export class MinutasPage implements OnInit {
  reuniones: any;

  constructor(
    private _authService: AuthService,
    private reunionesService: ReunionService,
    private document: DocumentViewer
  ) { }

  ngOnInit() {
    this.getReuniones()
  }
  async getReuniones(){
    const token =  await this._authService.getToken()
    const user =  await this._authService.user()
    this.reunionesService.list(token,user.id,true).subscribe(
      (res) =>{
        this.reuniones = res.results 
        console.log(this.reuniones)    
     
      } 
    )
  }

  pdfMinuta(pdf){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
   let array = pdf.split("/")
   pdf = array[array.length - 1]
    window.open(`http://localhost:3000/static/${pdf}`, "_blank")
    // this.document.viewDocument(`localhost:3000/${pdf}`, 'application/pdf', options)
    console.log(pdf)
  }
}
