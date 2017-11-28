import { Component, OnInit, OnDestroy  } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TestService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  connection;
  message;

  constructor(private testService:TestService) {}

  public testAPI() {
    this.testService.testGet('testestestes').subscribe(response => {
      console.log(response);
    });
  }

  public testTCP() {
    this.testService.testSendTCP({data:'some tests'});
  }

  ngOnInit() {
    this.connection = this.testService.testReadTCP().subscribe(message => {
      console.log(message);
    });
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
