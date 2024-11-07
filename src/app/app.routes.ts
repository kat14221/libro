import { Routes } from '@angular/router';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { LibroListComponent } from './componentes/libro/libro.component'; 

export const routes: Routes = [
    {
        path:'',
        component:NabvarComponent,
        title:'principal'
    },
    {
        path:'autor',
        component:AutorComponent,
        title:'Soy Autor'
    },
    {
        path:'libro',
        component:LibroListComponent,
        title:'Soy Libro'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }

];