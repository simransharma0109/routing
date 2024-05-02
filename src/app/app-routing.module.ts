import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [  
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to /home
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
];  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
