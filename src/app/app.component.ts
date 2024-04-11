import { Component, OnInit } from '@angular/core';
import { MasterService } from './services/master.service';
import { Product } from './models/product';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productList!: Product[];
  editData!: Product;
  dataSources: any;
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'action'];
  isAdd = false;
  isEdit = false;

  constructor(private service: MasterService, private builder: FormBuilder) {}

  productForm = this.builder.group({
    id: { value: 0, disabled: true },
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0],
  });
  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.service.getAll().subscribe((item) => {
      this.productList = item;
      this.dataSources = new MatTableDataSource(this.productList);
    });
  }

  saveProduct() {
    if (this.productForm.valid) {
      let obj: Product = {
        id: this.productForm.value.id as number,
        name: this.productForm.value.name as string,
        description: this.productForm.value.description as string,
        price: this.productForm.value.price as number,
      };
      if (this.isAdd) {
        this.service.createProduct(obj).subscribe((item) => {
          this.loadProduct();
          alert('product created successfully.');
        });
      } else {
        obj.id = this.productForm.getRawValue().id as number;
        this.service.updateProduct(obj).subscribe((item) => {
          this.loadProduct();
          alert('product updated successfully.');
        });
      }

      this.backToList();
    }
  }

  editProduct(id: number) {
    this.service.getProduct(id).subscribe((data) => {
      this.editData = data;
      this.productForm.setValue({
        id: this.editData.id,
        name: this.editData.name,
        description: this.editData.description,
        price: this.editData.price,
      });
      this.isEdit = true;
    });
  }

  deleteProduct(id: number) {}

  showAddProductForm() {
    this.productForm.reset();
    this.isAdd = true;
  }

  backToList() {
    this.isAdd = false;
    this.isEdit = false;
  }
}
