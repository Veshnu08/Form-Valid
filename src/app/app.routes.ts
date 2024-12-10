import {  Routes } from '@angular/router';
import { Reactive2Component } from './reactive2/reactive2.component';
import { SampleComponent } from './sample/sample.component';



export const routes: Routes = [
    { path: 'reactive2', component: Reactive2Component },
    { path: 'sample', component: SampleComponent },
    { path: '', redirectTo: 'reactive2', pathMatch: 'full' }, // Default route
];

