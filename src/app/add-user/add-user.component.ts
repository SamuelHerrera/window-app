import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(private service: TestService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.service.registerUser(this.model)
      .subscribe(
      data => {
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }

  clear() {
    
  }

}
