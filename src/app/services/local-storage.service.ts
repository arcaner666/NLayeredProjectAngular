import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get(key: string): string{
    return localStorage.getItem(key);
  }

  add(key: string, value: string){
    localStorage.setItem(key,value);
  }

  delete(key: string){
    localStorage.removeItem(key);
  }
}
