import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')

      return false;
    } else {
      this.authService.login(this.ionicForm.value).subscribe(
            data => {
              console.log(data)
              this.navCtrl.navigateRoot('/reuniones');
            },
            error => {
              console.log(error);
            },
            () => {

             
            }
          );
      console.log(this.ionicForm.value)
    }
  }

  
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  
  /*async openModal() {
    const modal = await this.modalController.create({
      component: ExampleModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }*/

  // On Register button tap, dismiss login modal and open register modal


}
