import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  subsEx1: Subscription;
  subsEx2: Subscription;
  myColor: string = '';

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const source = interval(1500);

    //Ex 01
    const arr = ['Ferhan', 'Imran', 'Furqan', 'Wajeeh', 'Jaza', 'Zarqa', 'Rija'];

    this.subsEx1 = source.pipe(
      tap(res => {
        if (res === 4) {
          this.subsEx1.unsubscribe();
        }
      }),
      map(res => arr[res])
    ).subscribe(res => {
      this._designUtility.print(res, 'elContainer1');
    });

    //Ex 02
    const colors = ['Red', 'Blue', 'Gree', 'Purple', 'Black', 'Pink', 'Pink'];

    this.subsEx2 = source.pipe(
      tap(res => {
        this.myColor = colors[res];
        console.log('tap => ' + res);
        if (res === 7) {
          this.subsEx2.unsubscribe();
        }
      }),
      map(res => colors[res])
    ).subscribe(res => {
      this._designUtility.print(res, 'elContainer2');
    });
  }
}
