import { Component, OnInit } from '@angular/core';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss'],
})
export class ProductCatalogComponent implements OnInit {
  products: any[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.onGetProducts('volt');
  }

  onSelect(product: any) {
    this.store.dispatch(
      new Navigate(['workflow'], {
        category: product.category,
        productId: product.id,
      })
    );
  }

  onGetProducts(category: string) {
    this.products = [];
    let count = 0;
    while (count < 4) {
      let id = this.getRandomInt(1, 100);
      this.products.push({
        id,
        name: `Product ${id}`,
        price: this.getRandomInt(5, 30),
        category: category.toUpperCase(),
      });
      count++;
    }
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
