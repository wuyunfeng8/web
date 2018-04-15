import { Component, OnInit } from '@angular/core'
import { PostService } from '../../server/post.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  private postList: Array<any>
  constructor(private postServe: PostService, private router: Router) {}

  ngOnInit() {
    this.postServe.getPostList().subscribe(
      (postList: Array<any>) => {
        this.postList = postList
      },
      error => console.log('error=', error)
    )
  }

  goto(id) {
    this.router.navigate(['/post-list', id])
  }
}
