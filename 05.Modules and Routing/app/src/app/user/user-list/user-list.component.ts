import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  isLoading = false;
  users: User[] = [];

  constructor(
    private userService: UserService, 
    private globalLoaderService: GlobalLoaderService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  ngOnDestroy(): void {
    console.log('On Destroy invoked!');
  }

  fetchUsers() {
    // before fetch
    this.globalLoaderService.showLoader();

    // start fetching 
    this.userService.getUsers().subscribe(users => {
      this.users = users;

     // after fetched 
     this.globalLoaderService.hideLoader();
    });
  }

}
