import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../../../core/services/user-service/user.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public displayedColumns = ['First Name', 'Last Name', 'Email'];

  public users: User[] = [];

  public dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.get().subscribe((data) => {
      this.users = data;
      this.dataSource = new MatTableDataSource<User>(this.users);
    });
  }

  navigateToRow(row: User) {
    this.router.navigate(['./', row.id], { relativeTo: this.route });
  }

}
