import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-e-level1',
  templateUrl: './e-level1.component.html',
  styleUrls: ['./e-level1.component.css']
})
export class ELevel1Component implements OnInit {

  GamesArray = [];
  btn1: number;
  btn2: number;
  btn3: number;
  btn4: number;
  btn5: number;
  nxtBtn : number;
  levelGames1 = [];
  constructor(private gameService: GamesService) { 
    this.btn1 = 0;
    this.btn2 = 0;
    this.btn3 = 0;
    this.btn4 = 0;
    this.btn5 = 0;
    this.nxtBtn = 0;
    this.levelGames1 =["e11","e12", "e13", "e14","e15"];

  }

  ngOnInit(): void {
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;

        if (this.GamesArray.indexOf("e12") !== -1){
            this.btn1 = this.btn1 + 1
          }
        if (this.GamesArray.indexOf("e11") !== -1){
          this.btn2 = this.btn2 + 1
          }
        if (this.GamesArray.indexOf("e14") !== -1){
        this.btn3 = this.btn3 + 1
          }
        if (this.GamesArray.indexOf("e13") !== -1){
            this.btn4 = this.btn4 + 1
        }
        if (this.GamesArray.indexOf("e15") !== -1){
          this.btn5 = this.btn5 + 1
          }

          for (var i in this.GamesArray){
            for (var j in this.levelGames1) {
               // console.log(this.levelGames[j]); 
               if((this.levelGames1[j])==(this.GamesArray[i])) {
                //  console.log(this.GamesArray[i]);
                 this.nxtBtn = this.nxtBtn + 1;
               }
             }
           }

    }, (error) => {
      
    });
  }


}
