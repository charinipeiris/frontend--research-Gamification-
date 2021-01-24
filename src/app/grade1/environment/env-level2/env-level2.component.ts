import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-env-level2',
  templateUrl: './env-level2.component.html',
  styleUrls: ['./env-level2.component.css']
})
export class EnvLevel2Component implements OnInit {

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
    this.levelGames1 =["E21","E22", "E23", "E24","E25"];

  }

  ngOnInit(): void {
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;

        if (this.GamesArray.indexOf("E22") !== -1){
            this.btn1 = this.btn1 + 1
          }
        if (this.GamesArray.indexOf("E21") !== -1){
          this.btn2 = this.btn2 + 1
          }
        if (this.GamesArray.indexOf("E24") !== -1){
        this.btn3 = this.btn3 + 1
          }
        if (this.GamesArray.indexOf("E23") !== -1){
            this.btn4 = this.btn4 + 1
        }
        if (this.GamesArray.indexOf("E15") !== -1){
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

