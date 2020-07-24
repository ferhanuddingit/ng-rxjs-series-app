import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { toArray, filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    { id: 1, name: 'Ferhan', gender: 'Male' },
    { id: 2, name: 'Imran', gender: 'Male' },
    { id: 3, name: 'Furqan', gender: 'Male' },
    { id: 4, name: 'Wajeeh', gender: 'Male' },
    { id: 5, name: 'Jaza', gender: 'Female' },
    { id: 6, name: 'Adnan', gender: 'Male' },
    { id: 7, name: 'Rayyan', gender: 'Male' },
    { id: 8, name: 'Zarqa', gender: 'Female' },
    { id: 9, name: 'Rija', gender: 'Female' },
    { id: 9, name: 'Hania', gender: 'Female' }
  ];

  dataEx1: any;
  dataEx2: any;
  dataEx3: any;

  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr);

    //Ex 01
    source.pipe(filter(member => member.name.length > 5), toArray()).subscribe(res => this.dataEx1 = res);

    //Ex 02
    source.pipe(filter(member => member.gender == "Female"), toArray()).subscribe(res => this.dataEx2 = res);

    //Ex 03
    source.pipe(filter(member => member.id < 6), toArray()).subscribe(res => this.dataEx3 = res);
  }

}
