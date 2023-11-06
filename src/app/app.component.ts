import { Component, OnInit } from '@angular/core';

interface Items {
  text: string,
  price: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  text:string = '';
  price:number = 0;
  total:number = 0;
  allPrice:number = 0;
  items: Items[] = []
  notItemName = false;
  currentItem = 'Television';
  test = true;
  
  ngOnInit(): void {
    this.allValue();
  }

  constructor() {}

  addItem() {
    if(this.text.trim() !== '') {
      this.items.push(
        {text: this.text, price: this.price}
      )
      this.allValue();
      this.text = '';
      this.price = 0;
    } else {
      this.notItemName = true;
      this.checkTimeError();
    }
    
  }

  allValue():number {
    const allPrice:number[] = [];
    if(this.items.length === 0) {
      return 0;
    }
    this.items.forEach(item => {
      allPrice.push(item.price);
    });
     this.allPrice = allPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return this.allPrice;
  }

  checkTimeError() {
    if(this.notItemName) {
      setTimeout(() => {
        this.notItemName = false;
      }, 5000);
    }
  }
}
