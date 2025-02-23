import { Component, OnInit, NgZone } from '@angular/core';
import {AuthService} from './../services/auth.service';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ui: firebaseui.auth.AuthUI;


  constructor(private  authService: AuthService,
              private afAuth: AngularFireAuth,
              private router: Router,
              private ngZone: NgZone) { }

                ngOnInit() {

                  const uiConfig = {
                      signInOptions: [
                          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                          firebase.auth.EmailAuthProvider.PROVIDER_ID
                      ],
                      callbacks: {

                          signInSuccessWithAuthResult: this
                              .onLoginSuccessful
                              .bind(this)
                      }

                  };

                  // this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);
                  this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

                  this.ui.start('#firebaseui-auth-container', uiConfig);


              }
              ngOnDestroy() {
                this.ui.delete();
            }

            onLoginSuccessful(result) {

              console.log('Firebase UI result:', result);

              this.ngZone.run(() => this.router.navigateByUrl('/scheduler'));

          }

}
