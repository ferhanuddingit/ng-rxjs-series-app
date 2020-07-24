import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  objMsg: string;

  videoSubscription: Subscription;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    // timer (delay, interval)
    const braodCastVideos = timer(5000, 1000);
    this.videoSubscription = braodCastVideos.subscribe(
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
