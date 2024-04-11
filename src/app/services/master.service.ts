import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  apiUrl='api/products/';

  getAll(){
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id:number){
    return this.http.get<Product>(this.apiUrl+id);
  }

  createProduct(product:Product){
    return this.http.post(this.apiUrl,product);
  }

  updateProduct(product:Product){
    return this.http.put(this.apiUrl+product.id,product);
  }

  deleteProduct(id:number){
    return this.http.delete(this.apiUrl+id);
  }

}
