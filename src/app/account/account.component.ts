import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../_models/user";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit
{
    user?: User;
    expirationDate? : string;
    constructor() {}

    ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('user') as string);

        const helper  = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.user?.token as string);
        this.expirationDate = helper.getTokenExpirationDate(decodedToken)?.toString();
    }
}