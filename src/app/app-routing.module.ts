import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpageComponent } from './Components/addpage/addpage.component';
import { DisplaypageComponent } from './Components/displaypage/displaypage.component';
import { HomepageComponent } from './Components/homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent
,children:[
  {path:"",component:DisplaypageComponent},
  {path:"ADDContact",component:AddpageComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
