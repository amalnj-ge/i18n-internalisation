import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  stompClient: any;
  title = ' ';
  columns = ["Calibration File Name", "Time of Last Modification","Default", "Calibration Status"];
  groups=[{"calibrationFileName":"abcd","lastModified":"04-05-2016 11:36:11","_default":true,"calibrationStatus":"Prior Data"}]; 

  ngOnInit(): void {
    const socket = new SockJS('http://localhost:8082/stomp-endpoint');
    this.stompClient = Stomp.over(socket as any);
    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      const reponse = this.fetchURL();
      this.stompClient.subscribe('/topic/cal', (data:any) => {
        this.fetchData(JSON.parse((data.body)));
        console.log(JSON.parse((data.body)));
      });
    });
  }
  fetchURL(){
    return fetch('http://localhost:8082/defaultFiles/Sync', {
        method : 'GET',
        headers: {
          Accept: 'application/json',
        },
        mode: 'no-cors',
      });
  }
  
  fetchData(data:any){
    this.groups = data;
  }

}
