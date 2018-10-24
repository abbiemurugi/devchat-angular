import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { EmailComponent } from './email/email.component';
// import { SignupComponent } from './signup/signup.component';
// import { MembersComponent } from './members/members.component';
=======
import { AngularFireModule } from 'angularfire2';
// import { AngularFirestore} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
>>>>>>> 67e6cf7396a9dcabd87c78f59a2f2800d40f9024

export const firebaseConfig = {
  apiKey: "AIzaSyBX_PHQTnlZ3dNVV80Ud_3fW7J86JespSg",
  authDomain: "devchat-d8c70.firebaseapp.com",
  databaseURL: "https://devchat-d8c70.firebaseio.com",
  storageBucket: "devchat-d8c70",
  messagingSenderId: "137063297053"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    UserComponent,
    RegisterComponent
    // LoginComponent,
    // EmailComponent,
    // SignupComponent,
    // MembersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    HttpClientModule
=======
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
>>>>>>> 67e6cf7396a9dcabd87c78f59a2f2800d40f9024
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
