import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { query } from '_@angular_core@5.2.9@@angular/core/src/animation/dsl'
import { PostService } from '../../server/post.service'

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css'],
})
export class PostInfoComponent implements OnInit {
  private postId: any
  private item: any
  constructor(private route: ActivatedRoute, private postServe: PostService) {
    this.route.params.subscribe((params: Params) => {
      this.postId = params['id']
    })
  }

  ngOnInit() {
    this.postServe.getPostItem(this.postId).subscribe(
      item => {
        this.item = item
      },
      error => console.log('error=', error)
    )
  }
}
