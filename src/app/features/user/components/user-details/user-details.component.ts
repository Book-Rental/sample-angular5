import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../../../core/services/user-service/user.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user: User = null;

  public mode = 'view';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.user = null;
      const userId = +params['id'];
      if (userId) {
        this.mode = 'view';
        this.userService.getById(userId).subscribe((data) => {
          this.user = data;
        });
      } else {
        this.mode = 'new';
        this.user = new User();
      }
    });
  }

  public edit() {
    this.mode = 'edit';
  }

  public save() {
    this.userService.save(this.user).subscribe((u) => {
      this.router.navigate(['users']);
    }, (error) => {
      // log error here
    });
  }

  back() {
    this.location.back();
  }

}
