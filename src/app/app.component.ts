import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NewsService} from "./services/news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterViewInit, OnInit{
  title = 'NewsApp';
  @ViewChild(MatSidenav) sideNav! : MatSidenav;
  source :any  = [];
  article: any= [];
  // I have a side bare ere now i want to open and close this
  constructor(private observer : BreakpointObserver, private dc : ChangeDetectorRef, private newService : NewsService) {
  }
  ngOnInit(): void {
    this.newService.initArticle().subscribe(
      (res : any)=>{
        console.log(res.articles);
        this.article = res.articles;
      }
    );
    this.newService.initSource().subscribe(
      (res : any) =>
      {
        console.log(res.sources);
      this.source = res.sources;}
    )
  }
  ngAfterViewInit() {
    setTimeout(()=>{ this.sideNav.opened = true;
      this.observer.observe(['(max-width:787px)']).subscribe((res) =>
      {
        if(res?.matches){
          this.sideNav.mode = "over";
          this.sideNav.close();
        }
        else {
          this.sideNav.mode = "side";
          this.sideNav.open();
        }

      });

      },500);
    this.dc.detectChanges()


  }
  getSources(){}


}
