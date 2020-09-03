import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class GetImgService {

    constructor(private http: HttpClient) { }

    getData(value):Observable<any> {
        return this.http.get('http://pixabay.com/api/?key=18149840-f08c7b621161744adae186766&q='+value+'&image_type=photo');
    }
}
