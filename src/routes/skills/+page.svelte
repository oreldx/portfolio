<script>
    import Skill from "$lib/components/Skill.svelte";
    import { t } from "$lib/i18n";
    import { skillSections } from "data/skills";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
</script>

<div class="flex flex-col gap-4 w-full">
    {#each skillSections as section}
        <div
            class="flex flex-col gap-2 bg-linear-to-tr from-zinc-950 to-zinc-900 dark:from-stone-50 dark:to-stone-100 rounded-xl p-5 shadow-md border border-zinc-700 hover:border-accent hover:shadow-[0px_0px_10px_5px_rgba(0,255,83,0.1)] transition-colors duration-300"
        >
            <h2 class="font-semibold">
                {$t(`skills.${section.type}.title`)}
            </h2>
            <div
                class="flex flex-wrap gap-6 justify-center md:max-w-md lg:max-w-fit mx-auto"
                in:blur={{
                    amount: 5,
                    duration: 800,
                    easing: expoOut,
                }}
            >
                {#each section.skills as item}
                    <Skill icon={item.icon} name={item.name} />
                {/each}
            </div>
        </div>
    {/each}
</div>
