import { Routes } from '@angular/router';
import { ListArticles } from './components/list-articles/list-articles';
import { Details } from './components/details/details';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Add } from './components/add/add';

export const routes: Routes = [
    { path: "", component: ListArticles },
    { path: "list", redirectTo: "" },
    { path: "add", component: Add },
    { path: "details/:id", component: Details },
    { path: "**", component: PageNotFound },
];
