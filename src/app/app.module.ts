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
import { Countingconcepts1Component } from './grade1/maths/level1/countingconcepts1/countingconcepts1.component';
import { Counting1Component } from './grade1/maths/level1/counting1/counting1.component';
import { Substractions1Component } from './grade1/maths/level1/substractions1/substractions1.component';
import { Money1Component } from './grade1/maths/level1/money1/money1.component';
import { Length1Component } from './grade1/maths/level1/length1/length1.component';
import { Width1Component } from './grade1/maths/level1/width1/width1.component';
import { Volume1Component } from './grade1/maths/level1/volume1/volume1.component';
import { Shapes1Component } from './grade1/maths/level1/shapes1/shapes1.component';
import { Shapes2Component } from './grade1/maths/level2/shapes2/shapes2.component';
import { Length2Component } from './grade1/maths/level2/length2/length2.component';
import { Money2Component } from './grade1/maths/level2/money2/money2.component';
import { Counting2Component } from './grade1/maths/level2/counting2/counting2.component';
import { Countingconcepts2Component } from './grade1/maths/level2/countingconcepts2/countingconcepts2.component';
import { Additions2Component } from './grade1/maths/level2/additions2/additions2.component';

import { SinhalaLevel1Component } from './grade1/sinhala/sinhala-level1/sinhala-level1.component';
import { SinhalaLevel2Component } from './grade1/sinhala/sinhala-level2/sinhala-level2.component';

import { EnvLevel2Component } from './grade1/environment/env-level2/env-level2.component';
import { EnvLevel1Component } from './grade1/environment/env-level1/env-level1.component';

import { EnvGrade1Level1Game1Component } from './grade1/environment/env-level1/env-grade1-level1-game1/env-grade1-level1-game1.component';
import { EnvGrade1Level1Game2Component } from './grade1/environment/env-level1/env-grade1-level1-game2/env-grade1-level1-game2.component';
import { EnvGrade1Level1Game3Component } from './grade1/environment/env-level1/env-grade1-level1-game3/env-grade1-level1-game3.component';
import { EnvGrade1Level1Game4Component } from './grade1/environment/env-level1/env-grade1-level1-game4/env-grade1-level1-game4.component';

import { EnvGrade1Level2Game1Component } from './grade1/environment/env-level2/env-grade1-level2-game1/env-grade1-level2-game1.component';
import { EnvGrade1Level2Game2Component } from './grade1/environment/env-level2/env-grade1-level2-game2/env-grade1-level2-game2.component';
import { EnvGrade1Level2Game3Component } from './grade1/environment/env-level2/env-grade1-level2-game3/env-grade1-level2-game3.component';
import { EnvGrade1Level2Game4Component } from './grade1/environment/env-level2/env-grade1-level2-game4/env-grade1-level2-game4.component';

import { SchoolGameComponent } from './grade1/environment/env-level1/school-game/school-game.component';



import { Maths2Component } from './grade2/maths2/maths2.component';
import { Sinhala2Component } from './grade2/sinhala2/sinhala2.component';
import { Environment2Component } from './grade2/environment2/environment2.component';

import { MLevel1Component } from './grade2/maths2/m-level1/m-level1.component';
import { MLevel2Component } from './grade2/maths2/m-level2/m-level2.component';

import { CountingL1Component } from './grade2/maths2/m-level1/counting-l1/counting-l1.component';
import { AdditionL1Component } from './grade2/maths2/m-level1/addition-l1/addition-l1.component';
import { SubstractionL1Component } from './grade2/maths2/m-level1/substraction-l1/substraction-l1.component';
import { MoneyL1Component } from './grade2/maths2/m-level1/money-l1/money-l1.component';
import { ShapesL1Component } from './grade2/maths2/m-level1/shapes-l1/shapes-l1.component';
import { LengthL1Component } from './grade2/maths2/m-level1/length-l1/length-l1.component';

