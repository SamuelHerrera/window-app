import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from './services/test.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'app';
  private connection;
  public appArray: any = {};

  constructor(private testService: TestService, private dragulaService: DragulaService) { 
    dragulaService.setOptions('first-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'card card-1';
      }
    });
  }

  public testAPI() {
    this.testService.testGet('testestestes').subscribe(response => {
      console.log(response);
    });
  }

  public testTCP() {
    this.testService.testSendTCP({ data: 'some tests' });
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
