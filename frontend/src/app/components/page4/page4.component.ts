import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component {
  userId = 'some-user-id'; // Giriş yapan kullanıcı ID'si

  constructor(private router: Router, private activityService: ActivityService) { }

  onButtonClick(buttonName: string): void {
    this.activityService.recordButtonClick(this.userId, buttonName).subscribe(response => {
      console.log('Button click recorded:', response);
      this.router.navigate([`/${buttonName}`]);
    });
  }
}
