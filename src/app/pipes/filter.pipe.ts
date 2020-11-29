import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const result = [];
    if(value != null && arg != null){
      for(const item of value){

        if(item.nombre){
          if(item.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
            result.push(item)
          }
        }
      }
    }
    if(!result[0]){
      return value;

    }else{
      return result;
    }
  }

}
