<script>
    import Skill from "$lib/components/Skill.svelte";
    import { t } from "$lib/i18n";
    import { skillSections } from "data/skills";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
</script>

<div
    class="flex flex-col gap-4 w-full"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    {#each skillSections as section}
        <div class="flex flex-col gap-2 card">
            <h2 class="font-semibold">
                {$t(`skills.${section.type}.title`)}
            </h2>
            <div class="flex flex-wrap gap-6 justify-center md:max-w-md lg:max-w-fit mx-auto">
                {#each section.skills as item}
                    <Skill icon={item.icon} name={item.name} />
                {/each}
            </div>
        </div>
    {/each}
</div>
