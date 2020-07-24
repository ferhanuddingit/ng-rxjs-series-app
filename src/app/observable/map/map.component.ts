import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  subEx1: Subscription;
  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    // Ex 01
    const broadCastVideos = interval(1000);
    this.subEx1 = broadCastVideos.pipe(
      map(data => 'Video ' + data)
    ).subscribe(
      res => {
        this._designUtility.print(res, 'elContainer1');
      }
    );

    setTimeout(() => { this.subEx1.unsubscribe() }, 10000);
  }
}
