import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInputEx1') myInputEx1: ElementRef;
  @ViewChild('myInputEx2') myInputEx2: ElementRef;
  reqDataDebounceTimeEx1 = null;
  reqDataDebounceTimeEx2 = null;

  constructor(private loadingbar: LoadingBarService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // Ex 01 DebounceTime
    const searchTermEx1 = fromEvent<any>(this.myInputEx1.nativeElement, "keyup").pipe(
      map(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTermEx1.subscribe(
      res => {
        this.reqDataDebounceTimeEx1 = res;
        this.loadingbar.start();

        setTimeout(() => {
          this.reqDataDebounceTimeEx1 = null;
          this.loadingbar.stop();
        }, 1000);
      }
    );

    // Ex 02 DistinctUntilChanged 
    const searchTermEx2 = fromEvent<any>(this.myInputEx2.nativeElement, "keyup").pipe(
      map(event => event.target.value),
      debounceTime(500)
    );

    searchTermEx2.subscribe(
      res => {
        this.reqDataDebounceTimeEx2 = res;
        this.loadingbar.start();

        setTimeout(() => {
          this.reqDataDebounceTimeEx2 = null;
          this.loadingbar.stop();
        }, 1000);
      }
    );
  }
}
