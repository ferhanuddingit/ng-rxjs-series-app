import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  username: string = "Ferhan";

  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe(uname => {
      this.username = uname;
    })
  }

  ngOnInit(): void {
  }

  updateUsername(obj) {
    this._designUtility.userName.next(obj.value);
  }
}
