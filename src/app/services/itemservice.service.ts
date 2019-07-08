import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  names: string[] = []

  addItem(item) {
    const name = item.name;
    this.names.push(name);
    return this.names;
    }
  constructor() { }
}
