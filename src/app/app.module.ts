import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragulaModule, DragulaService } from 'ng2-dragula';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { AppComponent } from './app.component';
import { TestService } from './services/test.service';
import { ActiveUserComponent } from './active-user/active-user.component';
import { SettingsComponent } from './settings/settings.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    SettingsComponent,
    TicketListComponent,
    AddUserComponent,
    EditUserComponent,
    PaymentFormComponent,
    PaymentHistoryComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    DragulaModule,
    Ng2TableModule
  ],
  providers: [TestService, DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
