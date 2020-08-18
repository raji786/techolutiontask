import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { SortPipe } from '../sort.pipe';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-admitionform',
  templateUrl: './admitionform.component.html',
  styleUrls: ['./admitionform.component.scss']
})
export class AdmitionFormComponent   implements OnInit {

  constructor(private dataService: DataserviceService){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
 

  public leaveTypes: any = [];
  data = this.dataService.dataTypes();
  passArray=[];
  totalArray = [];

  computeMarks(a,b,c){

    let totalPass = 0;
    let d = Number(a);
    if(d>20){
      
      totalPass = totalPass+1;
    }
    let e = Number(b);
    if(e>20){
      totalPass = totalPass+1;
    }
    
    let f = Number(c);
    if(f>20){
      totalPass = totalPass+1;
    }

    let pass = false;
    if(totalPass==3){
      pass = true;
      
    }

    this.passArray.push(pass);
    this.totalArray.push(d+e+f);

   



    return d+e+f;
  }


}
