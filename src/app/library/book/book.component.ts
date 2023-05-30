import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit} from "@angular/core";
import { Book } from "src/app/_models/book";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
    
    @Input() bookCard?: Book;

    constructor(){}

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}