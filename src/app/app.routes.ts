import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'portfolio' , component:PortfolioComponent},
    {path:'contact' , component:ContactComponent},
    {path: '**' , component:NotfoundComponent}
];
