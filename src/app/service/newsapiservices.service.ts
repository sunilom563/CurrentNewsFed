import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsapiurl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=bb8035ad4bf2485db8d28bb4b2af902e" 

  techApi = "  https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=bb8035ad4bf2485db8d28bb4b2af902e" 

  //topheading ()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsapiurl);
  }
  
  technews():Observable<any>
  {
    return this._http.get(this.techApi);
  }


}
