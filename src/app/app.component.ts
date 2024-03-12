import { Component, AfterViewChecked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {CardComponent} from "./card/card.component";
import {TranslateService} from "@ngx-translate/core";
import {TableComponent} from "./table/table.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardComponent, TableComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewChecked{
  title = 'i18n-internalisation';
  startTime! : number
  viewCheckedTime! : number
  loading! : boolean
  memoryUsage! : number
  constructor(private translateService: TranslateService) {
    this.startTime = window.performance.now();
    this.loading = true;
    // Initialize ngx-translate
    translateService.setDefaultLang('english'); // Set default language
    translateService.use(localStorage.getItem("languageSelected")||"english"); // Use a specific language (e.g., 'en' for English)
  }

  ngAfterViewChecked() {
    this.viewCheckedTime = window.performance.now();
    this.loading = false;
  }

  protected readonly navigator = navigator;
}
