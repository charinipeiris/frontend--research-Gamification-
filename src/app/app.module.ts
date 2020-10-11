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
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Additions1Component } from './grade1/maths/level1/additions1/additions1.component';
import { Countingconcepts1Component } from './grade1/maths/level1/countingconcepts1/countingconcepts1.component';
import { Counting1Component } from './grade1/maths/level1/counting1/counting1.component';
import { Substractions1Component } from './grade1/maths/level1/substractions1/substractions1.component';
import { Money1Component } from './grade1/maths/level1/money1/money1.component';
import { Length1Component } from './grade1/maths/level1/length1/length1.component';
import { Width1Component } from './grade1/maths/level1/width1/width1.component';
import { Time1Component } from './grade1/maths/level1/time1/time1.component';
import { Volume1Component } from './grade1/maths/level1/volume1/volume1.component';
import { Shapes1Component } from './grade1/maths/level1/shapes1/shapes1.component';
import { Shapes2Component } from './grade1/maths/level2/shapes2/shapes2.component';
import { Volume2Component } from './grade1/maths/level2/volume2/volume2.component';
import { Time2Component } from './grade1/maths/level2/time2/time2.component';
import { Width2Component } from './grade1/maths/level2/width2/width2.component';
import { Length2Component } from './grade1/maths/level2/length2/length2.component';
import { Money2Component } from './grade1/maths/level2/money2/money2.component';
import { Substractions2Component } from './grade1/maths/level2/substractions2/substractions2.component';
import { Counting2Component } from './grade1/maths/level2/counting2/counting2.component';
import { Countingconcepts2Component } from './grade1/maths/level2/countingconcepts2/countingconcepts2.component';
import { Additions2Component } from './grade1/maths/level2/additions2/additions2.component';
import { SinhalaLevel1Component } from './grade1/sinhala/sinhala-level1/sinhala-level1.component';
import { SinhalaLevel2Component } from './grade1/sinhala/sinhala-level2/sinhala-level2.component';

import { SinhalaG1L2G1Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g1/sinhala-g1-l2-g1.component';
import { SinhalaG1L2G2Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g2/sinhala-g1-l2-g2.component';
import { SinhalaG1L2G3Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g3/sinhala-g1-l2-g3.component';
import { SinhalaG1L2G4Component } from './grade1/sinhala/sinhala-level2/sinhala-g1-l2-g4/sinhala-g1-l2-g4.component';
import { SinhalaGrade1Level1Game4Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game4/sinhala-grade1-level1-game4.component';
import { SinhalaGrade1Level1Game3Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game3/sinhala-grade1-level1-game3.component';
import { SinhalaGrade1Level1Game2Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game2/sinhala-grade1-level1-game2.component';
import { SinhalaGrade1Level1Game1Component } from './grade1/sinhala/sinhala-level1/sinhala-grade1-level1-game1/sinhala-grade1-level1-game1.component';


const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'grade1',component:Grade1Component},
  {path:'home',component:HomeComponent},
  {path:'grade1/maths',component:MathsComponent},
  {path:'grade1/sinhala',component:SinhalaComponent},
  {path:'grade1/environment',component:EnvironmentComponent},
  {path:'grade2/maths',component:MathsComponent},

  {path:'grade1/maths/level1',component:Level1Component},
  {path:'grade1/maths/level2',component:Level2Component},
  
  {path:'grade2/maths/level1',component:Level1Component},
  {path:'grade2/maths/level2',component:Level2Component},


  {path:'grade1/maths/level1/counting',component:Counting1Component},
  {path:'grade1/maths/level1/countingconcepts',component:Countingconcepts1Component},
  {path:'grade1/maths/level1/additions',component:Additions1Component },
  {path:'grade1/maths/level1/substraction',component:Substractions1Component},
  {path:'grade1/maths/level1/money',component: Money1Component},
  {path:'grade1/maths/level1/length',component:Length1Component },
  {path:'grade1/maths/level1/width',component:Width1Component},
  {path:'grade1/maths/level1/time',component:Time1Component},
  {path:'grade1/maths/level1/volume',component:Volume1Component },
  {path:'grade1/maths/level1/shapes',component:Shapes1Component},

  {path:'grade1/maths/level2/counting',component:Counting2Component},
  {path:'grade1/maths/level2/countingconcepts',component:Countingconcepts2Component},
  {path:'grade1/maths/level2/additions',component:Additions2Component },
  {path:'grade1/maths/level2/substraction',component:Substractions2Component},
  {path:'grade1/maths/level2/money',component: Money2Component},
  {path:'grade1/maths/level2/length',component:Length2Component },
  {path:'grade1/maths/level2/width',component:Width2Component},
  {path:'grade1/maths/level2/time',component:Time2Component},
  {path:'grade1/maths/level2/volume',component:Volume2Component },
  {path:'grade1/maths/level2/shapes',component:Shapes2Component},

  {path:'grade1/sinhala/level1/game1',component:SinhalaGrade1Level1Game1Component},
  {path:'grade1/sinhala/level1/game2',component:SinhalaGrade1Level1Game2Component},
  {path:'grade1/sinhala/level1/game3',component:SinhalaGrade1Level1Game3Component},
  {path:'grade1/sinhala/level1/game4',component:SinhalaGrade1Level1Game4Component},
  {path:'grade1/sinhala/level1',component:SinhalaLevel1Component },
  
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
    NavbarComponent,
    HomeComponent,
    Additions1Component,
    Countingconcepts1Component,
    Counting1Component,
    Substractions1Component,
    Money1Component,
    Length1Component,
    Width1Component,
    Time1Component,
    Volume1Component,
    Shapes1Component,
    Shapes2Component,
    Volume2Component,
    Time2Component,
    Width2Component,
    Length2Component,
    Money2Component,
    Substractions2Component,
    Counting2Component,
    Countingconcepts2Component,
    Additions2Component,
    SinhalaLevel1Component,
    SinhalaLevel2Component,
    SinhalaG1L2G1Component,
    SinhalaG1L2G2Component,
    SinhalaG1L2G3Component,
    SinhalaG1L2G4Component,
    SinhalaGrade1Level1Game4Component,
    SinhalaGrade1Level1Game3Component,
    SinhalaGrade1Level1Game2Component,
    SinhalaGrade1Level1Game1Component,

  
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
