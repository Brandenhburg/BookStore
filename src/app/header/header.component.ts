import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{

  loggedIn : boolean = false;

  registerMode?: boolean;
  currentUser$?: Observable<User | null>

  constructor(public authService: AuthService, private router: Router) {
    this.authService.currentUser$.subscribe(user => {
      if(user) this.loggedIn = true;
    });
  }

  ngOnInit(): void {
    
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("");
    this.loggedIn = false;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
