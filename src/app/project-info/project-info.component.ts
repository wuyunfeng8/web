import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { projects } from "../items-data";
@Component({
  selector: "app-project-info",
  templateUrl: "./project-info.component.html",
  styleUrls: ["./project-info.component.scss"]
})
export class ProjectInfoComponent implements OnInit {
  @ViewChild("video") videoplayer: any;
  private item: string;
  private you: boolean = false;
  private project: any;
  private title: string;
  private url: string;
  private yuan: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.item = params["name"];
    });
  }

  ngOnInit() {
    projects.map(item => {
      if (item.clname == this.item) {
        this.title = item.name;
        this.url = item.view[0].url;
        this.you = true;
        this.yuan = true;
        this.project = item;
      }
    });
  }

  change = item => {
    this.title = item.title;
    this.url = item.url;
    this.videoplayer.nativeElement.load();
  };
}
