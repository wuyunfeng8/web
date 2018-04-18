import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/RX'
import 'rxjs/add/operator/map'
@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPostItem(id) {
    return this.http.get('/api/v1/posts/' + id)
  }
  getPostList() {
    return this.http.get('/api/v1/posts')
  }
  addPost(title, text) {
    return this.http.post('/api/v1/posts', { title: title, content: text }).subscribe()
  }
}
