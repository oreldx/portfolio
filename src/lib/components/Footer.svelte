<script>
    import Icon from '@iconify/svelte';
    
    const footerItems = [
        {icon: "mdi:github", url: "https://github.com/oreldx", text: ""},
        {icon: "mdi:linkedin", url: "https://www.linkedin.com/in/dureuxaur%C3%A9lien/", text: ""},
        {icon: "ph:download-fill", url: "", text: "My Résumé"},
    ]

</script>

<ul class="flex justify-evenly lg:justify-start lg:gap-12 mt-auto">
    {#each footerItems as item}
    <li><a target="_blank" href={item.url} class="flex items-center gap-3"><Icon icon={item.icon} color="FFFFFF" class="text-3xl"/>{item.text}</a></li>
    {/each}
    
</ul>