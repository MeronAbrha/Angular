/**
 * Created by Nelly on 10/21/2016.
 */


import { Component ,OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    // template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent implements OnInit {

    products : Product[] = [];
    constructor(private productService : ProductService){}

    ngOnInit(): void {
        this.productService.getProducts()
            .then(products => this.products = products.slice(1, 5));
    }
    gotoDetail(product: Product): void { /* not implemented yet */}

}