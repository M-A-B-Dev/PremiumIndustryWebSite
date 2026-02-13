import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Accueil } from './app/pages/accueil/accueil';
import { Produits } from './app/pages/produits/produits';
import { Portfolio } from './app/pages/portfolio/portfolio';
import { Contact } from './app/pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                component: Accueil
            },
            {
                path: 'produits',
                component: Produits
            },
            {
                path: 'portfolio',
                component: Portfolio
            },
            {
                path: 'contact',
                component: Contact
            }
        ]
    },

    {
        path: 'notFound',
        component: Notfound
    },
    {
        path: '**',
        redirectTo: '/notFound'
    }
];
