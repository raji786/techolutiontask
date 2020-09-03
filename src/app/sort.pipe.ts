import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
 export class SortPipe implements PipeTransform {
 
  transform(value: Array<any>, args?:any): any {
    console.log(value)
    return value.sort((a,b)=>{
      let x = a.name;
      let y = b.name;
      if(x<y){
        return -1;
      }
      else{
        return 1;
      }
      return 0;
    });
  }
} 

