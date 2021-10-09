import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
