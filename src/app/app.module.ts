import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
