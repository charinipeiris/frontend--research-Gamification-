import { Component, OnInit } from '@angular/core';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-m-level1',
  templateUrl: './m-level1.component.html',
  styleUrls: ['./m-level1.component.css']
})
export class MLevel1Component implements OnInit {
  GamesArray = [];
  btn1: number;
  btn2: number;
  btn3: number;
  btn4: number;
  btn5: number;
  btn6: number;
  constructor(private gameService: GamesService) {
    this.btn1 = 0;
    this.btn2 = 0;
    this.btn3 = 0;
    this.btn4 = 0;
    this.btn5 = 0;
    this.btn6 = 0;
   }
 
  ngOnInit(): void {
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;

        if (this.GamesArray.indexOf("m11") !== -1){
            this.btn1 = this.btn1 + 1
          }
        if (this.GamesArray.indexOf("m12") !== -1){
          this.btn2 = this.btn2 + 1
          }
        if (this.GamesArray.indexOf("m13") !== -1){
        this.btn3 = this.btn3 + 1
          }
        if (this.GamesArray.indexOf("m14") !== -1){
          this.btn4 = this.btn4 + 1
          }
        if (this.GamesArray.indexOf("m15") !== -1){
           this.btn5 = this.btn5 + 1
          }
        if (this.GamesArray.indexOf("m16") !== -1){
          this.btn6 = this.btn6 + 1
          }
    }, (error) => {
      
    });
  }

  



}


