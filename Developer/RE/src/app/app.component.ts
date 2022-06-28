import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mis Tareas', url: '/tareas', icon: 'mail' },
    { title: 'Mis Reuniones', url: '/reuniones', icon: 'paper-plane' }, 
    { title: 'Mis Minutas', url: '/minutas', icon: 'paper-plane' }, 
  ];
  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  async signOut(){
    await this.authService.logout()
    this.navCtrl.navigateRoot("/login")
  }
}
