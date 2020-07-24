import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  objMsg: string;

  videoSubscription: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    this.videoSubscription = broadCastVideos.subscribe(
      res => {
        this.objMsg = 'Video ' + res;
        this._designUtility.print(this.objMsg, 'elContainer1');
        this._designUtility.print(this.objMsg, 'elContainer2');
        this._designUtility.print(this.objMsg, 'elContainer3');

        if (res >= 5) {
          this.videoSubscription.unsubscribe();
        }
      }
    );
  }
}
