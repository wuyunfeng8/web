import { Component, OnInit } from '@angular/core'
import { PostService } from '../../server/post.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  private title: any
  private test: any
  constructor(private postServe: PostService) {}

  ngOnInit() {}

  addPost() {
    this.postServe.addPost(this.title, this.test)
  }
}
