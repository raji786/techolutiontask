import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicationform',
  templateUrl: './aplicationform.component.html',
  styleUrls: ['./aplicationform.component.scss']
})
export class AplicationformComponent implements OnInit {
  
 public registarionData:any = [];
 public statusMessage: boolean = false;
 public compareYear: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  

 validateYearOfPassing(event){
   let userEnterYear = event.target.value;
   let maxYear = parseInt('2017');
   if(userEnterYear >= maxYear){
    this.compareYear = true;
   }
   else{
    this.compareYear = false;
   }
 }
  
  onSubmit(data){
  if(data){
    let res:any = Object.entries(data);
    this.registarionData = res;
    console.log("Registarion Confirm Data", this.registarionData); //Please check for submited data in console
    this.statusMessage = true;
  }
  else{
    this.statusMessage = false;
  }
}

}