import { LengthL2Component } from './grade2/maths2/m-level2/length-l2/length-l2.component';
import { MoneyL2Component } from './grade2/maths2/m-level2/money-l2/money-l2.component';
import { SubstractionL2Component } from './grade2/maths2/m-level2/substraction-l2/substraction-l2.component';
import { AdditionL2Component } from './grade2/maths2/m-level2/addition-l2/addition-l2.component';
import { CountingL2Component } from './grade2/maths2/m-level2/counting-l2/counting-l2.component';
import { ShapesL2Component } from './grade2/maths2/m-level2/shapes-l2/shapes-l2.component';
import { EmotiondetectorComponent } from './emotiondetector/emotiondetector.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { SentencesComponent } from './grade1/sinhala/sinhala-level1/sentences/sentences.component';
import { WordsComponent } from './grade1/sinhala/sinhala-level1/words/words.component';
import { Poems1Component } from './grade1/sinhala/sinhala-level2/poems1/poems1.component';
import { Words1Component } from './grade1/sinhala/sinhala-level2/words1/words1.component';
import { Sentences1Component } from './grade1/sinhala/sinhala-level2/sentences1/sentences1.component';

import { WordSelectiontionComponent } from './grade1/sinhala/sinhala-level1/word-selectiontion/word-selectiontion.component';

import { WordSelectiontion1Component } from './grade1/sinhala/sinhala-level2/word-selectiontion1/word-selectiontion1.component';

import { Level1sinhala2Component } from './grade2/sinhala2/level1sinhala2/level1sinhala2.component';
import { Level2sinhala2Component } from './grade2/sinhala2/level2sinhala2/level2sinhala2.component';
import { Words1L2Component } from './grade2/sinhala2/level2sinhala2/words1-l2/words1-l2.component';
import { Poems1L2Component } from './grade2/sinhala2/level2sinhala2/poems1-l2/poems1-l2.component';
// import { Sentences1L2Component } from './grade2/sinhala2/level2sinhala2/sentences1-l2/sentences1-l2.component';
import { WordSelectionL2Component } from './grade2/sinhala2/level2sinhala2/word-selection-l2/word-selection-l2.component';
import { WordSelectionL1Component } from './grade2/sinhala2/level1sinhala2/word-selection-l1/word-selection-l1.component';
import { WordsL1eComponent } from './grade2/sinhala2/level1sinhala2/words-l1e/words-l1e.component';
import { SentencesL1Component } from './grade2/sinhala2/level1sinhala2/sentences-l1/sentences-l1.component';
import { PoemsL1sL1Component } from './grade2/sinhala2/level1sinhala2/poems-l1s-l1/poems-l1s-l1.component';
import { StoriesComponent } from './grade1/sinhala/sinhala-level1/stories/stories.component';
import { Stories1Component } from './grade1/sinhala/sinhala-level2/stories1/stories1.component';
import { Stories1sL2Component } from './grade2/sinhala2/level2sinhala2/stories1s-l2/stories1s-l2.component';
import { Riddles1L2Component } from './grade2/sinhala2/level2sinhala2/riddles1-l2/riddles1-l2.component';
import { SinhalaIntroComponent } from './grade1/sinhala/sinhala-intro/sinhala-intro.component';
import { Sinhalaintro2Component } from './grade1/sinhala/sinhalaintro2/sinhalaintro2.component';
import { Sinhalintro1Component } from './grade2/sinhala2/sinhalintro1/sinhalintro1.component';
import { Sinhalintro2Component } from './grade2/sinhala2/sinhalintro2/sinhalintro2.component';
import { Video2Component } from './grade1/environment/env-level1/video2/video2.component';
import { Video3Component } from './grade1/environment/env-level1/video3/video3.component';
import { Video4Component } from './grade1/environment/env-level1/video4/video4.component';
import { Video1Component } from './grade1/environment/env-level1/video1/video1.component';
import { Game3Component } from './grade2/environment2/e-level1/game3/game3.component';
import { Game4Component } from './grade2/environment2/e-level1/game4/game4.component';
import { Game001Component } from './grade2/environment2/e-level2/game001/game001.component';
import { Game002Component } from './grade2/environment2/e-level2/game002/game002.component';
import { Game003Component } from './grade2/environment2/e-level2/game003/game003.component';
import { Game004Component } from './grade2/environment2/e-level2/game004/game004.component';
import { PoemsxComponent } from './grade1/sinhala/sinhala-level1/poemsx/poemsx.component';
import { VideoL1G1Component } from './grade1/environment/env-level2/video-l1-g1/video-l1-g1.component';
import { Video2L1G1Component } from './grade1/environment/env-level2/video2-l1-g1/video2-l1-g1.component';
import { Video3L1G1Component } from './grade1/environment/env-level2/video3-l1-g1/video3-l1-g1.component';
import { Video4L1G1Component } from './grade1/environment/env-level2/video4-l1-g1/video4-l1-g1.component';
import { Video5L1G1Component } from './grade1/environment/env-level2/video5-l1-g1/video5-l1-g1.component';
import { EnvGrade1Level2Game5Component } from './grade1/environment/env-level2/env-grade1-level2-game5/env-grade1-level2-game5.component';
import { EnvGrade1LevelGame5Component } from './grade1/environment/env-level1/env-grade1-level-game5/env-grade1-level-game5.component';
import {ELevel1Component} from './grade2/environment2/e-level1/e-level1.component';
import {ELevel2Component} from './grade2/environment2/e-level2/e-level2.component';
import { G2video1Component } from './grade2/environment2/e-level1/g2video1/g2video1.component';
import { G2video2Component } from './grade2/environment2/e-level1/g2video2/g2video2.component';
import { G2video3Component } from './grade2/environment2/e-level1/g2video3/g2video3.component';
import { G2video4Component } from './grade2/environment2/e-level1/g2video4/g2video4.component';
import { Game1G2L1Component } from './grade2/environment2/e-level1/game1-g2-l1/game1-g2-l1.component';
import { Game2G2L1Component } from './grade2/environment2/e-level1/game2-g2-l1/game2-g2-l1.component';





const appRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'grade1',component:Grade1Component},
  {path:'home',component:HomeComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'leaderboard',component:LeaderboardComponent},

  //-----maths--
  {path:'grade1/maths',component:MathsComponent},
  {path:'grade2/maths',component:Maths2Component},
  //-----maths grade1 level1--
  {path:'grade1/maths/level1',component:Level1Component},
  {path:'grade1/maths/level1/counting',component:Counting1Component},
  {path:'grade1/maths/level1/countingconcepts',component:Countingconcepts1Component},
  {path:'grade1/maths/level1/substraction',component:Substractions1Component},
  {path:'grade1/maths/level1/money',component: Money1Component},
  {path:'grade1/maths/level1/length',component:Length1Component },
  {path:'grade1/maths/level1/width',component:Width1Component},
  {path:'grade1/maths/level1/volume',component:Volume1Component },
  {path:'grade1/maths/level1/shapes',component:Shapes1Component},

//-----maths garde1 level2--
  {path:'grade1/maths/level2',component:Level2Component},
  {path:'grade1/maths/level2/counting',component:Counting2Component},
  {path:'grade1/maths/level2/countingconcepts',component:Countingconcepts2Component},
  {path:'grade1/maths/level2/additions',component:Additions2Component },
  {path:'grade1/maths/level2/money',component: Money2Component},
  {path:'grade1/maths/level2/length',component:Length2Component },
  {path:'grade1/maths/level2/shapes',component:Shapes2Component},

  //-----maths grade2 level1--
  {path:'grade2/maths/level1',component: MLevel1Component},
  {path:'grade2/maths/level2',component: MLevel2Component},

  {path:'grade2/maths/level1/counting',component:CountingL1Component },
  {path:'grade2/maths/level1/additions',component:AdditionL1Component },
  {path:'grade2/maths/level1/substraction',component:SubstractionL1Component},
  {path:'grade2/maths/level1/money',component:MoneyL1Component},
  {path:'grade2/maths/level1/length',component:LengthL1Component },
  {path:'grade2/maths/level1/shapes',component:ShapesL1Component },
   
  //-----maths grade2 level2--
  {path:'grade2/maths/level2',component:Level2Component},

  {path:'grade2/maths/level2/counting',component:CountingL2Component},
  {path:'grade2/maths/level2/additions',component:AdditionL2Component},
  {path:'grade2/maths/level2/substraction',component:SubstractionL2Component},
  {path:'grade2/maths/level2/money',component:MoneyL2Component  },
  {path:'grade2/maths/level2/length',component:LengthL2Component },
  {path:'grade2/maths/level2/shapes',component:ShapesL2Component},

    //-----sinhala
  {path:'grade1/sinhala',component:SinhalaComponent},
  {path:'grade1/sinhalaintro',component:SinhalaIntroComponent},
  {path:'grade1/sinhalaintro2',component: Sinhalaintro2Component},
 

    //-----sinhla grade1 level1--
  {path:'grade1/sinhala/level1',component:SinhalaLevel1Component },
  {path:'grade1/sinhala/level1/game1',component:PoemsxComponent },
  {path:'grade1/sinhala/level1/game2',component:WordsComponent},
  {path:'grade1/sinhala/level1/game3',component:SentencesComponent},
  {path:'grade1/sinhala/level1/game4',component:WordSelectiontionComponent},
  {path:'grade1/sinhala/level1/game5',component:StoriesComponent},
 //-----sinhala grade1 level2--
 {path:'grade1/sinhala/level2',component:SinhalaLevel2Component},
 {path:'grade1/sinhala/level2/game1',component: Poems1Component},
 {path:'grade1/sinhala/level2/game2',component:Words1Component},
 {path:'grade1/sinhala/level2/game3',component:Sentences1Component},
 {path:'grade1/sinhala/level2/game4',component:WordSelectiontion1Component},
 {path:'grade1/sinhala/level2/game5',component:Stories1Component},
  //-----sinhala grade2 level1--
  {path:'grade2/sinhala',component:Sinhala2Component},
  {path:'grade2/sinhalaintro1',component:Sinhalintro1Component},
  {path:'grade2/sinhalaintro2',component:Sinhalintro2Component},
  
  //level 1
  {path:'grade2/sinhala/level1',component:Level1sinhala2Component },
  {path:'grade2/sinhala/level1/game1',component: PoemsL1sL1Component},
  {path:'grade2/sinhala/level1/game2',component: WordsL1eComponent},
  {path:'grade2/sinhala/level1/game3',component:SentencesL1Component},
  {path:'grade2/sinhala/level1/game4',component:WordSelectionL1Component},
 

 //-----sinhala grade2 level2--
   {path:'grade2/sinhala/level2',component: Level2sinhala2Component},
   {path:'grade2/sinhala/level2/game1',component:Poems1L2Component },
   {path:'grade2/sinhala/level2/game2',component:Words1L2Component},
   {path:'grade2/sinhala/level2/game4',component:WordSelectionL2Component},
   {path:'grade2/sinhala/level2/game5',component:Stories1sL2Component },
   {path:'grade2/sinhala/level2/game3',component:Riddles1L2Component},


   
   
  //-----environment 
  {path:'grade1/environment',component:EnvironmentComponent}, 
  //----environment grade1 level1--
  {path:'grade1/environment/level1',component: EnvLevel1Component},
  
  {path:'grade1/environment/level1/video1',component:Video1Component},
  {path:'grade1/environment/level1/video2',component:Video2Component},
  {path:'grade1/environment/level1/video3',component:Video3Component},
  {path:'grade1/environment/level1/video4',component:Video4Component},

  {path:'grade1/environment/level1/game1',component:EnvGrade1Level1Game1Component},
  {path:'grade1/environment/level1/game2',component:EnvGrade1Level1Game2Component},
  {path:'grade1/environment/level1/game3',component:EnvGrade1Level1Game3Component},
  {path:'grade1/environment/level1/game4',component:EnvGrade1Level1Game4Component},
  {path:'grade1/environment/level1/game5',component:EnvGrade1LevelGame5Component},
 {path:'grade1/environment/level1/schoolgame',component:SchoolGameComponent},
  

  //-----environment grade1 level2--

  {path:'grade1/environment/level2/video1',component:VideoL1G1Component},
  {path:'grade1/environment/level2/video2',component:Video2L1G1Component},
  {path:'grade1/environment/level2/video3',component:Video3L1G1Component},
  {path:'grade1/environment/level2/video4',component:Video4L1G1Component},
  {path:'grade1/environment/level2/video5',component:Video5L1G1Component},


  {path:'grade1/environment/level2',component: EnvLevel2Component},
  {path:'grade1/environment/level2/game1',component:EnvGrade1Level2Game1Component},
  {path:'grade1/environment/level2/game2',component:EnvGrade1Level2Game2Component},
  {path:'grade1/environment/level2/game3',component:EnvGrade1Level2Game3Component},
  {path:'grade1/environment/level2/game4',component:EnvGrade1Level2Game4Component},
  {path:'grade1/environment/level2/game5',component:EnvGrade1Level2Game5Component},


  //============environmentt grade 2 level 1====================
  //-----environment 
  {path:'grade2/environment',component:Environment2Component}, 

  {path:'grade2/environment/level1',component:ELevel1Component},
  {path:'grade2/environment/level1/game1',component:Game1G2L1Component},
  {path:'grade2/environment/level1/game2',component:Game2G2L1Component},
  {path:'grade2/environment/level1/game3',component:Game3Component},
  {path:'grade2/environment/level1/game4',component:Game4Component},

  {path:'grade2/environment/level1/video1',component:G2video1Component},
  {path:'grade2/environment/level1/video2',component:G2video2Component},
  {path:'grade2/environment/level1/video3',component:G2video3Component},
  {path:'grade2/environment/level1/video4',component:G2video4Component},

  //==================environment grade 2 level 2 ======================================

  {path:'grade2/environment/level2',component: ELevel2Component},
  {path:'grade2/environment/level2/game1',component: Game001Component},
  {path:'grade2/environment/level2/game2',component: Game002Component},
  {path:'grade2/environment/level2/game3',component: Game003Component},
  {path:'grade2/environment/level2/game4',component: Game004Component},
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
    Countingconcepts1Component,
    Counting1Component,
    Substractions1Component,
    Money1Component,
    Length1Component,
    Width1Component,
    Volume1Component,
    Shapes1Component,
    Shapes2Component,
    Length2Component,
    Money2Component,
    Counting2Component,
    Countingconcepts2Component,
    Additions2Component,
    SinhalaLevel1Component,
    SinhalaLevel2Component,
    EnvLevel2Component,
    EnvLevel1Component,
    EnvGrade1Level1Game1Component,
    EnvGrade1Level1Game2Component,
    EnvGrade1Level1Game3Component,
    EnvGrade1Level1Game4Component,
    EnvGrade1Level2Game1Component,
    EnvGrade1Level2Game2Component,
    EnvGrade1Level2Game3Component,
    EnvGrade1Level2Game4Component,
    SchoolGameComponent,
    Maths2Component,
    Sinhala2Component,
    Environment2Component,
    MLevel1Component,
    MLevel2Component,
    CountingL1Component,
    AdditionL1Component,
    SubstractionL1Component,
    MoneyL1Component,
    ShapesL1Component,
    LengthL1Component,
    LengthL2Component,
    MoneyL2Component,
    SubstractionL2Component,
    AdditionL2Component,
    CountingL2Component,
    ShapesL2Component,
    EmotiondetectorComponent,
    AchievementsComponent,
    LeaderboardComponent,
    SentencesComponent,
    WordsComponent,
    Poems1Component,
    Words1Component,
    Sentences1Component,
 
    WordSelectiontionComponent,
    WordSelectiontion1Component,
    Level1sinhala2Component,
    Level2sinhala2Component,
    Words1L2Component,
    Poems1L2Component,
    // Sentences1L2Component,
    WordSelectionL2Component,
    WordSelectionL1Component,
    WordsL1eComponent,
    SentencesL1Component,
    PoemsL1sL1Component,
    StoriesComponent,
    Stories1Component,
    Stories1sL2Component,
    Riddles1L2Component,
    SinhalaIntroComponent,
    Sinhalaintro2Component,
    Sinhalintro1Component,
    Sinhalintro2Component,
    Game001Component,
    Game002Component,
    Game003Component,
    Game004Component,
    PoemsxComponent,
    VideoL1G1Component,
    Video2L1G1Component,
    Video3L1G1Component,
    Video4L1G1Component,
    Video5L1G1Component,
    EnvGrade1Level2Game5Component,
    EnvGrade1LevelGame5Component,
    ELevel1Component,
    ELevel2Component,
    G2video1Component,
    G2video2Component,
    G2video3Component,
    G2video4Component,
    Game1G2L1Component,
    Game2G2L1Component,
    Game1G2L1Component,
    Game3Component,
    Game4Component,
    
    
  

  
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
    NgxPaginationModule,
  ],
  providers: [LoginService, RegisterService, DataService, BlockUiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
