import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Subject } from "../subject";
import { subjects } from "../items-data";
@Component({
  selector: "app-study",
  templateUrl: "./study.component.html",
  styleUrls: ["./study.component.scss"]
})
export class StudyComponent implements OnInit {
  constructor(private router: Router) {}
  items = subjects;
  ngOnInit() {}

  goto = event => {
    this.router.navigate(["/study", event]);
  };
}
