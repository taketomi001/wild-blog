import { Component } from '@angular/core';

// import { HeaderComponent } from './components/header/header.component';
// import { ArticleListComponent } from './components/article-list/article-list.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
// import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de CE !-blog';
}
