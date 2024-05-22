import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUsers:any[],searchTerm:string): any[] {
    const result:any = []
    if(!allUsers || !searchTerm){
      return allUsers
    }
    allUsers.forEach((item:any)=>{
      if(item['name'].toLowerCase().includes(searchTerm.toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
