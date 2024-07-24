import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  userId = 'some-user-id'; // Giriş yapan kullanıcı ID'si
  buttonStats: { buttonName: string; clickCount: number }[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getButtonStats(this.userId).subscribe(stats => {
      this.buttonStats = stats;
    });
  }

  onButtonClick(buttonName: string): void {
    this.activityService.recordButtonClick(this.userId, buttonName).subscribe(response => {
      console.log('Button click recorded:', response);
    });
  }
}
