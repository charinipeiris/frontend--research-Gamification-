import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-sinhala',
  templateUrl: './sinhala.component.html',
  styleUrls: ['./sinhala.component.css']
})
export class SinhalaComponent implements OnInit {
  GamesArray = [];
  levelGames1=[];
  levelGames2=[];
  btn1: number;
  btn2: number;
  sL1 : number;
  sL2 : number;
  constructor(private gameService: GamesService) { 
    this.btn1 = 0;
    this.btn2 = 0;
    this.levelGames1 =["S11","S12", "S13", "S14","S15"];
    this.levelGames2 =["S21","S22", "S23", "S24", "S25"];

  }

  ngOnInit(): void {    
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;
      // console.log(this.GamesArray)
      for (var i in this.GamesArray){
       for (var j in this.levelGames1) {
          // console.log(this.levelGames[j]); 
          if((this.levelGames1[j])==(this.GamesArray[i])) {
            // console.log(this.GamesArray[i]);
            this.btn1 = this.btn1+ 1
          }
        }
      }
  
  
      for (var i in this.GamesArray){
        for (var j in this.levelGames2) {
           // console.log(this.levelGames[j]); 
           if((this.levelGames2[j])==(this.GamesArray[i])) {
            //  console.log(this.GamesArray[i]);
             this.btn2 = this.btn2 + 1
           }
         }
       }
  
    }, (error) => {
      
    });
  
  
    var username = localStorage.getItem("uname");
    this.gameService.getStudentDetails(username).subscribe((data:any) => {
      this.sL1 = data.sL1;
      this.sL2 = data.sL2;
      // console.log(this.btn1);
      // console.log(this.btn1);
      if (this.sL1 == 0){
        if (this.btn1 == 5)
  
       {
            
            this.gameService.sendEmail({   
                level_completed : [
                {
                grade : "1 ශ්‍රේණිය",
                subject : "සිංහල",
                games : ["S11","S12", "S13", "S14","S15"],
                level : "1",
                column : "3"
                }
              ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
          }
        
      }
  
  // console.log(this.btn2);
      if (this.sL2 == 0){
        if (this.btn2 == 5)
  
       {
            
            this.gameService.sendEmail({   
                level_completed : [
                {
                grade : "1 ශ්‍රේණිය",
                subject : "සිංහල",
                games : ["S21","S22", "S23", "S24", "S25"],
                level : "2",
                column : "4"
                }
              ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
          }
        
      }
    }, (error) => {});
  
    }

}
