<script>
    import Skill from "$lib/components/Skill.svelte";

    const skillItems = [
        {icon: "simple-icons:python", color: "FFFFFF", name: "Python"},
        {icon: "ri:html5-fill", color: "FFFFFF", name: "HTML"},
        {icon: "uiw:css3", color: "FFFFFF", name: "CSS"},
        {icon: "mdi:react", color: "FFFFFF", name: "React"},
        {icon: "simple-icons:svelte", color: "FFFFFF", name: "Svelte"},
        {icon: "mdi:tailwind", color: "FFFFFF", name: "Tailwind"},
        {icon: "mdi:git", color: "FFFFFF", name: "Git"},
        {icon: "mdi:docker", color: "FFFFFF", name: "Docker"},
        {icon: "simple-icons:jupyter", color: "FFFFFF", name: "Jupyter Notebook"},
        {icon: "ri:notion-fill", color: "FFFFFF", name: "Notion"},
        {icon: "uil:linux", color: "FFFFFF", name: "Linux"},
        {icon: "devicon-plain:mysql", color: "FFFFFF", name: "MySQL"},
        {icon: "solar:figma-bold-duotone", color: "FFFFFF", name: "Figma"},
        {icon: "devicon-plain:photoshop", color: "FFFFFF", name: "Photoshop"},
        {icon: "devicon-plain:premierepro", color: "FFFFFF", name: "Premiere Pro"},
    ]
</script>

<div class="flex flex-wrap gap-6 justify-center md:max-w-md lg:max-w-fit mx-auto">
    {#each skillItems as item}
        <Skill icon={item.icon} color={item.color} />
    {/each}
</div>