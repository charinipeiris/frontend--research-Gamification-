import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  GamesArray = []; 
  GamesArray_M = [];
  GamesArray_S = [];
  GamesArray_E = [];
  config_M: any;
  config_S: any;
  config_E: any;
// x
  

  constructor(private gameService: GamesService) {
          //Create dummy data
    // for (var i = 0; i < this.collection.count; i++) {
    //     this.collection.data.push(
    //       {
    //         id: i + 1,
    //         value: "items number " + (i + 1)
    //       }
    //     );
    //   }
  
      this.config_M = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.GamesArray_M.length
      };

      this.config_S = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.GamesArray_S.length
      };
      
      this.config_E = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.GamesArray_E.length
      };
    }
  


  ngOnInit(): void {
    var uname = localStorage.getItem("uname");
    this.gameService.getCompletedGamesMaths(uname).subscribe((data:any[]) => {
      this.GamesArray_M = data;
    }, (error) => {
      
    });

    this.gameService.getCompletedGamesSinhala(uname).subscribe((data:any[]) => {
      this.GamesArray_S = data;
    }, (error) => {
      
    });

    this.gameService.getCompletedGamesEnv(uname).subscribe((data:any[]) => {
      this.GamesArray_E = data;
    }, (error) => {
      
    });

  }

  pageChanged_M(event){
    this.config_M.currentPage = event;
  }

  pageChanged_S(event){
    this.config_S.currentPage = event;
  }

  pageChanged_E(event){
    this.config_E.currentPage = event;
  }


}
