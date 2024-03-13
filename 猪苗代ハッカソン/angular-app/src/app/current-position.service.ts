import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentPositionService implements OnInit {
  userIp = '';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.loadUserInfo();
  }
  loadUserInfo() {
    this.httpClient.get('https://jsonip.com/').subscribe(
      (response: any) => {
        this.userIp = response.ip;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
