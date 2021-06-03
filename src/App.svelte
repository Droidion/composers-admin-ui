<script lang="ts">
    import Router from 'svelte-spa-router'
    import {routes} from './routes'
</script>

<Router {routes}/>

<style lang="scss" global>
    // @use './styles/reset';
    @use './styles/colors';
    // @use './styles/buttons';

    @use 'bootstrap/scss/bootstrap';

    body {
        background-color: colors.$white-lilac
    }
</style>