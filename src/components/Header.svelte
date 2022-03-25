<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/assets/logo.png';

    const navLinks = [
        { link: '/', label: 'Startseite' },
        { link: '/vergleich', label: 'Klopapier Vergleich' }
    ];

</script>

<header class="flex justify-around items-center bg-blue-200 min-h-13">
    <a class="w-xs max-w-50px mr-30 flex gap-4 items-center" sveltekit:prefetch href="/">
        <img class="max-w-100px" src={logo} alt="Klopapierhelden Logo" />
        <span class="">Klopapierhelden</span>
    </a>
    <nav class="flex hidden md:block">
        <ul class="flex flex-row gap-4">
            {#each navLinks as navLink}
                <li class="{$page.url.pathname === navLink.link ? 'selected' : ''} list-none flex items-center">
                    <a class="text-primary-100 text-lg font-semibold no-underline" dark="text-white" sveltekit:prefetch href="{navLink.link}">{navLink.label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>