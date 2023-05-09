import { Component } from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent{
    home = "Home";

    items = ["items1", "items2"];
}