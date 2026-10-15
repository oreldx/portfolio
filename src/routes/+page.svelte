<script>
    import { experienceItems } from "data/experience";
    import { projectsItems } from "data/projects";
    import { skills } from "data/skills";
    import showdown from "showdown";
    import { t } from "../lib/i18n";
    import SummaryCard from "$lib/components/SummaryCard.svelte";
    import Tag from "$lib/components/Tag.svelte";

    const converter = new showdown.Converter();

    const featuredProject = $derived(projectsItems.find((item) => item.featured));
    const featuredExperience = $derived(experienceItems.find((item) => item.featured));
    const featuredSkills = $derived(Object.values(skills).filter((skill) => skill.featured));
</script>

<div class="w-full grid grid-cols-2 grid-rows-[auto_auto_auto] gap-4">
    <div class="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
        <SummaryCard
            sectionKey="about"
            htmlContent={converter.makeHtml($t("summary.about.desc"))}
        />
    </div>

    <div class="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1">
        <SummaryCard sectionKey="skills">
            <ul class="flex flex-col gap-2 mt-2">
                {#each featuredSkills as skill}
                    <Tag icon={skill.icon} type={skill.type} name={skill.name} />
                {/each}
            </ul>
        </SummaryCard>
    </div>

    <div class="col-span-2">
        {#if featuredExperience}
            <SummaryCard
                sectionKey="experience"
                secondaryLink={featuredExperience.readMore
                    ? `/experience/${featuredExperience.key}`
                    : undefined}
            >
                <p class="mt-2">{$t(`experience.${featuredExperience.key}.title`)}</p>
                <p class="text-sm text-zinc-600 dark:text-zinc-400">
                    {$t(`experience.${featuredExperience.key}.desc`)}
                </p>
            </SummaryCard>
        {/if}
    </div>

    <div class="col-span-2">
        {#if featuredProject}
            <SummaryCard
                sectionKey="project"
                secondaryLink={featuredProject.readMore
                    ? `/project/${featuredProject.key}`
                    : undefined}
            >
                <p class="mt-2">{$t(`project.${featuredProject.key}.title`)}</p>
                <p class="text-sm text-zinc-600 dark:text-zinc-400">
                    {$t(`project.${featuredProject.key}.desc`)}
                </p>
            </SummaryCard>
        {/if}
    </div>
</div>
