import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdduserComponent } from './adduser/adduser.component';
import { Checkusercomponent } from './checkuser/checkuser.component';
import { ListusersComponent } from './listusers/listusers.component';
const routes: Routes = [
  {
    path: 'adduser',
    component: AdduserComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'checkuser',
    component: Checkusercomponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    data: { animation: 'isRight' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
