import { Routes, RouterModule } from '@angular/router';

import { FormularioGrid } from './formulario.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: FormularioGrid,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
