<script>
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";
    import Skill from "$lib/components/Skill.svelte";
    import { t } from "$lib/i18n";

    const skillSections = [
        {
            type: "backend",
            skills: [
                { icon: "simple-icons:python", name: "Python" },
                { icon: "simple-icons:nestjs", name: "NestJS" },
                { icon: "bxl:flask", name: "Flask" },
                { icon: "mdi:laravel", name: "Laravel" },
            ],
        },
        {
            type: "frontend",
            skills: [
                { icon: "mdi:react", name: "React" },
                { icon: "mdi:vuejs", name: "Vue.js" },
                { icon: "simple-icons:svelte", name: "Svelte" },
                { icon: "mdi:tailwind", name: "Tailwind" },
                { icon: "uiw:html5", name: "HTML" },
                { icon: "uiw:css3", name: "CSS" },
            ],
        },
        {
            type: "devops",
            skills: [
                { icon: "mdi:docker", name: "Docker" },
                { icon: "mdi:git", name: "Git" },
                { icon: "simple-icons:semaphoreci", name: "Semaphore" },
                { icon: "uil:linux", name: "Linux" },
                { icon: "devicon-plain:mysql", name: "MySQL" },
                { icon: "simple-icons:metabase", name: "Metabase" },
                { icon: "simple-icons:datadog", name: "Datadog" },
            ],
        },
        {
            type: "tools",
            skills: [
                { icon: "solar:figma-bold-duotone", name: "Figma" },
                { icon: "devicon-plain:photoshop", name: "Photoshop" },
                { icon: "devicon-plain:premierepro", name: "Premiere Pro" },
                { icon: "devicon-plain:notion", name: "Notion" },
            ],
        },
    ];
</script>

<div class="flex flex-col gap-4">
    {#each skillSections as section}
        <div
            class="flex flex-col gap-2 bg-gradient-to-tr from-zinc-950 to-zinc-900 rounded-xl p-5 shadow-md border border-zinc-700 hover:border-green-500 hover:shadow-[0px_0px_10px_5px_rgba(0,_255,_83,_0.1)] transition-colors duration-300"
        >
            <h2 class="text-white font-semibold">
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
