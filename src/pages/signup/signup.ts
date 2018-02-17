import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(private authservice: AuthService, 
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  onSignup(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    })
    loading.present();
    this.authservice.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Error Signing in',
          message: error.message,
          buttons: ['OK']
        })
        alert.present();
      });
  }

}
