import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {
  GamesArray = [];
  btn1: number;
  btn2: number;
  btn3: number;
  btn4: number;
  btn5: number;
  
  constructor(private gameService: GamesService) {
    this.btn1 = 0;
    this.btn2 = 0;
    this.btn3 = 0;
    this.btn4 = 0;
    this.btn5 = 0;
   }

  ngOnInit(): void {
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;

        if (this.GamesArray.indexOf("M21") !== -1){
            this.btn1 = this.btn1 + 1
          }
        if (this.GamesArray.indexOf("M22") !== -1){
          this.btn2 = this.btn2 + 1
          }
        if (this.GamesArray.indexOf("M23") !== -1){
        this.btn3 = this.btn3 + 1
          }
        if (this.GamesArray.indexOf("M24") !== -1){
          this.btn4 = this.btn4 + 1
          }
          if (this.GamesArray.indexOf("M25") !== -1){
            this.btn5 = this.btn5 + 1
            }

    }, (error) => {
      
    });
  }

}
