import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { Flipkart1Component } from './flipkart1/flipkart1.component';
import { EmailComponent } from './email/email.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BankaccountaddComponent } from './bankaccountadd/bankaccountadd.component';
import { Login1Component } from './login1/login1.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DirectivesPipesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehiclesComponent,
    BankaccountComponent,
    Flipkart1Component,
    EmailComponent,
    CreateVehicleComponent,
    BankaccountaddComponent,
    Login1Component,
    ViewVehicleComponent,
    ViewaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
