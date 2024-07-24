import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  userId = 'some-user-id'; // Giriş yapan kullanıcı ID'si

  constructor(private router: Router, private activityService: ActivityService) { }

  onButtonClick(buttonName: string): void {
    this.activityService.recordButtonClick(this.userId, buttonName).subscribe(response => {
      console.log('Button click recorded:', response);
      this.router.navigate([`/${buttonName}`]);
    });
  }
}
