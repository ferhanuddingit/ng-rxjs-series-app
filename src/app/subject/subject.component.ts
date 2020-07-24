import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  username: string = "Ferhan";

  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe(uname => {
      this.username = uname;
    })
  }

  ngOnInit(): void {
  }

}
