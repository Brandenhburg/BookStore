import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { SignUpComponent } from "./header/signup/signup.component";
import { LoginComponent } from "./header/login/login.component";
import { NotFoundComponent } from "./notfound/notfound.component";


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', redirectTo: '/'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
    {path:'**', component: NotFoundComponent}
]

export const routing = RouterModule.forRoot(appRoutes);