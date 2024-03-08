import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {CardComponent} from "./card/card.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'i18n-internalisation';
  constructor(private translateService: TranslateService) {
    // Initialize ngx-translate
    translateService.setDefaultLang('english'); // Set default language
    translateService.use(localStorage.getItem("languageSelected")||"english"); // Use a specific language (e.g., 'en' for English)
  }
}
