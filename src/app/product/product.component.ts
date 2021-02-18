import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products = [{
    chariot: 1, Zone: "STOC2", Type: "armoire", Quantite: 5, sav: 'non'
  },
  {
    chariot: 2, Zone: "ARRI1", Type: "chaise", Quantite: 4, sav: 'non'
  },
  ]
  prductTem: any[] = [];
  listeTypeProduct = ['chaise', 'table', 'armoire']
  typeProduct = 'all';

  constructor() { }
  ngOnInit(): void {
    this.prductTem = this.products;
  }
  searchProductBuType() {

    console.log(this.typeProduct);
    if (this.typeProduct == 'all') {
      this.products = this.prductTem;
    }
    else {
      this.products = this.prductTem.filter(p => p.Type == this.typeProduct);
    }

  }
}
