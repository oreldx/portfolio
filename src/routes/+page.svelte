<script>
    import Icon from "@iconify/svelte";
    import { experienceItems } from "data/experience";
    import { projectsItems } from "data/projects";
    import { skills } from "data/skills";
    import showdown from "showdown";
    import { t } from "../lib/i18n";
    import SummaryCard from "$lib/components/SummaryCard.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import { quartIn } from "svelte/easing";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    let mounted = $state(false);
    onMount(() => (mounted = true));

    const converter = new showdown.Converter();

    const featuredProject = $derived(projectsItems.find((item) => item.featured));
    const featuredExperience = $derived(experienceItems.find((item) => item.featured));
    const featuredSkills = $derived(Object.values(skills).filter((skill) => skill.featured));
</script>

{#if mounted}
    <div class="w-full grid grid-cols-2 grid-rows-[auto_auto_auto] gap-4">
        <div
            class="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
            in:fly={{
                duration: 300,
                y: -100,
                delay: 100,
                easing: quartIn,
            }}
        >
            <SummaryCard
                sectionKey="about"
                htmlContent={converter.makeHtml($t("summary.about.desc"))}
            />
        </div>

        <div
            class="col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1"
            in:fly={{
                duration: 300,
                x: 100,
                delay: 150,
                easing: quartIn,
            }}
        >
            <SummaryCard sectionKey="skills">
                <ul class="flex flex-col gap-2 mt-2">
                    {#each featuredSkills as skill}
                        <Tag icon={skill.icon} type={skill.type} name={skill.name} />
                    {/each}
                </ul>
            </SummaryCard>
        </div>

        <div
            in:fly={{
                duration: 300,
                y: 100,
                delay: 250,
                easing: quartIn,
            }}
            class="col-span-2"
        >
            {#if featuredProject}
                <SummaryCard
                    sectionKey="project"
                    secondaryLink={featuredProject.readMore
                        ? `/project/${featuredProject.key}`
                        : undefined}
                >
                    <p class="mt-2">{$t(`project.${featuredProject.key}.title`)}</p>
                    <p class="text-sm text-gray-500">{$t(`project.${featuredProject.key}.desc`)}</p>
                </SummaryCard>
            {/if}
        </div>

        <div
            class="col-span-2"
            in:fly={{
                duration: 300,
                y: 100,
                delay: 350,
                easing: quartIn,
            }}
        >
            {#if featuredExperience}
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
            {/if}
        </div>
    </div>
{/if}
