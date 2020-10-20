import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  GamesArray = [];
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    var uname = localStorage.getItem("uname");
    this.gameService.getComletedGames(uname).subscribe((data:any[]) => {
      this.GamesArray = data;
    }, (error) => {
      
    });
  }

}
