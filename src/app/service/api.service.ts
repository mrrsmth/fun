import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetch() {
    return fetch(this.url);
  }

  get() {
    return this.http.get(this.url);
  }
}
