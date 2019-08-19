import { Injectable } from '@angular/core';
import { Orders } from './Orders';
import { OrderDatasourceService } from './order-datasource.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderRepositoryService {

  private orders: Orders[] = [];
  private orderNumber: string[] =[];
 
  
  constructor(private dataSourceService: OrderDatasourceService) {
    dataSourceService.getOrders().subscribe((response) =>{
      this.orders = response['orders'];
      this.orderNumber = response['orders'].map(o => o.orderNumber).filter((c, index, array) => array.indexOf(c) === index).sort();
    });
   }

   getOrders(): Orders[]{
     return this.orders;
   }
}
