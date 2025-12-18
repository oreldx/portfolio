<script>
    import AppPage from "$lib/components/AppPage.svelte";
    import Skill from "$lib/components/Skill.svelte";
    import { t } from "$lib/i18n";
    import { skillSections } from "data/skills";
</script>

<AppPage key="skills">
    {#each skillSections as section}
        <div class="flex flex-col gap-2 card">
            <h2 class="font-semibold">
                {$t(`skills.${section.type}.title`)}
            </h2>
            <div class="flex flex-wrap gap-6 justify-center lg:max-w-fit mx-auto">
                {#each section.skills as item}
                    <Skill icon={item.icon} name={item.name} />
                {/each}
            </div>
        </div>
    {/each}
</AppPage>
