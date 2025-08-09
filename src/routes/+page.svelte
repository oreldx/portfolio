<script>
    import Icon from "@iconify/svelte";
    import { experienceItems } from "data/experience";
    import { projectsItems } from "data/projects";
    import { skills } from "data/skills";
    import showdown from "showdown";
    import { t } from "../lib/i18n";
    import SummaryCard from "$lib/components/SummaryCard.svelte";

    const converter = new showdown.Converter();

    const featuredProject = $derived(projectsItems.find((item) => item.featured));
    const featuredExperience = $derived(experienceItems.find((item) => item.featured));
    const featuredSkills = $derived(Object.values(skills).filter((skill) => skill.featured));
</script>

<div class="w-full grid grid-cols-2 grid-rows-[auto_auto_auto] gap-4">
    <SummaryCard sectionKey="about" htmlContent={converter.makeHtml($t("summary.about.desc"))} />

    <SummaryCard sectionKey="skills">
        <ul class="flex flex-col gap-2 mt-2">
            {#each featuredSkills as skill}
                <li class="flex items-center gap-2">
                    <Icon icon={skill.icon} class="w-6 h-6" />
                    <span>{skill.name}</span>
                </li>
            {/each}
        </ul>
    </SummaryCard>

    {#if featuredProject}
        <div class="col-span-2">
            <SummaryCard
                sectionKey="project"
                secondaryLink={featuredProject.readMore
                    ? `/project/${featuredProject.key}`
                    : undefined}
            >
                <p class="mt-2">{$t(`project.${featuredProject.key}.title`)}</p>
                <p class="text-sm text-gray-500">{$t(`project.${featuredProject.key}.desc`)}</p>
            </SummaryCard>
        </div>
    {/if}

    {#if featuredExperience}
        <div class="col-span-2">
            <SummaryCard
                sectionKey="experience"
                secondaryLink={featuredExperience.readMore
                    ? `/experience/${featuredExperience.key}`
                    : undefined}
            >
                <p class="mt-2">{$t(`experience.${featuredExperience.key}.title`)}</p>
                <p class="text-sm text-gray-500">
                    {$t(`experience.${featuredExperience.key}.desc`)}
                </p>
            </SummaryCard>
        </div>
    {/if}
</div>
