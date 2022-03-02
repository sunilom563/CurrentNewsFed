import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service'


@Component({
  selector: 'app-buisness',
  templateUrl: './buisness.component.html',
  styleUrls: ['./buisness.component.css']
})
export class BuisnessComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  //buisness data
  topbuisDisplay:any =[];

  ngOnInit(): void {

    this._services.businessnews().subscribe((result)=>{
      console.log(result);
      this.topbuisDisplay = result.articles;
    })
  }

}
