<script lang="ts">
    import { page } from '$app/stores';

    const navLinks = [
        { link: '/', label: 'Startseite' },
        { link: '/kaufen', label: 'Klopapier kaufen' },
        { link: '/vergleich', label: 'Klopapier vergleich' }
    ];

</script>

<header class="flex justify-center bg-blue-200">
    <a class="w-xs max-w-50px mr-30" sveltekit:prefetch href="/">
        <img class="max-w-100px" src="https://cdn03.plentymarkets.com/m9pqi58dsca6/item/images/42605608/full/Papernet-416599-Toilettenpapier-3-lagig-8-Rollen---42605608-Papernet-Toilettenpapier-Klopapier-WC-Rollen-weiss-3-lagig.jpg" alt="Klopapierhelden Logo" />
    </a>
    <nav class="flex">
        <ul class="flex flex-row gap-4">
            {#each navLinks as navLink}
                <li class="{$page.url.pathname === navLink.link ? 'selected' : ''} list-none flex items-center">
                    <a class="text-primary-100 text-lg font-semibold no-underline" dark="text-white" sveltekit:prefetch href="{navLink.link}">{navLink.label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>