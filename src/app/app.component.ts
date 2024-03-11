import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
// import fetch from 'node-fetch';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    CommonModule,
    TableComponent,
    NavbarComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  ngOnInit(): void {

  }
}

