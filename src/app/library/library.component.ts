import { Component, OnInit } from "@angular/core";

import { Book } from "../_models/book";
import { BookService } from "../_services/book.service";
import { pipe } from "rxjs";

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    providers: [BookService]
})
export class LibraryComponent implements OnInit {


    constructor(private bookService: BookService){}
    
    books?: Book[]

    ngOnInit(): void {
        
        // this.bookService.getBooks().pipe(map( books => {
        //     console.log(books)
        // }))
        
        // this.bookService.getBooks().subscribe({
        //     next(resp) {
        //         this.books = resp;
        //     },
        // })

        this.bookService.getBooks().subscribe(response => {
            this.books = response;
        })

    }
}