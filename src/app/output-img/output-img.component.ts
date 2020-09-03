import { Component, OnInit } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store'


@Component({
  selector: 'app-output-img',
  templateUrl: './output-img.component.html',
  styles: [
  ]
})
export class OutputImgComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public newImg: [];
  ngOnInit() {
    
    this.store.select('imgPage').subscribe(img => {
      this.newImg = img;
      console.log(this.newImg);
      
    })
    setTimeout(() => {
      this.store.select('imgPage').subscribe(img => {
        this.newImg = img;
        console.log(this.newImg);
        
      })
    }, 5000);
    
  }

}
