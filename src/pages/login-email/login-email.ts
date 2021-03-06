import { RegisterPage } from '../register/register';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { TabsPage } from '../tabs/tabs';
import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the RegisterEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-email',
  templateUrl: 'login-email.html',
})
export class LoginEmailPage {
  username = "amonratCha";
  password = "P@ssw0rd1234"
  public backgroundImage = 'assets/image/login-bg.jpg';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authPVD: AuthenticationProvider,
    public loadingCtrl: LoadingController,
    public events: Events
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginEmailPage');
  }
  EmailLogin(getusername, getpassword) {
    if (getusername !== "" && getpassword !== "") {

      const loading = this.loadingCtrl.create({
        spinner: 'crescent',
        content: `
                <div class="custom-spinner-container">
                  <div><img src='./assets/image/gif2.gif'></div>
                </div>`
      });
      loading.present();
      // alert(" USER : " + getusername + "\nPassword : " + getpassword);
      let credential = { username: getusername, password: getpassword };
      // alert(credential);
      this.authPVD.signin(credential).subscribe(res => {
        if (res.roles[0] !== "user") {
          loading.dismiss();
          alert("This user is not authorize");
        } else {
          loading.dismiss();
          window.localStorage.setItem('user', JSON.stringify(res));
          this.navCtrl.setRoot(TabsPage);
        }
      });
    }
  }

  gotoRegister() {
    this.navCtrl.push(RegisterPage);
  }
  closePage(){
    this.navCtrl.pop();
  }

}
