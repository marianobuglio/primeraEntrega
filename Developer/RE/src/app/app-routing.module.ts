import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [


  {
    path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then( m => m.TareasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'minutas',
    loadChildren: () => import('./minutas/minutas.module').then( m => m.MinutasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reuniones',
    loadChildren: () => import('./reuniones/reuniones.module').then( m => m.ReunionesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
