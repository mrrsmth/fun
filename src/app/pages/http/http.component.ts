import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss'],
})
export class HttpComponent implements OnInit {
  
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.fetch();
    this.getHttp();
  }

  getData() {
    this.api.fetch()
    .then(response => response.json())
    .then(json => console.log(json))
  }

  getHttp() {
    this.api
      .get()
      .pipe(
        tap(data => {
          console.log(data);
        })
      )
      .subscribe();
  }
}
