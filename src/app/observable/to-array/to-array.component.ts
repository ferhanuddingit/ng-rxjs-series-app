import { Component, OnInit } from '@angular/core';
import { Subscription, interval, from, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  users = [
    { name: 'Ferhan', skill: 'Angular' },
    { name: 'Imran', skill: 'React' },
    { name: 'Furqan', skill: 'Jquery' },
    { name: 'Wajeeh', skill: 'Javascript' },
  ];

  sourceSub: Subscription;

  constructor() { }

  ngOnInit(): void {
    // Ex 01
    const source1 = interval(1000);
    this.sourceSub = source1.pipe(take(5), toArray())
      .subscribe(res => {
        console.log(res);
      });

    // Ex 02
    const source2 = from(this.users);
    source2.pipe(toArray())
      .subscribe(res => {
        console.log(res);
      });

    // Ex 03
    const source3 = of('Ferhan', 'Uddin', 'Siddiqi');
    source3.pipe(toArray())
      .subscribe(res => {
        console.log(res);
      });
  }
}
