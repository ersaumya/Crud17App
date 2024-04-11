import { Component, OnInit } from '@angular/core';
import { MasterService } from './services/master.service';
import { Product } from './models/product';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  productList!:Product[];
  dataSources:any;
  displayedColumns:string[]=['id','name','description','price'];

  constructor(private service:MasterService){}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    this.service.getAll().subscribe(item=>{
      this.productList=item;
      this.dataSources=new MatTableDataSource(this.productList);
    })
    
  }
}
