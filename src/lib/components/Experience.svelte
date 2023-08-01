<script>
    export let data;
</script>

{#if data}
    <a target="_blank" href="https://grytics.com/">
        <div class="experience-wrapper grid auto-cols-auto grid-rows-auto gap-3 items-center rounded-xl hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-l hover:drop-shadow-md p-4 transition-all">
                <div class="date font-bold whitespace-nowrap w-min mr-10 opacity-70">
                    {data.date}
                </div>
                <h3 class="text-white experience-title sm:col-start-2 font-bold">
                    {data.title}
                </h3>
                <h4 class="experience-type sm:col-start-2 font-semibold opacity-70">
                    {data.type}
                </h4>
                <div class="experience-desc sm:col-start-2 text-justify">
                    {data.desc}
                </div>
                <div class="experience-tags sm:col-start-2 flex flex-wrap gap-3">
                    {#each data.tags as tag}
                        <div class="text-secondary-light bg-secondary-dark bg-opacity-50 color rounded-full px-3 py-1">{tag}</div>
                    {/each}
                </div>
            </div>
    </a>
{/if}
