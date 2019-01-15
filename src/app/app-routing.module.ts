import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceCanvasComponent } from './space-canvas/space-canvas.component';
import { PlanetsComponent } from './planets/planets.component';
import { RoutesComponent } from './routes/routes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ { path: '', component: SpaceCanvasComponent },
{ path: 'planets', component: PlanetsComponent },
{ path: 'routes', component: RoutesComponent },
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
