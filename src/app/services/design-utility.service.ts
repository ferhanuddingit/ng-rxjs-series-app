import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(val: any, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }

  userName = new Subject<string>();
}
