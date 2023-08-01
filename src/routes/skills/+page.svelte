<script>
    import Skill from "$lib/components/Skill.svelte";
    import { expoOut } from "svelte/easing";
    import { blur } from "svelte/transition";

    const skillItems = [
        {icon: "simple-icons:python", name: "Python"},
        {icon: "uiw:html5", name: "HTML"},
        {icon: "uiw:css3", name: "CSS"},
        {icon: "mdi:react", name: "React"},
        {icon: "simple-icons:svelte", name: "Svelte"},
        {icon: "mdi:tailwind", name: "Tailwind"},
        {icon: "mdi:git", name: "Git"},
        {icon: "mdi:docker", name: "Docker"},
        {icon: "devicon-plain:mysql", name: "MySQL"},
        {icon: "simple-icons:jupyter", name: "Jupyter"},
        {icon: "uil:linux", name: "Linux"},
        {icon: "ri:notion-fill", name: "Notion"},
        {icon: "solar:figma-bold-duotone", name: "Figma"},
        {icon: "devicon-plain:photoshop", name: "Photoshop"},
        {icon: "devicon-plain:premierepro", name: "Premiere Pro"},
    ]
</script>

<div 
    class="flex flex-wrap gap-6 justify-center md:max-w-md lg:max-w-fit mx-auto"
    in:blur={{
        amount: 5,
        duration: 800,
        easing: expoOut,
    }}
>
    {#each skillItems as item}
        <Skill icon={item.icon} name={item.name}/>
    {/each}
</div>