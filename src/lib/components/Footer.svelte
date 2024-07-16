<script>
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
    import { quartOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    
    let mounted = false
    onMount(() => mounted = true)

    const footerItems = [
        {icon: "mdi:github", url: "https://github.com/oreldx", text: "", label:"GitHub link"},
        {icon: "tabler:mail-filled", url: "mailto:aurelien.dureux+pf@proton.me", text: "", label:"Mail address"},
        {icon: "mdi:linkedin", url: "https://www.linkedin.com/in/dureuxaur%C3%A9lien/", text: "", label:"Linkedin link"},
        {icon: "ph:download-fill", url: "/resume.pdf", text: "My Resume", label:"Resume file"},
    ]

</script>

{#if mounted}
    <ul 
        class="flex justify-between md:justify-evenly lg:justify-start lg:gap-12 mt-auto"
        transition:fly={{
            duration: 1000,
            y: 20,
            delay: 100,
            easing: quartOut,
        }}
    >
        {#each footerItems as item}
            <li class="hover:text-white transition-all">
                <a target="_blank" href={item.url} aria-label={item.label} class="flex items-center gap-3">
                    <Icon icon={item.icon} class="text-3xl"/>{item.text}
                </a>
            </li>
        {/each}
        
    </ul>
{/if}