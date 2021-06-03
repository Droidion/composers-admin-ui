import Auth from './components/Auth.svelte';
import Composers from './components/Composers.svelte';
import Performers from './components/Performers.svelte';

export const routes = {
    '/': Auth,

    '/auth': Auth,

    '/composers': Composers,

    '/performers': Performers,

    '*': Auth,
}