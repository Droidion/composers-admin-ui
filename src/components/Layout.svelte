<script lang="ts">
    import { link } from 'svelte-spa-router'
</script>

<main>
    <nav class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="/composers" class="nav-link text-white" use:link>Composers</a>
            </li>
            <li class="nav-item">
                <a href="/performers" class="nav-link text-white" use:link>Performers</a>
            </li>
        </ul>
    </nav>
    <slot></slot>
</main>

<style lang="scss">
    main {
        display: flex;
        flex-wrap: nowrap;
        height: 100vh;
        max-height: 100vh;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .sidebar {
        width: 12rem;
    }

</style>