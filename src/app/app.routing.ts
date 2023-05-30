import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { RegisterComponent } from "./header/register/register.component";
import { LoginComponent } from "./header/login/login.component";
import { NotFoundComponent } from "./notfound/notfound.component";
import { WriteComponent } from "./write/write.component";
import { LibraryComponent } from "./library/library.component";
import { AccountComponent } from "./account/account.component";


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', redirectTo: '/'},
    {path: 'user/login', component: LoginComponent},
    {path: 'user/register', component: RegisterComponent},
    {path: 'account', component: AccountComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'write-for-us', component: WriteComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contacts', component: ContactsComponent},
    {path:'**', component: NotFoundComponent}
]

export const routing = RouterModule.forRoot(appRoutes);