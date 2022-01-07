import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interface';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.css']
})
export class DisplaypageComponent implements OnInit {
  public Contacts:Users[]=[]
  public Ediobj:Users={
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    phoneNum:"" 
  }

  public searchkey:string=""
  constructor(private udata:UsersService) { }

  ngOnInit(): void {
this.GetUsers();
  }
  GetUsers(){
   this.udata.getAllUsers().subscribe((res)=>{
     this.Contacts=res
     console.log(res)
     console.log(this.Contacts)
   })
  }
DeleteContact(id:number){
  this.udata.DeleteUser(id).subscribe((res)=>{
    this.GetUsers();
  })
}
 upDate(upData:any){
  upData.id = this.Ediobj.id;
this.udata.UpDateContact(upData).subscribe((res)=>{
  this.GetUsers()
})
 }
}
