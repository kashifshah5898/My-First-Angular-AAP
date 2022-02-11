import { LoginComponent } from './login/login.component';
// import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authService/auth.guard';

const routes: Routes = [
  {
    path : 'Home-Page',
    canActivate : [AuthGuard],
    component : HomePageComponent
  },
  {
    path : 'Show-Data',
    canActivate : [AuthGuard],
    component : ShowDataComponent
  },
  {
    path : 'Show-Card',
    canActivate : [AuthGuard],
    component : CardsComponent
  },
  {
    path:'',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
