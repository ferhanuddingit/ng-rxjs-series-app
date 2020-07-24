import { Component, OnInit } from '@angular/core';
import { interval, from, timer, fromEvent } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private _designUtility: DesignUtilityService) { }

  colors = ['Red', 'Blue', 'Gree', 'Purple', 'Black', 'Pink', 'Pink'];

  ngOnInit(): void {

    const colorsSource = from(this.colors);
    //Ex 01
    colorsSource.pipe(take(5)).subscribe(res =>
      this._designUtility.print(res, 'elContainer1')
    );

    //Ex 02
    colorsSource.pipe(takeLast(5)).subscribe(res =>
      this._designUtility.print(res, 'elContainer2')
    );

    //Ex 03
    const source = interval(1000);
    const condition1 = timer(6000);
    const condition2 = fromEvent(document, 'click');
    source.pipe(takeUntil(condition2)).subscribe(res =>
      this._designUtility.print(res, 'elContainer3')
    );
  }
}
