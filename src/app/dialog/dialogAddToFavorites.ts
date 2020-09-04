import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { AddImg } from '../redux/img.action';


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialogAddToFavorites.html',
})
export class DialogAddToFavorites {
  constructor ( @Inject(MAT_DIALOG_DATA) public data: any, private store: Store<AppState> ) { }

  public category: [];
  public currentCategory: "noCategory";
  public itemSave;

  ngOnInit() {
    this.store.select('imgPage').subscribe(({ category }) => {
      this.category = category;
    })

    this.itemSave = Object.assign({}, this.data);
    
  }
  onChange(event) {
    this.currentCategory = event.target.options[event.target.options.selectedIndex].value;
    this.itemSave.category = this.currentCategory;
    console.log(this.itemSave);
    
  }

  public addFavorites() {
    this.store.dispatch(new AddImg(this.itemSave))
  }
}