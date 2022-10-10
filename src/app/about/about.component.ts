import { InputModel } from './../input-model';
import { Model } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  checkAll:boolean=true

  newModel = new Model("emre",22)

  items: Array<InputModel> = this.newModel.item

  addItem(item:string){
    this.newModel.insertItem(item)
  }
  log(x:any):void {
    console.log(x);
   }

  changeAllCheck(){
    if(this.checkAll==true){
      this.checkAll=false
  }
  else{
    this.checkAll=true
  }
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
