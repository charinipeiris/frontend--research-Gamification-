import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { Grade1Component } from './grade1/grade1.component';
import { Grade2Component } from './grade2/grade2.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { from } from 'rxjs';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import {BlockUiService} from './services/block-ui.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {WebcamModule} from 'ngx-webcam';
import {DataService} from './services/data.service';
import { CameraSnapshotComponent } from './camera-snapshot/camera-snapshot.component';
import { FormDirective } from './shared/form.directive';
import { MathsComponent } from './grade1/maths/maths.component';
import { SinhalaComponent } from './grade1/sinhala/sinhala.component';
import { EnvironmentComponent } from './grade1/environment/environment.component';
import { Level1Component } from './grade1/maths/level1/level1.component';
import { Level2Component } from './grade1/maths/level2/level2.component';
import { Level3Component } from './grade1/maths/level3/level3.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'grade1',component:Grade1Component},
  {path:'home',component:HomeComponent},
  {path:'grade1/maths',component:MathsComponent},
  {path:'grade2/maths',component:MathsComponent},
  {path:'grade1/maths/level1',component:Level1Component},
  {path:'grade1/maths/level2',component:Level2Component},
  {path:'grade1/maths/level3',component:Level3Component},
  {path:'grade2/maths/level1',component:Level1Component},
  {path:'grade2/maths/level2',component:Level2Component},
  {path:'grade3/maths/level3',component:Level3Component},
 
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    Grade1Component,
    Grade2Component,
    CompareValidatorDirective,
    CameraSnapshotComponent,
    FormDirective,
    MathsComponent,
    SinhalaComponent,
    EnvironmentComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    WebcamModule,
    [RouterModule.forRoot(appRoutes)],
    ReactiveFormsModule,
  ],
  providers: [LoginService, RegisterService, DataService, BlockUiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
