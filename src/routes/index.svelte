<script lang="ts">

    let ordered = false;
    let submit;

    let name = "";
    let rollen = "";
    let wofinden = "";
    let email = "";
    let nummer = "";

    function handleClick() {

        let falscheDaten = false;
        if(name === ""){
            falscheDaten = true;
        }
        if(rollen === ""){
            falscheDaten = true;
        }
        if(wofinden === ""){
            falscheDaten = true;
        }
        if(email === ""){
            falscheDaten = true;
        }
        if(nummer === ""){
            falscheDaten = true;
        }
        if(falscheDaten){
            alert("Du hast falsche Daten eingegeben du idiot!");
            return;
        }

        submit = fetch('/api', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                rollen: rollen,
                wofinden: wofinden,
                email: email,
                nummer: nummer
            }),
            headers: { 'content-type': 'application/json' },
        })
            .then((resp) => resp.json())
            .finally(() => setTimeout(() => (submit = null), 10000));

        ordered = true;
    }
</script>


<h1 class="text-center text-5xl font-bold mt-10">Klopapier leer?</h1>
<p class="mt-4 text-center">Bestellen Sie jetzt super günstiges Klopapier für 2€ pro Rolle</p>

<div class="flex mt-4 justify-center flex-col max-w-600px m-auto text-center items-center">
    {#if ordered === false}
        <label class="mr-3 flex items-center" for="fname">Dein Name</label>
        <input bind:value={name} class="border-solid border-blue-300 rounded-md border-4" type="text" id="fname" name="fname"><br>

        <label class="mr-3 flex items-center" for="amount">Wie viele Rollen Klopapier benötigst du?</label>
        <input bind:value={rollen} class="border-solid border-blue-300 rounded-md border-4" type="number" id="amount" name="amount"><br>

        <label class="mr-3 flex items-center" for="location">Wo kann ich dich finden?</label>
        <input bind:value={wofinden} class="border-solid border-blue-300 rounded-md border-4" type="text" id="location" name="location"><br>

        <label class="mr-3 flex items-center" for="email">E-Mail</label>
        <input bind:value={email} class="border-solid border-blue-300 rounded-md border-4" type="text" id="email" name="email"><br>

        <label class="mr-3 flex items-center" for="nummer">Nummer</label>
        <input bind:value={nummer} class="border-solid border-blue-300 rounded-md border-4" type="text" id="nummer" name="nummer"><br>

        <br>

        <button on:click={handleClick} class="p-4 bg-blue-600 rounded-md max-w-300px flex text-white transition-all	hover:(bg-blue-800 transform scale-110)">
            Jetzt bestellen
        </button>
    {:else}
        <p class="font-bold text-xl">Vielen Dank für Ihre Bestellung!</p>
    {/if}

</div>

{#if submit}
    {#await submit}
        <p>Sending...</p>
    {:then resp}
        <p>🎉 Done!</p>
        <pre>RESPONSE: {JSON.stringify(resp, null, 2)}</pre>
    {/await}
{/if}
