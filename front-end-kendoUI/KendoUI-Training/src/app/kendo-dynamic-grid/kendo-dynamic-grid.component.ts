import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productdata } from '../add-product/productmodel';
@Component({
  selector: 'app-kendo-dynamic-grid',
  templateUrl: './kendo-dynamic-grid.component.html',
  styleUrls: ['./kendo-dynamic-grid.component.scss']
})
export class KendoDynamicGridComponent implements OnInit {
  products!: productdata[];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.api.getProduct().subscribe((res) => {
      this.products = res;
    });
  }
}

