<script lang="ts">
    import "virtual:windi.css"
    import '../app.css';

    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';

    //WindiCSS DevTools supports (makes it so you can add classes in chrome inspect dev tools)
    import { browser } from "$app/env";
    if (browser) import("virtual:windi-devtools")

</script>

<Header />

<main>
    <slot />
</main>

<Footer />
