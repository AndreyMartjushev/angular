import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { MatDialog } from '@angular/material/dialog';

import { AppState } from '../redux/app.state';
import { DialogAddToFavorites } from '../dialog/dialogAddToFavorites';

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
    })
  }
  openDialog(item) {
    const dialogRef = this.dialog.open(DialogAddToFavorites, {
      data: item
    });
  }
}