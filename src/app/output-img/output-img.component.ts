import { Component, OnInit, Inject } from '@angular/core';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store'
import { AddImg } from '../redux/img.action';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-output-img',
  templateUrl: './output-img.component.html',
  styleUrls: ['./output-img.component.scss']
})
export class OutputImgComponent implements OnInit {
  constructor(private store: Store<AppState>, public dialog: MatDialog) { }
  public newImg: [];
  ngOnInit() {
    this.store.select('imgPage').subscribe(({ img }) => {
      this.newImg = img;
      console.log(this.newImg);
    })
  }


  openDialog(item) {
    const dialogRef = this.dialog.open(DialogAddFavorites, {
      data: item
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
}


@Component({
  selector: 'dialog-add-favorites',
  templateUrl: './dialogAddToFavorites.html',
})
export class DialogAddFavorites implements OnInit {
  constructor( private store: Store<AppState>, @Inject(MAT_DIALOG_DATA) public data: any ) { }
  public item = this.data;
  public category: [];

  public addFavorites(item) {
    this.store.dispatch(new AddImg(item))
  }

  ngOnInit() {
    this.store.select('imgPage').subscribe(({ category }) => {
      this.category = category;
      
    })
  }
}
