import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent  {

  constructor(private Udata:UsersService,private rout:Router) { }

  
    POSTUser(data:any){
  this.Udata.PostUser(data).subscribe((res)=>{
         this.rout.navigate([''])
  })
    }
}
