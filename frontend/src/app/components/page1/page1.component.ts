import { Component } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  userId = 'some-user-id'; // Giriş yapan kullanıcı ID'si

  constructor(private activityService: ActivityService) { }

  onButtonClick(buttonName: string): void {
    this.activityService.recordButtonClick(this.userId, buttonName).subscribe(response => {
      console.log('Button click recorded:', response);
    });
  }
}
