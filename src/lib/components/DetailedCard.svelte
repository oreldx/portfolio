<script>
    export let data;
</script>

{#if data}
    <a target="_blank" href={data.url ? data.url : null}>
        <div
            class="detailed-card-wrapper grid auto-cols-auto grid-rows-auto gap-3 items-center rounded-xl hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-l hover:drop-shadow-md p-4 transition-all"
        >
            <div class="date font-bold whitespace-nowrap w-min mr-10 opacity-70">
                {data.date}
            </div>
            <h3 class="text-white detailed-card-title sm:col-start-2 font-bold">
                {data.title}
            </h3>
            <h4 class="detailed-card-type sm:col-start-2 font-semibold opacity-70">
                {data.type}
            </h4>
            <div class="detailed-card-desc sm:col-start-2 text-justify">
                {data.desc}
            </div>
            <div class="detailed-card-tags sm:col-start-2 flex flex-wrap gap-3">
                {#each data.tags as tag}
                    <div
                        class="text-secondary-light bg-secondary-dark bg-opacity-50 color rounded-full px-3 py-1"
                    >
                        {tag}
                    </div>
                {/each}
            </div>
        </div>
    </a>
{/if}
