import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { RegisterProvider } from '../../providers/register/register';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  signup: FormGroup;
  chosenPicture = "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/21314397_1410273562383607_9014405429036635307_n.jpg?oh=00bac870110c20fe9fa3af26eb47fb63&oe=5A22E023";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private registerProvider: RegisterProvider,
    private authenPVD: AuthenticationProvider,
    public loadingCtrl: LoadingController,
    public nav: NavController) {

    this.signup = new FormGroup({
      username: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
      roles: new FormControl('user', Validators.required),
      profileImageURL: new FormControl(this.chosenPicture, Validators.required),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doSignup() {

    let data = {
      username: this.signup.value.username,
      firstName: this.signup.value.firstName,
      lastName: this.signup.value.lastName,
      email: this.signup.value.email,
      tel: this.signup.value.tel,
      password: this.signup.value.password,
      profileImageURL: this.signup.value.profileImageURL
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signup.value.email)) {
      if (this.signup.value.password.length < 7) {
        alert('Please input password at less 8 character');
      } else if (this.signup.value.password !== this.signup.value.confirm_password) {
        alert("Passwords do not match")
      } else {
        this.registerProvider.newAuthorization(data).then((res) => {
          localStorage.setItem('user', JSON.stringify(res));
          this.nav.pop();
        }).catch(err => {
          let error = JSON.parse(err._body);
          alert(error.message.replace("11000 duplicate key error collection: mean-secret.users index:", ""));
        });
        // this.signupservice.signup(data).then(res => {
        //   localStorage.setItem('user', JSON.stringify(res));
        //   this.nav.pop(); 
        // }).catch(err => {
        //   let error = JSON.parse(err._body);
        //   alert(error.message.replace("11000 duplicate key error collection: mean-secret.users index:", ""));
        // });
      }
    } else {
      alert('email incorrect')
    }
    console.log(this.signup.value);
  }

  doFacebookSignup() {
    const loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `
        <div class="custom-spinner-container">
          <div><img src='./assets/image/gif2.gif'></div>
        </div>`
    });
    loading.present();
    this.authenPVD.facebookLogin().then((data) => {
      let sendLoginData = {
        username:  this.authenPVD.fbUser.email,
        password: "P@ssw0rd1234",
        firstName: this.authenPVD.fbUser.first_name,
        lastName: this.authenPVD.fbUser.last_name,
        displayName: this.authenPVD.fbUser.name,
        email: this.authenPVD.fbUser.email,
        profileImageURL: this.authenPVD.fbUser.picture.data.url
      }
      // alert(" FB Mick log : " + JSON.stringify(sendLoginData));
      // loading.dismiss();
      this.authenPVD.signup(sendLoginData).then((loginData) => {
        alert("LOGIN FB DATA FROM MEAN : " + JSON.stringify(loginData));
        loading.dismiss();
      }).catch((ERR) => {
        alert("LOGIN FB DATA FROM MEAN ERR: " + JSON.stringify(ERR));
        loading.dismiss();
      })
    }).catch((err) => {
      alert("SEND FB ERR : " + JSON.stringify(err));
      loading.dismiss();
    });
  }

}
