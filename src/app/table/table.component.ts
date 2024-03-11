import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  stompClient: any;
  title = ' ';
  columns = ["Calibration File Name", "Time of Last Modification","Default", "Calibration Status"];
  groups=[{"calibrationFileName":"abcd","lastModified":"04-05-2016 11:36:11","_default":true,"calibrationStatus":"Prior Data"}];

  ngOnInit(): void {
    console.log(navigator.language);
    this.fetchJSON().then(res=> {
      return res.json();
    }).then(json=> {
      this.fetchData(json);
    });
    //this.fetchData(JSON.parse((data.body)));
    // const socket = new SockJS('http://localhost:8082/stomp-endpoint');
    // this.stompClient = Stomp.over(socket as any);
    // this.stompClient.connect({}, (frame: any) => {
    //   console.log('Connected: ' + frame);
    //   const reponse = this.fetchURL();
    //   this.stompClient.subscribe('/topic/cal', (data:any) => {
    //     this.fetchData(JSON.parse((data.body)));
    //     console.log(JSON.parse((data.body)));
    //   });
    // });
  }
  fetchJSON(){
    return fetch('../../assets/calibration-data/calibration-details.json');
  }

  fetchData(data:any){
    this.groups = data;
  }

}
