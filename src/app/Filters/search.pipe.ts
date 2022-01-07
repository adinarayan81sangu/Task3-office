import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(UsersDtata:Users[],searchKey:any): any  {
    if(searchKey.trim().length == 0)
    return UsersDtata;
    else{
      return UsersDtata.filter((res:Users)=>{
        return res.firstname.toLowerCase().match(searchKey.toLowerCase())
        || res.lastname.toLowerCase().match(searchKey.toLowerCase())
        || res.email.toLowerCase().match(searchKey.toLowerCase())
       
      })
    }
  }

}
