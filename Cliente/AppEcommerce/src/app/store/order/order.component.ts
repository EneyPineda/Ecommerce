import { Component, OnInit } from '@angular/core';
import { OrderRepositoryService } from 'src/app/model/order-repository.service';
import { Router } from '@angular/router';
import { Orders } from 'src/app/model/orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderRepoService: OrderRepositoryService,private router: Router) { }

  ngOnInit() {
  }

  get orders():Orders[]{
    //const pageIndex =(this.selectedPage-1)*this.productsperPage
    return this.orderRepoService.getOrders();
    //.slice(pageIndex, pageIndex+this.productsperPage);
  }
}
