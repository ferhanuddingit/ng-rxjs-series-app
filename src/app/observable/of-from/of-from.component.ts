import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { of, from } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  objEx2: any;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    // Ex 01 - Of pass data as a string
    const obs1 = of('Ferhan', 'Uddin', 'Siddiqi');
    obs1.subscribe(res => {
      this._designUtility.print(res, 'elContainer1');
    });

    // Ex 02 - Of pass data as a object
    const obs2 = of({ a: 'Ferhan', b: 'Uddin', c: 'Siddiqi' });
    obs2.subscribe(res => {
      this.objEx2 = res;
    });

    // Ex 03 - From with array
    const obs3 = from(['Ferhan', 'Uddin', 'Siddiqi']);
    obs3.subscribe(res => {
      this._designUtility.print(res, 'elContainer3');
    });

    // Ex 04 - From with Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    });

    const obs4 = from(promise);
    obs4.subscribe(res => {
      this._designUtility.print(res, 'elContainer4');
    });

    // Ex 04 - From with String
    const obs5 = from("Welcome to jungle");
    obs5.subscribe(res => {
      this._designUtility.print(res, 'elContainer5');
    });
  }
}
