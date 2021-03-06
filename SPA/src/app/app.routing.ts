import {NgModule} from '@angular/core'
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
    { path: 'Home', component: HomeComponent},
    { path: 'Heroes', component: HeroesComponent},
    { path: 'About', component: AboutComponent},
    { path: '**', pathMatch: 'full',redirectTo:'Home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}