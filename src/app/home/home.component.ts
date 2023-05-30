import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
    home = "Home";
    items = ["items1", "items2"];

    registerMode = true;
    loginMode = true;

    constructor(public authService: AuthService) {}
    ngOnInit(): void {
    }

    cancelLoginMode(event: boolean) {
        this.loginMode = event;
        console.log(this.loginMode);
    }

    cancelRegistryMode(event: boolean) {
        this.registerMode = event;
        console.log(this.registerMode);
    }   
}