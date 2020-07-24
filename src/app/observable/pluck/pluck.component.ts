import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  dataEx1: any;
  dataEx2: any;
  users: any = [
    { name: 'Ferhan', skill: 'Angular', job: { title: 'Angular Developer', exp: '10 Years' } },
    { name: 'Imran', skill: 'React', job: { title: 'React Developer', exp: '7 Years' } },
    { name: 'Furqan', skill: 'Knockout', job: { title: 'Knockout Developer', exp: '5 Years' } },
    { name: 'Wajeeh', skill: 'Vue', job: { title: 'Vue Developer', exp: '3 Years' } }
  ];

  constructor() { }

  ngOnInit(): void {
    // Ex 01
    from(this.users).pipe(pluck('name'), toArray()).subscribe(res => this.dataEx1 = res);

    // Ex 02
    from(this.users).pipe(pluck('job', 'title'), toArray()).subscribe(res => this.dataEx2 = res);
  }

}
