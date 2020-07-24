import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatusEx1: any;
  techStatusEx2: any;
  techStatusEx3: any;
  subEx2: Subscription;
  name: string;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnDestroy(): void {
    this.subEx2.unsubscribe();
  }

  ngOnInit(): void {
    // Ex 01 Custom Observable (Manual)
    const cusObs1 = Observable.create(observer => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('React');
      }, 2000);

      setTimeout(() => {
        observer.next('Knockout');
      }, 3000);

      setTimeout(() => {
        observer.next('Vue');
        //observer.error();
      }, 4000);

      setTimeout(() => {
        observer.next('JQuery');
        observer.complete();
      }, 5000);
    });

    cusObs1.subscribe(
      res => {
        this._designUtility.print(res, 'elContainer1');
      },
      err => {
        this.techStatusEx1 = 'error';
      },
      () => {
        this.techStatusEx1 = 'completed';
      }
    )

    // Ex 02 Custom Observable (Custom Interval)
    const arrEx2 = ['Angular', 'React', 'Vue', 'Knockout', 'JQuery', 'Javascript'];
    const cusObs2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arrEx2[count]);

        if (count >= 2) {
          observer.error();
        }

        count++;
      }, 1000);
    });

    this.subEx2 = cusObs2.subscribe(
      res => {
        this._designUtility.print(res, 'elContainer2');
      },
      err => {
        this.techStatusEx2 = 'error';
      },
      () => {
        this.techStatusEx2 = 'completed';
      }
    );

    // Ex 03 Custom Observable (Random Names)
    const arrEx3 = ['Angular', 'React', 'Vue', 'Knockout', 'JQuery', 'Javascript'];
    const cusObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arrEx3[count]);

        // if (count >= 2) {
        //   //observer.error();
        // }

        if (count >= 3) {
          observer.complete();
        }

        count++;
      }, 1000);
    });

    cusObs3.subscribe(
      res => {
        this.name = res;
      },
      err => {
        this.techStatusEx3 = 'error';
      },
      () => {
        this.techStatusEx3 = 'completed';
      }
    );
  }
}
