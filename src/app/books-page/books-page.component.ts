import { Component } from '@angular/core';
import { ApiProvider } from '../providers/api.prov';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent {
  constructor(
    private apiProv: ApiProvider
  ) {
    this.getBooks();
  }

  public getBooks() {
    this.apiProv.getBooks().then(res => {
      console.log(res);
    })
  }

}
