import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  person: any;
  fetching: boolean = false;
  status = 'No data';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  fetchDetails() {
    this.fetching = true;
    this.status = "Loading..."
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      //retry(2)
      retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount) => {
          if (retryCount >= 5) {
            throw err;
          }
          else {
            retryCount = retryCount + 1;
            console.log('retryCount => ' + retryCount);
            this.status = 'Retry attempt count #' + retryCount;
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe(
      res => {
        console.log(res);
        this.person = res;
        this.status = "Data fetched";
        this.fetching = false;
      },
      err => {
        console.log(err);
        this.status = "Error in data fetching";
        this.fetching = false;
      }
    );
  }
}
