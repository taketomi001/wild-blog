import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
// import { HeaderComponent } from "../../components/header/header.component";
import { ArticleListComponent } from "../../components/article-list/article-list.component";

@Component({
  selector: 'app-home',
  imports: [ ArticleListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
