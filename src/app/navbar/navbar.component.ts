import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  language: String = '';

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {
    this.language = localStorage.getItem("languageSelected") || 'english';
  }

  ChangeLanguage(lang:any) {
    const languageSelected = lang.target.value;
    localStorage.setItem("languageSelected",languageSelected);
    this.translateService.use(languageSelected);
  }
}
