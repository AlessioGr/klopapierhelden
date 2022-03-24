<script lang="ts">

    let ordered = false;
    function handleClick() {
        ordered = true;
    }
</script>


<h1 class="text-center text-5xl font-bold mt-10">Klopapier leer?</h1>
<p class="mt-4 text-center">Bestellen Sie jetzt super günstiges Klopapier für 2€ pro Rolle</p>

<div class="flex mt-4 justify-center flex-col max-w-600px m-auto text-center items-center">
    {#if ordered === false}
        <label class="mr-3 flex items-center" for="fname">Dein Name</label>
        <input class="border-solid border-blue-300 rounded-md border-4" type="text" id="fname" name="fname"><br>

        <label class="mr-3 flex items-center" for="amount">Wie viel Klopapier benötigst du?</label>
        <input class="border-solid border-blue-300 rounded-md border-4" type="number" id="amount" name="amount"><br>

        <label class="mr-3 flex items-center" for="location">Wo kann ich dich finden?</label>
        <input class="border-solid border-blue-300 rounded-md border-4" type="text" id="location" name="location"><br><br>

        <button on:click={handleClick} class="p-4 bg-blue-600 rounded-md max-w-300px flex text-white transition-all	hover:(bg-blue-800 transform scale-110)">
            Jetzt bestellen
        </button>
    {:else}
        <p class="font-bold text-xl">Vielen Dank für Ihre Bestellung!</p>
    {/if}

</div>
