import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/RX'
import 'rxjs/add/operator/map'
@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getItem() {
    return this.http.get('/hello').map((resp: any) => {
      return resp
    })
  }
}
