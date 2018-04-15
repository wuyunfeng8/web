import { Component, OnInit } from '@angular/core'
import { HomeService } from '../../server/home.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string

  constructor(private homeServe: HomeService) {}

  ngOnInit() {
    this.homeServe.getItem().subscribe(
      item => {
        this.name = item[0].name
      },
      error => console.log('error=', error)
    )
  }
}
