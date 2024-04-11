import { getLocaleEraNames } from '@angular/common';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(): {} | Observable<{}> | Promise<{}> {
    return{
      products:[
        {
          id:1,
          name:'pixel 8a',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, architecto?',
          price:40000

        },
        {
          id:2,
          name:'iphone 15',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, architecto?',
          price:80000

        },
        {
          id:3,
          name:'samsung s24',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, architecto?',
          price:60000

        },
        {
          id:4,
          name:'oneplus 14',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, architecto?',
          price:50000

        }
        
      ],
      customers:[]
    }
  }
}
