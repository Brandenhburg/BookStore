import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "../_models/book";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private httpClient: HttpClient){}

    private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    getBooks(){
        return this.httpClient.get<Book[]>("http://localhost:22587/api/books");
    }
}